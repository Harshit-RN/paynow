import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';
import {px} from '../../utils/dimension';
import {color} from '../../constant/color';

export type SignatureModalRef = {
  open: () => void;
  close: () => void;
};

type Props = {
  onOK: (signature: string) => void;
};

const SignatureModal = forwardRef<SignatureModalRef, Props>(({onOK}, ref) => {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  const handleSignature = (sig: string) => {
    onOK(sig);              // Pass signature to parent
    setVisible(false);      // Hide modal
  };

  const handleClear = () => {
    canvasRef.current?.clearSignature();
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Signature</Text>
          <Text style={styles.subtitle}>Sign the document</Text>

          <View style={styles.canvasContainer}>
            <SignatureCanvas
              ref={canvasRef}
              onOK={handleSignature}
              onEmpty={() => console.log('Empty')}
              onClear={() => console.log('Cleared')}
              autoClear={true}
              descriptionText=""
              clearText=""
              confirmText=""
              webStyle={canvasWebStyle}
            />
          </View>

          <View style={styles.actions}>
            <TouchableOpacity onPress={handleClear}>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => canvasRef.current?.readSignature()}
              style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default SignatureModal;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: px(10),
    color: color.black,
  },
  subtitle: {
    fontSize: 18,
    color: color.charcoalGrey,
    textAlign: 'center',
    marginBottom: px(20),
  },
  canvasContainer: {
    width: '100%',
    height: px(300),
    borderColor: color.charcoalGrey,
    borderWidth: 1,
    marginBottom: 10,
  },
  actions: {
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  clearText: {
    color: color.black,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: color.primaryGradientStart,
    paddingHorizontal: px(30),
    paddingVertical: px(10),
    borderRadius: px(30),
    marginTop: px(20),
  },
  saveText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const canvasWebStyle = `
  .m-signature-pad {
    box-shadow: none;
    border: none;
    margin: 0;
  }
  .m-signature-pad--footer { display: none; }
  body,html {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
