import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';

import {styles} from './styles';
// import TextField from '../../components/textfield';
import { px } from '../../utils/dimension';
import CenterTextField from '../../components/centerTextfield';


const RegisterBusinessOtpScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [otp, setOtp] = useState('');
 

   const handleNext = () => {
    navigation.navigate('RegisterBusinessEmail');
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={{flex: 1}}>
      <ScrollView  showsVerticalScrollIndicator = {false}contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <Header
            showForwardIcon={true}
            onPressForward={() => navigation.goBack()}
             title='Enrollment'
          />
          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Business Details</Text>
              <Text style={styles.subtitle}>
                We have sent you a verification code via SMS
              </Text>
            </View>

            <View  style={{marginTop:px(100)}}>
              <CenterTextField
                label="Verification code"
                value={otp}
                onChangeText={setOtp}
                keyboardType={'numeric'}
                maxLength={10}
              />
                <Text style={styles.subtitle}>
                The code didn't arrive send it again
              </Text>
            </View>

            <View style={{marginTop: px(230)}}>
              <TouchableOpacity  
              onPress={handleNext}
              style={styles.button}>
                <Text style={styles.buttonText}>Continuation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterBusinessOtpScreen;
