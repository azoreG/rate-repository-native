import { View, StyleSheet, Image } from "react-native";
import StyledText from "./styledText";
import theme from "../theme";

const RepositoryItemHeader = ({ repo }) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ flex: 0 }}>
      <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
    </View>

    <View style={{ flex: 1, paddingLeft: 10 }}>
      <StyledText fontWeight="bold">{repo.fullName}</StyledText>
      <StyledText color="secondary">{repo.description}</StyledText>
      <StyledText style={styles.language}>{repo.language}</StyledText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItemHeader;
