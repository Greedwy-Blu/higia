import { ApolloClient, InMemoryCache,ApolloLink , HttpLink} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
    

import { APP_SECRET} from '../graphql/utils';



export const client = new ApolloClient({
  uri: 'http://localhost:3000/api/schema',
  ssrMode: typeof window === 'undefined',
    headers:{
      Authorization:localStorage.getItem(APP_SECRET) || ""
    },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          links: relayStylePagination(),
        },
      },
    },
  }),
});