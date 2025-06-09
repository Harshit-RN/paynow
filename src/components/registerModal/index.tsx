import React from 'react';
import {Modal, View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const translates = (key: string): string => {
  const translations: Record<string, string> = {
    start_register_modal_title: 'Start Registration',
    start_register_modal_description_2:
      'Create your profile in a few easy steps.',
    start_register_modal_description_3: 'Enjoy personalized features.',
    start_register_modal_description_4: 'Track and manage your activity.',
    start_register_modal_description_2_business:
      "Let's get your business registered.",
    start_register_modal_description_3_business:
      'Manage customers and orders efficiently.',
    start_register_modal_description_4_business:
      'Access business tools and reports.',
    start_register_modal_description_5_business: 'Grow your business with us.',
    start_register_modal_button: 'Start User Registration',
    start_register_modal_button_business: 'Start Business Registration',
  };

  return translations[key] || key;
};

interface RegisterModalProps {
  visible: boolean;
  onClose: () => void;
  isBusiness: boolean;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  visible,
  onClose,
  isBusiness,
}) => {
  // console.log('isBusiness ===>', isBusiness);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            {translates('start_register_modal_title')}
          </Text>

          <Image
            source={require('../../assets/images/disconnect/modalicon.png')}
            style={styles.icon}
            resizeMode="contain"
          />

          {isBusiness ? (
            <>
              <Text style={styles.description}>
                {translates('start_register_modal_description_2_business')}
              </Text>
              <Text style={styles.description}>
                {translates('start_register_modal_description_3_business')}
              </Text>
              <Text style={styles.description}>
                {translates('start_register_modal_description_4_business')}
              </Text>
              <Text style={styles.description}>
                {translates('start_register_modal_description_5_business')}
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.description}>
                {translates('start_register_modal_description_2')}
              </Text>
              <Text style={styles.description}>
                {translates('start_register_modal_description_3')}
              </Text>
              <Text style={styles.description}>
                {translates('start_register_modal_description_4')}
              </Text>
            </>
          )}

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>
              {isBusiness
                ? translates('start_register_modal_button_business')
                : translates('start_register_modal_button')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RegisterModal;
