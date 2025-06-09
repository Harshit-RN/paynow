import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color } from '../../constant/color';
import { px } from '../../utils/dimension';

interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
}

const CenterTextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  inputStyle,
  containerStyle,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: 'absolute',
    alignSelf: 'center',
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    textAlign: 'center',
    color: color.black,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          inputStyle,
          {
            borderBottomColor: isFocused ? color.black : color.lightSeparatorGray,
          },
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholder={isFocused ? placeholder : ''}
        placeholderTextColor={color.black}
        maxLength={maxLength}
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: px(20),
    marginBottom: px(30),
    alignItems: 'center',
  },
  input: {
    height: px(45),
    fontSize: 18,
    color: color.black,
    borderBottomWidth: 2,
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default CenterTextField;
