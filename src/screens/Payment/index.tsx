import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
// import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import GradientButton from '../../components/GradientButton'
import { Image, View } from 'react-native'
import Alma from '../../assets/img/alma.png'
import { useNavigation } from "@react-navigation/native"

export const Payment: React.FC = () => {
    const navigate = useNavigation()
    return (
        <Styled.PaymentWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('MyCart')} />
                <Styled.TextArea>
                    <Styled.Title>Payment 3/4x</Styled.Title>
                </Styled.TextArea>
                <View></View>
            </Styled.Top>
            <Styled.Option>
                <Styled.OptionTitle>Choose your best option</Styled.OptionTitle>
                <Styled.OptionList>
                    <Image source={Alma} alt='logo' />
                    <Styled.Divider></Styled.Divider>
                    <Styled.OptionText>{'Payment in 3 time'}</Styled.OptionText>
                </Styled.OptionList>
                <Styled.OptionList>
                    <Image source={Alma} alt='logo' />
                    <Styled.Divider></Styled.Divider>
                    <Styled.OptionText>{'Payment in 4 time'}</Styled.OptionText>
                </Styled.OptionList>
            </Styled.Option>
            <Styled.Card>
                <Styled.CardLine>
                    <Styled.CardText>1st payment :</Styled.CardText>
                    <Styled.CardPrice>486.66 €</Styled.CardPrice>
                </Styled.CardLine>
                <Styled.CardLine>
                    <Styled.CardText>2cnd payment :</Styled.CardText>
                    <Styled.CardPrice>486.66 €</Styled.CardPrice>
                </Styled.CardLine>
                <Styled.CardLine>
                    <Styled.CardText>Last payment :</Styled.CardText>
                    <Styled.CardPrice>486.66 €</Styled.CardPrice>
                </Styled.CardLine>
                <Styled.CardLine>
                    <Styled.CardText>Total:</Styled.CardText>
                    <Styled.CardTotalPrice>486.66 €</Styled.CardTotalPrice>
                </Styled.CardLine>
            </Styled.Card>
            <GradientButton buttonText='Continue' flag height='60px' onPress={() => navigate.navigate('Checkout')} />
        </Styled.PaymentWrapper>
    )
}