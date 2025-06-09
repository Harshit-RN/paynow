import { Dimensions, StyleSheet } from "react-native";
import { color } from "../../constant/color";
import { px } from "../../utils/dimension";



const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: px(20),
    paddingTop: px(50),
    paddingBottom:px(20)
  },
  text: {
    color: color.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: px(10),
  },
  subtitle: {
    fontSize: 16,
    marginBottom: px(20),
  },
  buttonContainer: {
    marginVertical: px(20),
    width: '100%',
  },
  button: {
    alignItems: 'center',
    marginBottom: px(20),
    marginTop: px(20),
    
  },
  buttonImage: {
    width: px(150),
    height: px(85),
    resizeMode: 'contain',
    
  },
  buttonLabelWrapper: {
    backgroundColor: color.primaryGradientStart, // button label background
    paddingVertical: px(10),
    paddingHorizontal: px(15),
    borderRadius: px(30),
    marginBottom: px(5),
    width:'50%'
  },

  buttonLabel: {
    color: '#000', // text color (should contrast with bg)
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  footerTitle: {
    fontSize: 16,
    marginTop: px(30),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: px(15),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 4,
  },
  footerLink: {
    fontSize: 16,
    color: '#00BFFF',
    textDecorationLine: 'underline',
    marginHorizontal: px(4),
    marginTop:px(10)
  },
});