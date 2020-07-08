import React from 'react';

import {
  Header,
  Menu,
  Icon,
  Grid,
  Segment,
  List,
  Responsive,
  Sidebar
} from 'semantic-ui-react';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Hunts from './components/hunts';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_PH_GRAPHQL_URL
});

const client1 = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const client = new ApolloClient({
  uri: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PH_KEY}` //${process.env.REACT_APP_PH_KEY}` // TODO: Env variable doesn't work
  }
});

const timeNow = new Date().toUTCString();

const App = () => (
  <ApolloProvider client={client} className="container">
    <div>
      <header className="App-header">
        <h2>Hot Hunts</h2>
        <div className="meta">
          <h4>Today's Top 5 Products from ProductHunt</h4>
        </div>
      </header>
      {/* <div className="ui inverted vertical center aligned segment">
        <div className="ui text container">
          <h2 className="ui inverted header title">Hot Hunted</h2>
          <h4 className="ui inverted header sub-title">Today's Top 5 Products from ProductHunt</h4>
          <h5 className="ui inverted header">{timeNow}</h5>
        </div>
      </div> */}
    </div>
    <main>
      <Hunts />
    </main>
    <div></div>
    <footer className="footer">
      <div className="ui inverted vertical segment">
        <div >
          <div className="ui inverted stackable divided grid">
            <div className="row">
              <div className="computer only five wide column">
                <h4 className="ui inverted header">Tech Stack</h4>
                <div role="list" className="ui inverted horizontal list">
                  <a role="listitem" className="item">ReactJS</a>
                  <a role="listitem" className="item">Semantic UI</a>
                  <a role="listitem" className="item">GraphQL</a>
                  <a role="listitem" className="item">ApolloClient</a>
                </div>
              </div>
              <div className="five wide column">
                <h4 className="ui inverted header">Creator</h4>
                <p>Made with 💚 by <a href="https://cnuis2cool.github.io/">Srinivas Panuganti</a></p>
              </div>
              <div className="computer tablet only five wide column">
                <h4 className="ui inverted header">Credits</h4>
                <p>Made possible by <a href="https://api.producthunt.com/v2/docs">ProductHunt API</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  </ApolloProvider>
);

export default App;
