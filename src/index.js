import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider,concat,HttpLink,ApolloLink } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const uri = 'https://countries.trevorblades.com/graphql';
// const uri = 'https://pwcdemo.eastus.cloudapp.azure.com/magentodefault/graphql';
// const uri = 'http://magecommerce.eastus.cloudapp.azure.com/graphql';
const uri = '/api';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    }
  }));

  return forward(operation);
})
const httpLink = new HttpLink({
      uri: uri,
      headers: {
        "Content-Type": "application/json",
      },
  });


const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  defaultOptions : defaultOptions,
  
});

root.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
