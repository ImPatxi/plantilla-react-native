import React from 'react';
import { View, Text } from 'react-native';
import { containerStyles } from '../../styles/containerStyles';
import { titlesStyles } from '../../styles/titlesStyles';

const SOS = () => {
    return (
        <View style={containerStyles.container}>
            <Text style={titlesStyles.title}>Vista de SOS</Text>
        </View>
    );
};

export default SOS;