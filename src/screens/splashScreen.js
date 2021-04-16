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

import AppTitle from '../components/appTitle';

const SplashScreen = () =>{
    return(
        <View style={[styles.flex1, styles.justifyCenter, styles.alignCenter]}>
            <AppTitle/>
            <View>
                <Text>
                    powered by Bernard Balansag
                </Text>
            </View>
        </View>
    );
}

export default SplashScreen;