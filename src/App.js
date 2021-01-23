import React from "react";

import WriteAndReadQuery from './pages/homepage/example1/WriteAndReadQuery'
import SubscriptionQuery from './pages/homepage/example2/SubscriptionQuery'
import ChainSelect from './pages/homepage/example3/ChainSelect'

import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  let client = new ApolloClient({cache: new InMemoryCache(),})
  return (
    <BrowserRouter>
      <ApolloProvider client={client} >
        <Switch>
          <Route exact path="/WriteAndReadQuery" component={WriteAndReadQuery} />
          <Route exact path="/SubscriptionQuery" component={SubscriptionQuery} />
          <Route exact path="/ChainSelect" component={ChainSelect} />
          <Route exact path="/" component={WriteAndReadQuery} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
