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

const RegisterScreen = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Register Screen Here</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen;