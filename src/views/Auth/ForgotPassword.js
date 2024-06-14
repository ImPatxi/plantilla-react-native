// src/views/Auth/ForgotPassword.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import EmailInput from '../../components/EmailInput';
import { containerStyles } from '../../styles/containerStyles';
import strings from '../../resources/strings';
import { useNavigation } from '@react-navigation/native';
import { titlesStyles } from '../../styles/titlesStyles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    console.log('Resetting password...');
  };

  return (
    <View style={containerStyles.container}>
      <Text style={titlesStyles.title}>{strings.login.forgotPassword}</Text>
      <EmailInput value={email} onChangeText={setEmail} />
      <CustomButton title={strings.login.forgotPasswordButton} onPress={handleResetPassword} />
      <CustomButton title={strings.navigation.goBack} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ForgotPassword;
