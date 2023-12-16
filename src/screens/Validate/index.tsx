import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import validate from '../../assets/img/validate.png'
import { Image } from 'react-native'
import GradientButton from '../../components/GradientButton'
import { useNavigation } from "@react-navigation/native"

export const Validate: React.FC = () => {
    const navigate = useNavigation()
    return (
        <Styled.CategoryWrapper>
            <Styled.MainScreen>
                <Styled.Title>VALIDATE !</Styled.Title>
                <Image source={validate} alt='validate' />
                <Styled.SubTitle>Your order will be delivered soon.
                    Thank you for choosing our application!</Styled.SubTitle>
            </Styled.MainScreen>
            <Styled.OrderButton>
                <GradientButton buttonText='Track your orders' height='60px' flag={true} onPress={() => navigate.navigate('MyCart')} />
                <GradientButton buttonText='BACK TO HOME PAGE' kind='md' height='60px' onPress={() => navigate.navigate('Home')} />
            </Styled.OrderButton>
        </Styled.CategoryWrapper >
    )
}