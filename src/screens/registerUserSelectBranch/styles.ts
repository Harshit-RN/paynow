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
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
   
    alignItems:'flex-end'
  },
  idContainer: {
    flex: 0.3,
   
     alignItems:'center'
  },
  branchName: {
    fontSize: 16,
    fontWeight: '500',
    color:color.buttonSecondaryText
    
  },
  branchAddress: {
    fontSize: 14,
    color:color.buttonSecondaryText
  },
  branchId: {
    fontSize: 18,
    fontWeight: '600',
   color:color.black,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: color.charcoalGrey,
  },
});
