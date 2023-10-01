import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
  const { repositories = null } = data;

  const repositoriesNode = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return { loading, refetch, repositories: repositoriesNode };
};

export default useRepositories;
