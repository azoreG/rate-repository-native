import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const StyledText = ({
  children,
  align,
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}) => {
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subHeading,
    fontWeight === "bold" && styles.bold,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subheading,
  },
});

export default StyledText;
