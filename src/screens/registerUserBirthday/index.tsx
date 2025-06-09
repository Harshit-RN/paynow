import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {RootNavigationProp} from '../../navigation/stack';
import {styles} from './styles';
import { px } from '../../utils/dimension';

const RegisterUserBirthdayScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const monthRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);

  const handleContinue = () => {
    const dob = `${day}/${month}/${year}`;
    // console.log('Date of Birth:', dob);
    navigation.navigate('RegisterUserSelectBank');
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
           title='Enrollment'
          showForwardIcon 
          onPressForward={() => navigation.goBack()} />

          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Identification Information</Text>
              <Text style={styles.subtitle}>Enter your Date of Birth</Text>
            </View>

            <View style={styles.dateInputContainer}>
              <TextInput
                style={styles.dateInput}
                placeholder="DD"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                maxLength={2}
                value={day}
                onChangeText={(text) => {
                  setDay(text);
                  if (text.length === 2) monthRef.current?.focus();
                }}
                textAlign="center"
                returnKeyType="next"
              />
              <Text style={styles.dateSeparator}>/</Text>

              <TextInput
                ref={monthRef}
                style={styles.dateInput}
                placeholder="MM"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                maxLength={2}
                value={month}
                onChangeText={(text) => {
                  setMonth(text);
                  if (text.length === 2) yearRef.current?.focus();
                }}
                textAlign="center"
                returnKeyType="next"
              />
              <Text style={styles.dateSeparator}>/</Text>

              <TextInput
                ref={yearRef}
                style={styles.dateInput}
                placeholder="YYYY"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                maxLength={4}
                value={year}
                onChangeText={setYear}
                textAlign="center"
                returnKeyType="done"
              />
            </View>
            <View style={{marginTop: px(340), width:'100%'}}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continuation</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterUserBirthdayScreen;
