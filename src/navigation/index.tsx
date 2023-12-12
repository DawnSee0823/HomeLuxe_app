import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Home, Product, SignIn, SignUp } from '../screens'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        // <Stack.Navigator initialRouteName="SignIn">
        //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        //     <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        //     <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        // </Stack.Navigator>
        <Product />
    )
}

export default AppNavigator;