import {StyleSheet} from 'react-native';
import {px} from '../../utils/dimension';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  form: {
    flex: 1,
    paddingHorizontal: px(20),
    paddingTop: px(30),
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: px(30),
  },
  title: {
    fontSize: px(20),
    color: color.black,
  },
  subtitle: {
    fontSize: px(14),
    color: color.charcoalGrey,
    marginTop: px(5),
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


  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: px(20),
    marginBottom: px(40),
  },
 dateInput: {
  width: 60,
  height: 50,
  borderBottomWidth: 1.5,
  borderColor: '#ccc',
  fontSize: 18,
  color: '#000',
  textAlign: 'center', // Important for caret at center
},
  dateSeparator: {
    fontSize: px(15),
    color: color.black,
    marginHorizontal: px(2),
  },

});
