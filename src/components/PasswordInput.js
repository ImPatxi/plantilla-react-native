// src/components/PasswordInput.js
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/Colors';
import { inputStyles, inputTheme } from '../styles/inputStyles';
import strings from '../resources/strings';

const PasswordInput = ({ value = '', onChangeText, icon = "eye" }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
<TextInput
  label={strings.login.password}
  value={value}
  onChangeText={onChangeText}
  secureTextEntry={secureTextEntry}
  right={
    <TextInput.Icon
      name={secureTextEntry ? "eye-off" : icon}
      onPress={() => setSecureTextEntry(!secureTextEntry)}
      accessibilityLabel={secureTextEntry ? strings.accessibilityLabels.showPassword : strings.accessibilityLabels.hidePassword}
    />
  }
  mode="outlined"
  style={inputStyles.input}
  theme={inputTheme}
  accessibilityLabel={strings.login.password}
/>

  );
};

export default PasswordInput;
