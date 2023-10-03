import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import List from '../screens/Detail'
import Local from '../screens/Local'
import Setting from '../screens/Profile'
import Project from '../screens/Project'
import Apply from '../screens/Apply'
import SignUp from '../screens/SignUp'
import SignUp2 from '../screens/SignUp2'
import SignUp3 from '../screens/SignUp3'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:90,
                    justifyContent:"center",
                    paddingVertical:10,
                    backgroundColor:"#eff4f0",
                    elevation:3
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../../assets/Interface_icons/01-Home/24w/house-1.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
             <Tab.Screen
                name="Map"
                component={List}
                options={{
                    tabBarLabel:"List",
                    tabBarIcon:({color, size}) => (
                        <Image
                        
                            source={require("../../assets/Interface_icons/02-Dashboard/48w/layout-dashboard.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Local"
                component={Local}
                options={{
                    tabBarLabel:"Local",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../../assets//Interface_icons/61-star/rating-star.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
            // profile/setting
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel:"Setting",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../../assets/Interface_icons/12-Settings/48w/cog.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Project" component={Project}/>
            <Stack.Screen name="Apply" component={Apply}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignUp2" component={SignUp2}/>
            <Stack.Screen name="SignUp3" component={SignUp3}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;