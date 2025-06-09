import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';
import {styles} from './styles';
import {px} from '../../utils/dimension';
import CenterTextField from '../../components/centerTextfield';

const RegisterBusinessIdScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
const [activeTab, setActiveTab] = useState<'PCID' | 'Licensed'>('Licensed');
  const [pcid, setPcid] = useState('');
  const [licensedBusiness, setLicensedBusiness] = useState('');

  const handleNext = () => {
    const selectedValue = activeTab === 'PCID' ? pcid : licensedBusiness;
    // You can validate or use selectedValue if needed
    navigation.navigate('RegisterBusinessNumber');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <Header 
            title="Enrollment"
            showForwardIcon 
            onPressForward={() => navigation.goBack()}
          />

          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Business ID</Text>
            </View>

            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'PCID' && styles.activeTab]}
                onPress={() => setActiveTab('PCID')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'PCID' && styles.activeTabText,
                  ]}>
                  PCID
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab('Licensed')}
                style={[styles.tab, activeTab === 'Licensed' && styles.activeTab]}>
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === 'Licensed' ? '#007BFF' : '#999' }, // Blue link style
                  ]}>
                  Licensed business
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: px(30)}}>
              <CenterTextField
                label={activeTab === 'PCID' ? 'Enter PCID Number' : 'Enter Licensed Number'}
                placeholder={
                  activeTab === 'PCID'
                    ? 'Enter PCID'
                    : 'Enter the licensed business'
                }
                value={activeTab === 'PCID' ? pcid : licensedBusiness}
                onChangeText={activeTab === 'PCID' ? setPcid : setLicensedBusiness}
                keyboardType={'numeric'}
                maxLength={9}
              />
            </View>

            <View style={{marginTop: px(310)}}>
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

export default RegisterBusinessIdScreen;
