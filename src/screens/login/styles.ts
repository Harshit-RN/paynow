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
    title: {
    fontSize: 22,
    color: color.white,
    marginTop: px(70),
    textAlign: 'center',
    marginBottom:px(20)
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
   
    textAlign: 'center',
  },
   inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: px(8),
    paddingHorizontal: px(10),
    height: px(45),
    width: '80%',
    alignSelf:'center',
    marginTop:px(30),
    
  },
  phoneIcon: {
    width: px(25),
    height: px(25),
    marginLeft: px(5),
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: color.black,
    writingDirection: 'rtl',
  },
   button: {
    backgroundColor: color.primaryGradientStart,
    paddingVertical: px(10),
    borderRadius: px(15),
    width: '80%',
    alignItems: 'center',
    marginBottom: px(20),
    alignSelf:'center'
  },
  buttonText: {
    color: color.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16,
    alignSelf:'center'
  },
})