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
import {px} from '../../utils/dimension';
import CenterTextField from '../../components/centerTextfield';


const RegisterBusinessNumberScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [mobile, setMobile] = useState('');

  const handleNext = () => {
    navigation.navigate('RegisterBusinessOtp');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
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
                Please provide your mobile number
              </Text>
            </View>

            <View style={{marginTop: px(100)}}>
              <CenterTextField
                label="Mobile number"
                value={mobile}
                onChangeText={setMobile}
                keyboardType={'numeric'}
                maxLength={10}
              />
            </View>

            <View style={{marginTop: px(270)}}>
              <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>Continuation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterBusinessNumberScreen;
