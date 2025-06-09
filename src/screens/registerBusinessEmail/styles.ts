import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../constant/color';
import {px} from '../../utils/dimension';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  form: {
    padding: px(20),
    flex: 1,
  },
  headerContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: px(10),
  },
  subtitle: {
    fontSize: 18,
    color: color.charcoalGrey,
    textAlign: 'center',
    marginBottom: px(20),
  },
 button: {
    backgroundColor: color.primaryGradientStart,
    paddingVertical: px(10),
    borderRadius: px(15),
    width: '90%',
    alignItems: 'center',
    marginBottom: px(20),
    alignSelf:'center',
    elevation:5
  },
  buttonText: {
    color: color.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
