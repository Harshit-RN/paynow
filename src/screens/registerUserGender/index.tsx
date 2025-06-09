import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import Header from '../../components/header';
import {RootNavigationProp} from '../../navigation/stack';
import {px} from '../../utils/dimension';

const RegisterUserGenderScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [selectedGender, setSelectedGender] = useState<
    'male' | 'female' | null
  >(null);

  const handleContinue = () => {
    // console.log('Selected gender:', selectedGender);
    navigation.navigate('RegisterUserBirthday');
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
            title="Enrollment"
            showForwardIcon
            onPressForward={() => navigation.goBack()}
          />

          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Identification Information</Text>
              <Text style={styles.subtitle}>אני</Text>
            </View>

            <View style={styles.genderContainer}>
              {/* Male Option */}
              <TouchableOpacity
                style={styles.genderOption}
                onPress={() => setSelectedGender('male')}>
                <Image
                  source={require('../../assets/images/registerUserGender/male.png')}
                  style={styles.genderIcon}
                  resizeMode="contain"
                />
                <View style={styles.rowView}>
                  <Text style={styles.genderLabel}>Man</Text>
                  <View style={styles.radioOuterCircle}>
                    {selectedGender === 'male' && (
                      <View style={styles.radioInnerCircle} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>

              {/* Female Option */}
              <TouchableOpacity
                style={styles.genderOption}
                onPress={() => setSelectedGender('female')}>
                <Image
                  source={require('../../assets/images/registerUserGender/female.png')}
                  style={styles.genderIcon}
                  resizeMode="contain"
                />
                <View style={styles.rowView}>
                  <Text style={styles.genderLabel}>Woman</Text>
                  <View style={styles.radioOuterCircle}>
                    {selectedGender === 'female' && (
                      <View style={styles.radioInnerCircle} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: px(255), width: '100%'}}>
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

export default RegisterUserGenderScreen;
