import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../constant/color';
import {deviceHeight, px} from '../../utils/dimension';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageContainer:{
    width:'100%',
    height:'30%'
  },
   background: {
    width :'100%',
    height : '100%',
  },
   initialContainer: {
    alignItems:'flex-end',
    padding:px(15)
  },
  initialText: {
   fontSize: 14,
    color: color.white,
     marginTop:px(5)
  },
  button: {
    backgroundColor: color.primaryGradientStart,
    paddingVertical: px(10),
    borderRadius: px(15),
    width: '30%',
    alignItems: 'center',
    alignSelf:'center'
  },
  buttonText: {
    color: color.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  balanceCard: {
  backgroundColor: '#fff',
  marginHorizontal: 20,
  marginTop: -px(80),
  borderRadius: 10,
  paddingVertical: 20,
  paddingHorizontal: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 4,
  elevation: 3,
},
cardTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: color.black,
  textAlign: 'right',
  marginBottom: 10,
  paddingRight: 10,
},
cardContent: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
},
cardItem: {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 10,
},
cardIcon: {
  width: 28,
  height: 28,
  resizeMode: 'contain',
  marginBottom: 8,
},
cardLabel: {
  fontSize: 12,
  color: color.charcoalGrey,
  marginBottom: 5,
},
cardAmount: {
  fontSize: 18,
  fontWeight: '700',
  color: '#000',
},
cardDivider: {
  width: 1,
  height: '100%',
  backgroundColor: '#ddd',
  marginHorizontal: 8,
},
transactionSection: {
  marginTop: 20,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 10,
  color: color.black,
  textAlign:'right'
},
transactionItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},
amount: {
  fontSize: 18,
  fontWeight: '600',
  color: color.black,
},
details: {
  flex: 1,
  marginRight: px(20),
  alignItems:'flex-end'
},
storeName: {
  fontSize: 14,
  fontWeight: 'bold',
  color: color.black,
},
meta: {
  fontSize: 12,
  color: color.charcoalGrey,
  marginTop: 2,
},
logo: {
  width: 32,
  height: 32,
  resizeMode: 'contain',
  marginLeft: 10,
},

});
