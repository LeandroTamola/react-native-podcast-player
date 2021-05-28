import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://itunes-podcast-api.herokuapp.com/query',
  cache: new InMemoryCache(),
});
