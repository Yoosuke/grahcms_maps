import React from 'react';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';
import { GET_SINGLE_POST } from '../graphcms/query';
import Leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

const Here = ({ data: { loading, error, post } }) => {
    if (error) return <h1>Error `${error.message}` </h1>;
    if (!loading) {
        return (
          <article>
            <h1>{post.title}</h1>
            <div className="Post-placeholder">
              <Map
                center={[post.location.latitude, post.location.longitude]}
                zoom={15}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[post.location.latitude, post.location.longitude]}
                >
                  <Popup>
                    {post.title}
                  </Popup>
                </Marker>
              </Map>
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
})(Here);