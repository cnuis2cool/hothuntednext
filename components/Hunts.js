import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Hunt from './Hunt';

import {
  Grid,
  Segment
} from 'semantic-ui-react';

const Hunts = () => (
  <Query
    query={gql`
    query { posts(order: RANKING, first: 5) {
        edges{
          cursor
          node{
            id
            name
            tagline
            description
            url
            votesCount
            featuredAt
            thumbnail{
              type
              url
            }
            website
            reviewsRating
    }}}}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      
        return (
        <div className="ui stackable grid">
          {
            data.posts.edges.map((currentHunt) => (
              <div className="four wide computer sixteen wide mobile eight wide tablet column">
                <Hunt key={currentHunt.cursor} hunt={currentHunt} />
              </div>
            ))}
        </div>
      )
    }}
  </Query>
);

export default Hunts;