
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { px } from '../../../../utils/dimension';
import { color } from '../../../../constant/color';


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
}

const ImageModal: React.FC<ModalProps> = ({isVisible, onClose, onCamera, onGallery}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalButton} onPress={onCamera}>
          <Text style={styles.modalButtonText}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={onGallery}>
          <Text style={styles.modalButtonText}>Open Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modalButton]}
          onPress={onClose}>
          <Text style={[styles.modalButtonText]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    paddingBottom: px(20),
  },
  modalButton: {
    paddingVertical: px(16),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  modalButtonText: {
    fontSize: px(16),
    fontWeight: '500',
   color:color.black
  },
});
