import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

import {
    styles, 
    colors, 
    deviceHeight, 
    deviceWidth, 
    baseWidth, 
    PLATFORM, 
    isIphoneX 
} from '../styles/styles';

const LoginScreen = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Login Screen Here</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;