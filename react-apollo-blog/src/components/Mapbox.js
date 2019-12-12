import React from 'react';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';
import { GET_SINGLE_POST } from '../graphcms/query';

import ReactMapGL from "react-map-gl";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Mapbox = ({ data: { loading, error, post } }) => {
    if (error) return <h1>Error `${error.message}` </h1>;
    if (!loading) {
        return (
          <article>
            <h1>{post.title}</h1>
            <div className="Post-placeholder">
              <ReactMapGL
                mapboxApiAccessToken={MAPBOX_TOKEN}
                width={600}
                height={360}
                latitude={post.location.latitude}
                longitude={post.location.longitude}
                zoom={15}
                onViewportChange={viewport => {
                  const { width, height, latitude, longitude, zoom } = viewport;
                  // call `setState` and use the state to update the map.
                }}
              />
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