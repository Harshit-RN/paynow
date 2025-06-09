
import {StyleSheet} from 'react-native';
import { color } from '../../constant/color';
import { px } from '../../utils/dimension';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: px(10),
    padding: px(20),
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: px(10),
   color:color.black
  },
  icon: {
    width: px(100),
    height: px(100),
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    marginVertical: px(5),
    fontSize: 18,
    color:color.black
  },
  button: {
    marginTop: px(15),
    backgroundColor: color.primaryGradientStart, // button label background
   
    paddingHorizontal: px(30),
    paddingVertical: px(10),
    borderRadius: px(20),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color:color.black
  },
});
