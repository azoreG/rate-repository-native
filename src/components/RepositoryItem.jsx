import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader repo={repo} />
      <RepositoryStats repo={repo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, PaddingTop: 5 },
});

export default RepositoryItem;
