import React, {useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {RootNavigationProp} from '../../navigation/stack';

import {styles} from './styles';
import {px} from '../../utils/dimension';
import TextField from '../../components/textfield';

const RegisterUserPaymentScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const monthRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);
  const dayRef = useRef<TextInput>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleNext = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <Header
            showForwardIcon={true}
            onPressForward={() => navigation.goBack()}
            title="Enrollment"
          />
          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Payment Method Title</Text>
              <Text style={styles.subtitle}>Payment Method Subtitle</Text>
            </View>

            {/* Instruction */}
            <Text style={styles.instruction}>
              Present a credit card as a deposit if you are interested paying
              noew & do not yet have the authorization to debit from your
              account
            </Text>

            {/* Dropdown & Button Section */}
            <View style={styles.dropdownWrapper}>
              <TouchableOpacity style={styles.touchContainer}>
                <Image
                  source={require('../../assets/images/registerUserId/path.png')}
                  style={styles.logo}
                />
                <Text style={styles.touchText}>
                  Scan yor credit card for quick top-up
                </Text>
                <Image
                  source={require('../../assets/images/registerUserId/group25.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={[styles.subtitle, {marginTop: px(30)}]}>
                or enter credit card details
              </Text>
            </View>

            <View style={{marginTop: px(10)}}>
              <TextField
                label="Card number"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType={'default'}
                maxLength={16}
              />
              <TextField
                label="Card Holder Name"
                value={cardHolder}
                onChangeText={setCardHolder}
                keyboardType={'default'}
                maxLength={16}
              />
              <View style={[styles.dateInputContainer, {flexDirection: 'row'}]}>
                <TextInput
                  ref={yearRef}
                  style={[styles.dateInput, styles.yearInput]}
                  placeholder="YYYY"
                  placeholderTextColor="#aaa"
                  keyboardType="number-pad"
                  maxLength={4}
                  value={year}
                  onChangeText={setYear}
                  textAlign="center"
                  returnKeyType="done"
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
                  onChangeText={text => {
                    setMonth(text);
                    if (text.length === 2) yearRef.current?.focus();
                  }}
                  textAlign="center"
                  returnKeyType="next"
                />
                <Text style={styles.dateSeparator}>/</Text>

                <TextInput
                  style={styles.dateInput}
                  placeholder="DD"
                  placeholderTextColor="#aaa"
                  keyboardType="number-pad"
                  maxLength={2}
                  value={day}
                  onChangeText={text => {
                    setDay(text);
                    if (text.length === 2) monthRef.current?.focus();
                  }}
                  textAlign="center"
                  returnKeyType="next"
                />
              </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity 
            onPress={handleNext}
            style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterUserPaymentScreen;
