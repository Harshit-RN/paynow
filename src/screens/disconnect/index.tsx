import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';

import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';
import RegisterModal from '../../components/registerModal';

const TITLE_LABEL = 'disconnected_home_screen_title';
const SUBTITLE_LABEL = 'disconnected_home_screen_subtitle';
const ADDITIONAL_SUBTITLE_LABEL = 'disconnected_home_screen_footer_title';
const REGULAR_CUSTOMER_BUTTON_LABEL =
  'disconnected_home_screen_regular_customer_button';
const REGULAR_CUSTOMER_LABEL = 'disconnected_home_screen_regular_customer';
const BUSINESS_CUSTOMER_BUTTON_LABEL =
  'disconnected_home_screen_business_customer_button';
const BUSINESS_CUSTOMER_LABEL = 'disconnected_home_screen_business_customer';
const FOOTER_QUESTION_LABEL = 'disconnected_home_screen_footer_question';
const FOOTER_LOGIN_BUTTON_LABEL =
  'disconnected_home_screen_footer_login_button';
const FOOTER_CUSTOMER_SUPPORT_BUTTON_LABEL =
  'disconnected_home_screen_footer_customer_support_button';

const CUSTOMER_TYPES = {
  USER: 'user',
  BUSINESS: 'business',
};

const translates = (key: string): string => {
  const translations: Record<string, string> = {
    disconnected_home_screen_title: 'Not registered yet?',
    disconnected_home_screen_subtitle:
      'What would you like to do with your new wallet?',
    disconnected_home_screen_footer_title: 'Registration is free of charge',
    disconnected_home_screen_regular_customer_button: 'Pay',
    disconnected_home_screen_regular_customer: 'Private customer',
    disconnected_home_screen_business_customer_button: 'Pay and get paid',
    disconnected_home_screen_business_customer: 'Business customers only',
    disconnected_home_screen_footer_question: 'Supposed to',
    disconnected_home_screen_footer_login_button:
      'Already registered? Click here !',
    disconnected_home_screen_footer_customer_support_button: 'Customer Support',
  };

  return translations[key] || key;
};

const BUTTONS = {
  REGULAR: {
    image: require('../../assets/images/disconnect/group3.png'),
    buttonText: REGULAR_CUSTOMER_BUTTON_LABEL,
    text: REGULAR_CUSTOMER_LABEL,
    type: CUSTOMER_TYPES.USER,
  },
  BUSINESS: {
    image: require('../../assets/images/disconnect/group5.png'),
    buttonText: BUSINESS_CUSTOMER_BUTTON_LABEL,
    text: BUSINESS_CUSTOMER_LABEL,
    type: CUSTOMER_TYPES.BUSINESS,
  },
};

const DisconnectScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isBusiness, setIsBusiness] = React.useState(false);
  const navigation = useNavigation<RootNavigationProp>();

  const handleButtonPress = (type: string) => {
    setIsBusiness(type === CUSTOMER_TYPES.BUSINESS);
    setModalVisible(true);
  };

  const onUserExistPress = () => {
    navigation.navigate('Login');
  };

  const onCustomerSupportPress = () => {
    console.log('Customer support pressed');
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header />
      <ImageBackground
        source={require('../../assets/images/background/group2.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>
            {translates(TITLE_LABEL)}
          </Text>

          <Text style={[styles.text, styles.subtitle]}>
            {translates(SUBTITLE_LABEL)}
          </Text>

          <View style={styles.buttonContainer}>
            {Object.values(BUTTONS).map((btn, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleButtonPress(btn.type)}>
                <Image source={btn.image} style={styles.buttonImage} />
                <View style={styles.buttonLabelWrapper}>
                  <Text style={styles.buttonLabel}>
                    {translates(btn.buttonText)}
                  </Text>
                </View>
                <Text style={styles.buttonText}>{translates(btn.text)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.text, styles.footerTitle]}>
            {translates(ADDITIONAL_SUBTITLE_LABEL)}
          </Text>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              {translates(FOOTER_QUESTION_LABEL)}
            </Text>

            <Text style={styles.footerLink} onPress={onUserExistPress}>
              {translates(FOOTER_LOGIN_BUTTON_LABEL)}
            </Text>
          </View>
          <Text style={styles.footerLink} onPress={onCustomerSupportPress}>
            {translates(FOOTER_CUSTOMER_SUPPORT_BUTTON_LABEL)}
          </Text>
        </View>
      </ImageBackground>
      <RegisterModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          if (isBusiness) {
            navigation.navigate('RegisterBusinessName');
          } else {
            navigation.navigate('RegisterUserName');
          }
        }}
        isBusiness={isBusiness}
      />
    </View>
  );
};

export default DisconnectScreen;
