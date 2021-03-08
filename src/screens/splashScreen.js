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

const SplashScreen = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Splash Screen Here</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SplashScreen;