import React, {useEffect, useState} from 'react';

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { Dimensions } from 'react-native';

import {
    styles, 
    colors, 
    deviceHeight, 
    deviceWidth, 
    baseWidth, 
    PLATFORM, 
    isIphoneX 
} from '../styles/styles';

import { 
    GoogleSignin, 
    statusCodes, 
    GoogleSigninButton  
} from 'react-native-login-google';

import { SocialIcon } from 'react-native-elements'

import { LoginManager, AccessToken  } from "react-native-fbsdk";

import AppTitle from '../components/appTitle';

const LoginScreen = () =>{

    const windowWidth = Dimensions.get('window').width; 

    const [loginGoogle, setLoginGoogle] = useState(false);
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        configGoogle(); 
        isSignedIn()
    },[])

    const configGoogle = () =>{
        try {
            GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                webClientId: '199911427187-omvh48nf6ivjp0eh0uj0itsqlchmis8f.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
                offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
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

    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          console.error(error);
        }
      };
    
    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        setLoginGoogle(isSignedIn)
    };

    const loginFacebook = () => {
      LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                // console.log(data.accessToken.toString())
                loginFacebookInfo(data.accessToken)
              }
            )
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
    }

    const loginFacebookInfo = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
          // Some user object has been set up somewhere, build that user here
          // FacebookInfo.name = json.name
          // FacebookInfo.id = json.id
          // FacebookInfo.user_friends = json.friends
          // FacebookInfo.email = json.email
          // FacebookInfo.username = json.name
          // FacebookInfo.loading = false
          // FacebookInfo.loggedIn = true
          // FacebookInfo.avatar = setAvatar(json.id)      
          console.warn(json.name)
        })
        .catch(() => {
          reject('ERROR GETTING DATA FROM FACEBOOK')
        })
    }

    return(
      <ImageBackground 
        source={require('../styles/image/BALCC.png')} 
        style={
          [{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}]}>
          <SafeAreaView>
            <ScrollView>
              <View style={[styles.flex1, styles.justifyCenter]}>
                <View>
                    <TouchableOpacity onPress={() => loginFacebook()}>
                      <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                      />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => signIn()}>
                      <SocialIcon
                        title='Sign In With Google'
                        button
                        type='google'
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={[styles.font19, styles.textCenter]}>OR</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, styles.font19, styles.textCenter]}>Create an Account</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
    );
}

export default LoginScreen;