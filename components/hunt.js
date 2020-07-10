import React from 'react';

const Hunt = (props) => (
    <div className="ui card" key={props.hunt.node.id} style={{ marginLeft: '1em' }}>
        <div className="content">
            <img src={props.hunt.node.thumbnail.url} className="ui mini right floated image" />
            <div className="header">{props.hunt.node.name}</div>
            <div className="meta">{props.hunt.node.tagline}</div>
            <div className="description">
                {props.hunt.node.description}
            </div>
        </div>
        <div className="extra content">
              <div>
                <button className="ui teal right floated button">
                    <a href={props.hunt.node.website} target="_blank" className="">Website</a>
                </button>
                <div className="ui left labeled button" role="button">
                    <div className="ui right labeled button">
                        <div className="ui icon button">
                            <i>Votes</i>
                        </div>
                        <a className="ui basic label">{props.hunt.node.votesCount}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hunt;