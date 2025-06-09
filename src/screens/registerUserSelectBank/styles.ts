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

  buttonText: {
    color: color.charcoalGrey,
    fontSize: 14,
  },

  uploadButton: {
    borderWidth: 1,
    borderColor: color.charcoalGrey,
    borderRadius: px(5),
    paddingVertical: px(10),
    width: '48%',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
    marginTop:px(20)
  },
});
