import React from 'react'

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    useSelector
  } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const loginRegister = () =>{
   return(
    <Stack.Navigator>
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ 
                title: 'Login',
                headerTintColor: colors.lightColor,
                headerStyle: {
                    backgroundColor: colors.canvaupperBG,
                }
            }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }}/>
    </Stack.Navigator>
   );
}

const Account = () =>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'AccountScreen') {
                        iconName = 'book';
                    }else if(route.name === 'BorrowBook'){
                        iconName = 'bookmark';
                    }
                    return <Icon name={iconName} size={30} color={color} />;
                },
            })}
            tabBarOptions={{
                showIcon: true ,
                activeTintColor: colors.primaryColor,
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 13,
                },
                style: {
                    backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
                    height: 60,// I didn't use this in my app, so the numbers may be off. 
                    paddingBottom: 5,
                }
          }}
        >
            {/* <Tab.Screen name="AccountScreen" component={Homestack} options={{ title: 'Books' }}/>
            <Tab.Screen name="BorrowBook" component={BorrowBook} options={{ title: 'My Books' }}/> */}
        </Tab.Navigator>
    )
}

const NavigationRoute = () =>{

    const tokenresponse = useSelector(state => state.users.Token);
    
    if(tokenresponse !== null){
        return Account();
    }else{
        return loginRegister();
    }

}

export default NavigationRoute;