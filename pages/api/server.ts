import { ApolloServer } from 'apollo-server-micro';
import { PageConfig } from 'next';
import { schema } from '../../graphql/schema';
import {createContext} from '../../graphql/context'
import { NextApiRequest, NextApiResponse } from 'next';

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

const startServer = apolloServer.start();

export default async (req:NextApiRequest, res:NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
    
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With,  Content-Type, Authorization, Accept, Accept-Language, X-Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/server',
  })(req, res);
};

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};