import { useState } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

// apollo client
// Todo: extract this
const httpLink = new HttpLink({
  uri: 'https://modernliberal.hasura.app/v1/graphql',
});

function App() {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Header />
        HERE WE GO LET'S GET FUNDED
      </div>
    </ApolloProvider>
  );
}

export default App;
