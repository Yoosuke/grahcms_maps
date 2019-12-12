import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';
import { GET_SINGLE_POST } from '../graphcms/query';
import Map from "./Map.js";

const HERE_ID = process.env.REACT_APP_HERE_ID;
const HERE_CODE = process.env.REACT_APP_HERE_CODE;

class Here extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'normal.day',
        }
    }

    componentDidMount() {
          const { data } = this.props
          if (!data) return

          this.setState(state => ({
            ...state,
            ...data
          }))
        }

    render() {
      const { data: { loading, error, post } } = this.props
    if (error) return <h1>Error `${error.message}` </h1>;
    if (!loading) {
        return (
          <article>
            <h1>{post.title}</h1>
            <div className="Post-placeholder">
              <Map
                app_id={HERE_ID}
                app_code={HERE_CODE}
                lat={post.location.latitude}
                lng={post.location.longitude}
                zoom="12"
                theme={this.state.theme}
              />
            </div>
            <Markdown source={post.content} escapeHtml={false} />
          </article>
        );
    }
    return <h2>Loading post...</h2>;
  }
}

export default graphql(GET_SINGLE_POST, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug,
      developer: match.params.developer,
    }
  })
})(Here);