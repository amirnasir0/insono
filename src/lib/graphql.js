import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL;

if (!endpoint) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_GRAPHQL is not defined in .env");
}

export const graphQLClient = new GraphQLClient(endpoint);

// Fetch latest 10 posts
export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 10) {
      nodes {
        id
        title
        slug
        date
        excerpt
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// Fetch products
export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

// Fetch single post by slug
export const GET_POST_BY_SLUG = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      content
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;
