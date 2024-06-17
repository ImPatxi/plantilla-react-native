import React from 'react';
import { View, Text } from 'react-native';
import { containerStyles } from '../../styles/containerStyles';
import { titlesStyles } from '../../styles/titlesStyles';

const Cameras = () => {
    return (
        <View style={containerStyles.container}>
            <Text style={titlesStyles.title}>Vista de Cámaras</Text>
        </View>
    );
};

export default Cameras;