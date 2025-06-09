import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  Text,
  View,
  TextStyle,
  ViewStyle,
  I18nManager,
} from 'react-native';
import {color} from '../../constant/color';

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
  maxLength?:number
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  inputStyle,
  containerStyle,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  maxLength
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
    right: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 10],
      outputRange: [18, 12],
    }),
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    textAlign: 'right',
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
            borderBottomColor: isFocused ?  color.black : color.lightSeparatorGray ,
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 30,
  },
  input: {
    height: 40,
    fontSize: 18,
    color: color.black,
    textAlign: 'right',
    paddingHorizontal: 20,
    direction: 'rtl',
    borderBottomWidth: 2,
  },
});

export default TextField;
