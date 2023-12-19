import React, { useState } from 'react'
import * as Styled from './index.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native"
import { Checkbox } from 'react-native-paper'
import { Image } from 'react-native'
import Image2 from '../../../assets/img/Payment2.png'
import Image1 from '../../../assets/img/payment1.png'

export const MethodPayment = () => {
    const navigate = useNavigation()
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <Styled.PaymentWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('Profile')} />
                <Styled.TextArea>
                    <Styled.Title>Method of payment</Styled.Title>
                </Styled.TextArea>
            </Styled.Top>
            <Styled.ContentContainer>
                <Styled.CheckBoxArea>
                    <Image source={Image2} alt='img' style={{ width: 383 }} />
                    <Styled.CheckArea>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Styled.CheckBoxText>Use as default payment method</Styled.CheckBoxText>
                    </Styled.CheckArea>
                </Styled.CheckBoxArea>
                <Styled.CheckBoxArea>
                    <Image source={Image1} alt='img' style={{ width: 383, objectFit: 'contain' }} />
                    <Styled.CheckArea>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Styled.CheckBoxText>Use as default payment method</Styled.CheckBoxText>
                    </Styled.CheckArea>
                </Styled.CheckBoxArea>
            </Styled.ContentContainer>
        </Styled.PaymentWrapper>
    )
}