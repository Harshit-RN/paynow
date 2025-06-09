import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {RootNavigationProp} from '../../navigation/stack';

import {styles as screenStyles} from './styles';
import {px} from '../../utils/dimension';
import SignatureModal ,{
    SignatureModalRef
}

from '../../components/signatureModal';

const RegisterUserApprovalScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const modalRef = useRef<SignatureModalRef>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const handleNext = () => {
    modalRef.current?.open();
  };

  const handleSignatureOK = (sig: string) => {
    setSignature(sig);
    // console.log('Captured signature:', sig);
    // Optionally navigate or save
    navigation.navigate('RegisterUserAgreement');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={screenStyles.container}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <Header
            showForwardIcon={true}
            onPressForward={() => navigation.goBack()}
            title="Enrollment"
          />
          <View style={screenStyles.form}>
            <View style={screenStyles.headerContainer}>
              <Text style={screenStyles.title}>Approval Title</Text>
              <Text style={screenStyles.subtitle}>Approval Subtitle</Text>
            </View>

            <View style={{marginTop: px(460)}}>
              <TouchableOpacity onPress={handleNext} style={screenStyles.button}>
                <Text style={screenStyles.buttonText}>Continuation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <SignatureModal ref={modalRef} onOK={handleSignatureOK} />
    </KeyboardAvoidingView>
  );
};

export default RegisterUserApprovalScreen;
