import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  View,
} from 'react-native';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';
import {styles} from './styles';

// import TextField from '../../components/textfield';
import {px} from '../../utils/dimension';
import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import ImageModal from './components/imageModal';
import ImagePreviewModal from './components/imagePreviewModal';
import CenterTextField from '../../components/centerTextfield';

const RegisterUserIdScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [activeTab, setActiveTab] = useState<'ID' | 'PCID'>('ID');
  const [idNumber, setIdNumber] = useState('');
  const [hpNumber, setHpNumber] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera access.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleOpenCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      return;
    }
    setIsModalVisible(false);
    launchCamera({mediaType: 'photo'}, response => {
      
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
        setIsPreviewVisible(true);
      }
    });
  };

  const handleOpenGallery = () => {
    setIsModalVisible(false);
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
        setIsPreviewVisible(true);
      }
    });
  };

  const handleNext = () => {
    const selectedValue = activeTab === 'ID' ? idNumber : hpNumber;
    // console.log('Selected Input:', selectedValue);
     navigation.navigate('RegisterUserGender');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
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
              <Text style={styles.title}>Identity Details</Text>
              <Text style={styles.subtitle}>
                Choose between an ID number or Social security number
              </Text>
            </View>

            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'ID' && styles.activeTab]}
                onPress={() => setActiveTab('ID')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'ID' && styles.activeTabText,
                  ]}>
                  ID Number
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, activeTab === 'PCID' && styles.activeTab]}
                onPress={() => setActiveTab('PCID')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'PCID' && styles.activeTabText,
                  ]}>
                  PCID Number
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: px(40)}}>
              <CenterTextField
                label={activeTab === 'ID' ? 'ID Number' : 'PCID Number'}
                value={activeTab === 'ID' ? idNumber : hpNumber}
                onChangeText={activeTab === 'ID' ? setIdNumber : setHpNumber}
                keyboardType="numeric"
                maxLength={9}
              />
            </View>

            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => setIsModalVisible(true)}>
              <Image
                source={require('../../assets/images/registerUserId/path.png')}
                style={styles.logo}
              />
              <Text style={styles.touchText}>To View and upload image</Text>
              <Image
                source={require('../../assets/images/registerUserId/group25.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <View style={{marginTop: px(140)}}>
              <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>Continuation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <ImageModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCamera={handleOpenCamera}
        onGallery={handleOpenGallery}
      />

      <ImagePreviewModal
        isVisible={isPreviewVisible}
        onClose={() => setIsPreviewVisible(false)}
        imageUri={imageUri}
        onConfirm={() => {
          setIsPreviewVisible(false);
          navigation.navigate('RegisterUserGender');
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterUserIdScreen;
