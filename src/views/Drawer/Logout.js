import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import useStore from '../../store/useStore'; 

const Logout = () => {
    const logout = useStore(state => state.logout);

    useEffect(() => {
        logout();
    }
    , []);

    return (
        <View>
            <Text>Logging out...</Text>
        </View>
    );
}

export default Logout;
