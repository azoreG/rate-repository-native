import ApolloClient from "apollo-boost";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:4000/graphql",
  });
};

export default createApolloClient;
