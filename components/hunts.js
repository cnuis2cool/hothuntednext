import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Hunt from './hunt';

import {
  FacebookShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

import {
  FacebookShareCount,
  LinkedinShareCount,
  MailruShareCount,
  TwitterShareCount,
  WhatsappShareCount
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  MailruIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

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

        const shareUrl = "https://hothunts.vercel.app/";
        const title = "Hot Hunts Today";
      
        return (
        <div className="ui stackable grid">
          {
            data.posts.edges.map((currentHunt) => (
              <div key={currentHunt.cursor} className="five wide computer sixteen wide mobile seven wide tablet column">
                <Hunt hunt={currentHunt} />
              </div>
            ))}
            <div className="five wide computer sixteen wide mobile seven wide tablet column">
              <div className="ui red card" style={{ backgroundColor: '#97efeb' }}>
                <div className="content">
                  <div className="center aligned header">Share with the World</div>
                </div>
                <div className="center aligned content">
                  <div className="description">
                    Help me spreading the word. <br/>
                    Share with your contacts and followers.
                  </div>
                </div>
                <div className="center aligned extra content">
                  <TwitterShareButton style={{ marginRight: '3px'}}
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <FacebookShareButton style={{ marginRight: '3px'}}
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button">
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <WhatsappShareButton style={{ marginRight: '3px'}}
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button">
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton style={{ marginRight: '3px'}}
                    url={shareUrl} 
                    className="Demo__some-network__share-button">
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
        </div>
      )
    }}
  </Query>
);

export default Hunts;