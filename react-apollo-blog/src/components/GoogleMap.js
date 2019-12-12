import React from 'react';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';
import { GET_SINGLE_POST } from '../graphcms/query';

import GoogleMapReact from 'google-map-react'; 
const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

const Mapbox = ({ data: { loading, error, post } }) => {
    if (error) return <h1>Error `${error.message}` </h1>;
    if (!loading) {
        return (
          <article>
            <h1>{post.title}</h1>
            <div className="Post-placeholder">
              <div style={{ height: "360px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
                  defaultCenter={{
                    lat: post.location.latitude,
                    lng: post.location.longitude
                  }}
                  defaultZoom={15}
                ></GoogleMapReact>
              </div>
            </div>
            <Markdown source={post.content} escapeHtml={false} />
          </article>
        );
    }
    return <h2>Loading post...</h2>;
};


export default graphql(GET_SINGLE_POST, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug,
      developer: match.params.developer,
    }
  })
})(Mapbox);