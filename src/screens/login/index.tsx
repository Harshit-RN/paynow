import {Image, ImageBackground, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/header';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';


const TITLE_LABEL = 'login_screen_title';
const SUBTITLE_LABEL = 'login_screen_subtitle';
const CODE_LABEL = 'login_screen_subtitle_code';
const ERROR_LABEL = 'login_screen_error';
const NO_CODE_LABEL = 'login_screen_no_code';
const SEND_AGAIN_LABEL = 'login_screen_send_again';
const BUTTON_LABEL = 'login_screen_button';
const FOOTER_LABEL = 'login_screen_footer';



const translates = (key: string): string => {
  const translations: Record<string, string> = {
    login_screen_title: 'Connection',
    login_screen_subtitle: 'Enter your phone number and we will',
    login_screen_subtitle_code: 'send you an identification code',
    login_screen_button :'Continuation',
    login_screen_footer: 'Already not registered? Click here !',
  };

  return translations[key] || key;
};

const LoginScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (text: string) => {
    
    // Allow only digits and limit to 10
    const filtered = text.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(filtered);
  };

  const handleContinue = () => {
   navigation.navigate('Home');
  };

  const handleRegisterPress = () => {
     navigation.navigate('Disconnect');
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header
        showForwardIcon={true}
        onPressForward={() => navigation.goBack()}
      />
      <ImageBackground
        source={require('../../assets/images/background/group2.png')}
        style={styles.background}
        resizeMode="cover">
        <Text style={styles.title}>{translates(TITLE_LABEL)}</Text>
        <Text style={styles.subtitle}>
         {translates(SUBTITLE_LABEL)}
        </Text>
         <Text style={styles.subtitle}>
         {translates(CODE_LABEL)}
        </Text>

        <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/login/group4.png')} 
          style={styles.phoneIcon}
        />
        <TextInput
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
          style={styles.input}
          maxLength={10}
          textAlign="right"
        />
      </View>
      <View style={{flex:0.8}}>

      </View>
       <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>{translates(BUTTON_LABEL)}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.bottomText}>{translates(FOOTER_LABEL)}</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
