import { ApolloClient, InMemoryCache,ApolloLink , HttpLink, from} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

import { onError } from '@apollo/client/link/error';


// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
      );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: "http://localhost:3000/api/server", // Server URL (must be absolute)
  credentials: 'include',
  fetch,
});

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
  link: from([errorLink, httpLink]),
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