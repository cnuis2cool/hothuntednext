import Head from 'next/head';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';

import Hunts from '../components/hunts';

import Layout from "../components/layout";

import 'semantic-ui-css/semantic.min.css';

import {
  Button,
  Card,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const client = new ApolloClient({
  uri: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    authorization: `Bearer Y0qgFNy6xrPmmS6Gb5qN7EMWmaN7-O9tBrHqAkg6gBk` //${process.env.REACT_APP_PH_KEY}` // TODO: Env variable doesn't work
  }
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Hunts />
      </Layout>
      <footer className="footer">
      <div className="ui inverted vertical segment">
        <div className="ui container">
          <div className="ui inverted stackable divided grid">
            <div className="row">
              <div className="computer only six wide column">
                <h4 className="ui inverted header">Tech Stack</h4>
                <div role="list" className="ui inverted horizontal list">
                  <a role="listitem" className="item">ReactJS</a>
                  <a role="listitem" className="item">NextJS</a>
                  <a role="listitem" className="item">Semantic UI</a>
                  <a role="listitem" className="item">GraphQL</a>
                  <a role="listitem" className="item">Apollo Client</a>
                </div>
              </div>
              <div className="five wide column">
                <h4 className="ui inverted header">Creator</h4>
                <p>Made with 💚 by <a target="_blank" href="https://cnuis2cool.github.io/">Srinivas Panuganti</a></p>
              </div>
              <div className="computer tablet only five wide column">
                <h4 className="ui inverted header">Credits</h4>
                <p>Made possible by <a target="_blank" href="https://api.producthunt.com/v2/docs">ProductHunt API</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </ApolloProvider>
  )
}
