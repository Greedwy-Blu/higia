import { createContext } from './context'
import { schema } from './schema'
import { ApolloServer } from 'apollo-server-micro';
import { RequestHandler } from 'micro';
import Cors from 'micro-cors';

import { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors() as (handler: (req: NextApiRequest, res: NextApiResponse) => void) => RequestHandler;

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  // make sure Apollo Studio is only available in development environment
  introspection: process.env.NODE_ENV === 'development',
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: '/api/schema',
  })(req, res);
});

export const config = {
  api: {
    // disable bodyParser in order to handle GraphQL
    bodyParser: false,
  },
};