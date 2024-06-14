import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import strings from '../../resources/strings';
import { titlesStyles } from '../../styles/titlesStyles';
import { containerStyles } from '../../styles/containerStyles';
import useStore from '../../store/useStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const setToken = useStore(state => state.setToken);

  const handleLogin = () => {
    console.log('Logging in...');
    const token = Math.random().toString(36).substr(2);
    setToken(token);
  };

  return (
    <View style={containerStyles.paddingContainer20}>
      <Text style={titlesStyles.title}>{strings.login.loginTitle}</Text>
      <EmailInput value={email} onChangeText={setEmail} />
      <PasswordInput value={password} onChangeText={setPassword} />
      <CustomButton title={strings.login.loginButton} onPress={handleLogin} />
      <CustomButton title={strings.login.registerButton} onPress={() => navigation.navigate('Register')} />
      <CustomButton title={strings.login.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
};

export default Login;
