import {Dimensions, Platform, StyleSheet} from 'react-native';
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
    color:color.black
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
    elevation:5,
    marginTop:px(70)
  },
  buttonText: {
    color: color.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    color: color.charcoalGrey,
    textAlign: 'center',
    marginBottom: px(20),
  },
  infoCard: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: px(8),
    padding: px(16),
    backgroundColor: '#fff',
    marginBottom: px(20),
    marginTop:px(50)
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: px(16),
  },
  underline: {
    textDecorationLine: 'underline',
    color: color.black,
    fontSize: 14,
  },
  entityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: px(12),
    marginTop:px(10)
  },
  col: {
    width: '48%',
    alignItems:'flex-end'
  },
  label: {
    fontSize: 14,
    color: color.charcoalGrey,
    marginBottom: 4,
    textAlign:'center'
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dropdownWrapper: {
    marginBottom: px(20),
  },
  dropdown: {
    marginTop: px(8),
    padding: px(12),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
    touchContainer:{
      width:'100%',
      padding:px(20),
      borderWidth:1,
      borderColor:color.black,
      marginTop:px(20),
      borderRadius:px(8),
      flexDirection:'row',
      justifyContent:'space-between'
    },
     logo: {
        width: px(10),
        height: Platform.OS === 'ios' ? px(20) : px(20),
        resizeMode: 'contain',
        marginLeft: Platform.OS === 'ios' ? px(10) : 0,
      },
      icon: {
        width: px(25),
        height: px(25),
        resizeMode: 'contain',
        marginRight: Platform.OS === 'ios' ? px(10) : 0,
      },
      touchText: {
      fontSize: 18,
      color: color.black,
    },
});
