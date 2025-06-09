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
   tabContainer: {
    flexDirection:  'row',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: px(30),
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: px(12),
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth:2,
    borderBottomColor:color.secondary
  },
  tabText: {
    fontSize: 16,
    color: color.black,
  },
  activeTabText: {
    color: color.secondary,
  },
  touchContainer:{
    width:'100%',
    padding:px(20),
    borderWidth:1,
    borderColor:color.black,
    marginTop:px(30),
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
