import React from 'react';
import { View, Text } from 'react-native';
import { containerStyles } from '../../styles/containerStyles';
import { titlesStyles } from '../../styles/titlesStyles';

const Help = () => {
    return (
        <View style={containerStyles.container}>
            <Text style={titlesStyles.title}>Vista de Ayuda</Text>
        </View>
    );
};

export default Help;