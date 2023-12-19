import React, { useState } from 'react'
import * as Styled from './index.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native"
import { Image } from 'react-native-elements'
import Image2 from '../../../assets/img/Payment2.png'
import Image1 from '../../../assets/img/payment1.png'

export const AddPayment = () => {
    const navigate = useNavigation()
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <Styled.PaymentWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('Profile')} />
                <Styled.TextArea>
                    <Styled.Title>Add a payment method</Styled.Title>
                </Styled.TextArea>
            </Styled.Top>
            <Styled.CheckBoxArea>
                <Image source={Image1} alt='img' />

            </Styled.CheckBoxArea>
        </Styled.PaymentWrapper>
    )
} 