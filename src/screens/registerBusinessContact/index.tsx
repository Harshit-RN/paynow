import {
    Alert,
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


const RegisterBusinessContactScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [contactDetails, setContactDetails] = useState('');

  const handleNext = () => {
    Alert.alert('test developer =====>')
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
              <Text style={styles.title}>Business Contact</Text>
              <Text style={styles.subtitle}>
                Enter the Business Contact
              </Text>
            </View>

            <View style={{marginTop: px(100)}}>
              <CenterTextField
                label="Enter Contact Details"
                value={contactDetails}
                onChangeText={setContactDetails}
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

export default RegisterBusinessContactScreen;
