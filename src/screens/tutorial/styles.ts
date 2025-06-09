import {Dimensions, StyleSheet} from 'react-native';
import {px} from '../../utils/dimension';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width,
    height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: px(10),
    paddingHorizontal: px(20),
    borderRadius: px(20),
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skip: {
    paddingVertical: px(10),
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
});
