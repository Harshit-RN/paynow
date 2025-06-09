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

import {px} from '../../utils/dimension';
import {styles} from './styles';

const RegisterUserSelectBankScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const handleNext = () => {
     navigation.navigate('RegisterUserSelectBranch');
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
            title="Enrollment"
          />
          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Bank Screen Title</Text>
              <Text style={styles.subtitle}>Bank Screen Subtitle</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: px(30),
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={styles.uploadButton}>
                <Text style={styles.buttonText}>Bank Leumi</Text>
                 <Text style={styles.buttonText}>10</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleNext}>
                <Text style={styles.buttonText}>Bank Hapoahm</Text>
                 <Text style={styles.buttonText}>12</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.uploadButton, styles.fullWidth]}>
              <Text style={styles.buttonText}>Israel Discount Bank</Text>
               <Text style={styles.buttonText}>11</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterUserSelectBankScreen;
