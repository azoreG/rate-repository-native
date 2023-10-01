import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
    />
  );
};

export default RepositoryList;
