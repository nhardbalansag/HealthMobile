import React from 'react';

import{
    View,
    Text
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

const AppTitle = () =>{
    return(
        <View style={[styles.flexColumn, styles.alignCenter]}>
            <Text style={[styles.font40, styles.textBold, {color:colors.goldenrod}]}>BALCC</Text>
            <Text style={[styles.font40, styles.textBold, {color:colors.goldenrod}]}>CARE</Text>
        </View>
    );
}

export default AppTitle;