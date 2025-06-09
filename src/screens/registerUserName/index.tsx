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
import TextField from '../../components/textfield';
import {px} from '../../utils/dimension';

const RegisterUserNameScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    navigation.navigate('RegisterUserNumber');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
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
              <Text style={styles.title}>Personal Details</Text>
              <Text style={styles.subtitle}>
                Please provide your first name and last name
              </Text>
            </View>

            <View style={{marginTop: px(100)}}>
              <TextField
                label="first name"
                value={firstName}
                onChangeText={setFirstName}
                keyboardType={'default'}
              />
              <TextField
                label="last name"
                value={lastName}
                onChangeText={setLastName}
                keyboardType={'default'}
              />
            </View>

            <View style={{marginTop: px(200)}}>
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

export default RegisterUserNameScreen;
