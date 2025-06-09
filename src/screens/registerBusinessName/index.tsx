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


const RegisterBusinessNameScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [businessName, setBusinessName] = useState('');

  const handleNext = () => {
    navigation.navigate('RegisterBusinessId');
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
              <Text style={styles.title}>Business Name</Text>
              <Text style={styles.subtitle}>
                Enter the Business Name
              </Text>
            </View>

            <View style={{marginTop: px(100)}}>
              <CenterTextField
                label="Enter Business Name"
                value={businessName}
                onChangeText={setBusinessName}
                keyboardType={'default'}
                maxLength={20}
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

export default RegisterBusinessNameScreen;
