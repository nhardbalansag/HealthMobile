import React, {useEffect} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
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

import { GoogleSignin, statusCodes, GoogleSigninButton  } from 'react-native-login-google';

const LoginScreen = () =>{

    const configureGoogle = () =>{
        configGoogle();
        signIn();
    }


    const configGoogle = () =>{
        try {
            GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
                offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                hostedDomain: '', // specifies a hosted domain restriction
                loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
                forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
                accountName: '', // [Android] specifies an account name on the device that should be used
                iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
              });
        } catch (error) {
            console.warn(error.message)
        }
    }

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.warn(userInfo)
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.warn(error.message)
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
            console.warn(error.message)
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.warn(error.message)
          } else {
            // some other error happened
            console.warn(error.message)
          }
        }
    };

    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => configureGoogle()}
                            disabled={false} 
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;