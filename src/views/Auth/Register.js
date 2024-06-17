// src/views/Auth/Register.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { titlesStyles } from '../../styles/titlesStyles';
import { containerStyles } from '../../styles/containerStyles';
import strings from '../../resources/strings';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Registering...');
  };

  return (
    <View style={containerStyles.paddingContainer20}>
      <Text style={titlesStyles.title}>{strings.register.registerTitle}</Text>
      <EmailInput value={email} onChangeText={setEmail} />
      <PasswordInput value={password} onChangeText={setPassword} />
      <CustomButton title={strings.register.registerButton} onPress={handleRegister} />
      <CustomButton title={strings.navigation.goBack} onPress={() => navigation.goBack()} />
      
    </View>
  );
};

export default Register;
