import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import {deviceHeight, px} from '../../../../utils/dimension';
import {color} from '../../../../constant/color';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  imageUri: string | null;
  onConfirm: () => void;

}

const ImagePreviewModal: React.FC<Props> = ({isVisible, onClose, imageUri , onConfirm}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Photo Copy of ID card</Text>

          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} resizeMode="contain" />
          ) : null}

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.okButton} onPress={onClose}>
              <Text style={styles.okText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={onConfirm}
            style={styles.okButton}>
              <Text style={styles.okText}>Confirmation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePreviewModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    paddingBottom: px(20),
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  header: {
    alignSelf: 'flex-start',
    marginBottom: px(10),
  },
  closeText: {
    fontSize: 24,
    fontWeight: '600',
    color: color.black,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    color: color.black,
  },
  image: {
    width: '100%',
    height: deviceHeight / 2.3,
    borderRadius: px(8),
    marginBottom: px(15),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  okButton: {
    backgroundColor: color.primaryGradientStart,
    paddingHorizontal: px(20),
    paddingVertical: px(10),
    borderRadius: px(30),
    elevation: 5,
  },
  okText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
