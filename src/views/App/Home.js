import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../../resources/strings';
import { containerStyles } from '../../styles/containerStyles';
import { titlesStyles } from '../../styles/titlesStyles';

const Home = () => {
    return (
        <View style={containerStyles.container}>
            <Text style={titlesStyles.title}>¡Bienvenido a mi aplicación {strings.app.name}!</Text>
        </View>
    );
};

export default Home;