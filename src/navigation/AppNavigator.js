
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Frontend/Home"
import Contact from "../screens/Frontend/Contact"
import About from "../screens/Frontend/About"
import Gallery from "../screens/Frontend/Gallery"

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Contact' component={Contact} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Gallery' component={Gallery} />
            </Stack.Navigator>
            {/* <Footer /> */}
        </NavigationContainer>
    )
}