import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider} from "@apollo/client";

import Layout  from '../components/Container/container'
import { client } from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
 return( 
       <ApolloProvider client={client}>
   
  <Component {...pageProps} />
  
     </ApolloProvider>
 );
}
export default MyApp
