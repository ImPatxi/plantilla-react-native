import React from 'react';
import { TextInput } from 'react-native-paper';
import { inputStyles, inputTheme } from '../styles/inputStyles';
import strings from '../resources/strings';

const EmailInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      label={strings.login.username}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      style={inputStyles.input}
      theme={inputTheme}
      accessibilityLabel={strings.accessibilityLabels.username}
    />
  );
};

export default EmailInput;
