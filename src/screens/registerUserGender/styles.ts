import {StyleSheet} from 'react-native';
import {px} from '../../utils/dimension';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  form: {
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
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: px(40),
  },
  genderOption: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  genderIcon: {
    width: px(80),
    height: px(80),
    marginBottom: px(8),
  },
  genderLabel: {
    fontSize: px(16),
    marginRight:px(10),
    color: color.black,
   alignSelf:'center'
  },
  radioCircle: {
    width: px(16),
    height: px(16),
    borderRadius: px(8),
    borderWidth: 2,
    borderColor: color.black,
  },
  radioSelected: {
    backgroundColor: color.secondary,
    borderColor: color.secondary,
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
  radioOuterCircle: {
  width: px(20),
  height: px(20),
  borderRadius: px(10),
  borderWidth: 2,
  borderColor: '#000', // Or color.black
  alignItems: 'center',
  justifyContent: 'center',
 
},

radioInnerCircle: {
  width: px(10),
  height: px(10),
  borderRadius: px(5),
  backgroundColor: color.secondary, // Make sure color.secondary is defined
},
rowView: {
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  
},

});
