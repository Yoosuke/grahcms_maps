import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { GET_POSTS } from '../graphcms/query';

const POSTS_PER_PAGE = 4;

const Home = ({
    data: { loading, error, posts, postsConnection, networkStatus },
    loadMorePosts,
}) => {
    if (error) return <h1>Error fetching Error `${error.message}`</h1>;
    if (posts && postsConnection) {
        const areMorePosts = posts.length < postsConnection.aggregate.count;
        return (
          <section>
            <ul className="Home-ul">
              {posts.map(post => (
                <li className="Home-li" key={`map-${post.slug}`}>
                  <Link
                    to={`/${post.developer}/${post.slug}`}
                    className="Home-link"
                  >
                    <div className="Home-placeholder">
                      <img
                        alt={post.title}
                        className="Home-img"
                        src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`}
                      />
                    </div>
                    <h3>{post.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="Home-showMoreWrapper">
              {areMorePosts ? (
                <button
                  className="Home-button"
                  disabled={loading}
                  onClick={() => loadMorePosts()}
                >
                  {loading ? "Loading..." : "Show More Posts"}
                </button>
              ) : (
                ""
              )}
            </div>
          </section>
        );
    }
    return <h2>Loading posts...</h2>;
};

export const postsQueryVars = {
    skip: 0,
    first: POSTS_PER_PAGE,
};

export default graphql(GET_POSTS, {
    options: {
        variables: postsQueryVars,
    },
    props: ({ data }) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({
                variables: {
                    skip: data.posts.length,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return previousResult;
                    }
                    return Object.assign({}, previousResult, {
                        posts: [...previousResult.posts, ...fetchMoreResult.posts],
                    });
                },
            });
        },
    }),
})(Home);