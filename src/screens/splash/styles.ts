import { StyleSheet } from "react-native";
import { color } from "../../constant/color";
import { px } from "../../utils/dimension";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: color.secondary,
  },
  animation: {
    flex: 1,
    marginTop: px(100),
  },
  footer: {
    paddingBottom: px(30),
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    flex: 1,
  },
  creditsContainer: {
    justifyContent: 'center',
    marginVertical: px(20),
  },
  credits: {
    alignSelf: 'center',
    color: color.secondaryText,
  },
  version: {
    alignSelf: 'center',
    color: color.secondaryText,
  },
});