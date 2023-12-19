import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, Checkout, Favorite, Home, MyCart, MyOrder, Payment, Product, Profile, Reviews, SignIn, SignUp, Validate, Delivery, AddDelivery, ForgotPass, MethodPayment, Settings } from '../screens'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Stack.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} />
            <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
            <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
            <Stack.Screen name="Reviews" component={Reviews} options={{ headerShown: false }} />
            <Stack.Screen name="Validate" component={Validate} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
            <Stack.Screen name="Delivery" component={Delivery} options={{ headerShown: false }} />
            <Stack.Screen name="AddDelivery" component={AddDelivery} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
            <Stack.Screen name="MethodPayment" component={MethodPayment} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Stack.Navigator>
        // <Product />
    )
}

export default AppNavigator;