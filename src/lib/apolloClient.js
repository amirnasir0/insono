// lib/apolloClient.js
"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mediumslateblue-seahorse-306408.hostingersite.com/graphql", // ✅ apna WP GraphQL endpoint daalna
  cache: new InMemoryCache(),
});

export default client;
