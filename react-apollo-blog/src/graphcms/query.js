import gql from "graphql-tag";

export const GET_POSTS = gql`
         query posts($first: Int!, $skip: Int!) {
           posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
             id
             slug
             title
             dateAndTime
             developer
             coverImage {
               handle
             }
           }
           postsConnection {
             aggregate {
               count
             }
           }
         }
       `;

export const GET_SINGLE_POST = gql`
         query singlePost($slug: String) {
           post(where: { slug: $slug }) {
             id
             slug
             title
             coverImage {
               handle
             }
             content
             dateAndTime
             location {
               latitude
               longitude
             }
           }
         }
       `;

export const GET_AUTHORS = gql`
  query authors {
    authors {
      id
      name
      bibliography
      avatar {
        handle
      }
    }
  }
`;