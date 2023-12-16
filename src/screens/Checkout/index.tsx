import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
// import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import GradientButton from '../../components/GradientButton'
import { Image, View } from 'react-native'
import MasterCard from '../../assets/img/mastercard.png'
import Dhl from '../../assets/img/dhl.png'
import { useNavigation } from "@react-navigation/native"

export const Checkout: React.FC = () => {
    const navigate = useNavigation()
    return (
        <Styled.CheckoutWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('MyCart')} />
                <Styled.TextArea>
                    <Styled.Title>Payment</Styled.Title>
                </Styled.TextArea>
                <View></View>
            </Styled.Top>
            <Styled.Option>
                <Styled.OptionTitle>
                    <Styled.Subtext>Delivery address</Styled.Subtext>
                    <Styled.Edit>
                        <Icon name='edit' size={24} />
                    </Styled.Edit>
                </Styled.OptionTitle>
                <Styled.OptionList>
                    <Styled.OptionTextArea>
                        <Styled.OTitle>Bruno Fernandes</Styled.OTitle>
                        <Styled.OptionText>25 rue Robert Latouche, Béziers, 34500, France</Styled.OptionText>
                    </Styled.OptionTextArea>
                </Styled.OptionList>
            </Styled.Option>
            <Styled.Option>
                <Styled.OptionTitle>
                    <Styled.Subtext>Payment</Styled.Subtext>
                    <Styled.Edit>
                        <Icon name='edit' size={24} />
                    </Styled.Edit>
                </Styled.OptionTitle>
                <Styled.OptionList>
                    <Image source={MasterCard} alt='logo' />
                    <Styled.OptionText>{'**** **** **** 3947'}</Styled.OptionText>
                </Styled.OptionList>
            </Styled.Option>
            <Styled.Option>
                <Styled.OptionTitle>
                    <Styled.Subtext>Mode de livraison</Styled.Subtext>
                    <Styled.Edit>
                        <Icon name='edit' size={24} />
                    </Styled.Edit>
                </Styled.OptionTitle>
                <Styled.OptionList>
                    <Image source={Dhl} alt='logo' />
                    <Styled.OptionText>{'Fast (15-30 days)'}</Styled.OptionText>
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
                    <Styled.CardText>Total:</Styled.CardText>
                    <Styled.CardPrice>486.66 €</Styled.CardPrice>
                </Styled.CardLine>
            </Styled.Card>
            <Styled.Order>
                <GradientButton buttonText='Order' flag height='60px' onPress={() => navigate.navigate('Validate')} />
            </Styled.Order>
        </Styled.CheckoutWrapper>
    )
}