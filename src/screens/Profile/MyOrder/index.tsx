import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { orderTag } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import Avatar from '../../../assets/img/user.jpg'
import GradientButton from '../../../components/GradientButton'

export const MyOrder = () => {
    const navigation = useNavigation()
    return (
        <Styled.MyOrder>
            <Styled.Top>
                <Icon name='chevron-left' size={24} color={'#242424'} onPress={() => navigation.navigate('Profile')} />
                <Styled.Text>My orders</Styled.Text>
            </Styled.Top>
            <Styled.CardTag>
                {
                    orderTag.map((ele, id) => (
                        <Styled.TagArea key={id} selected={id === 0}>
                            <Styled.Tag selected={id === 0}>{ele.name}</Styled.Tag>
                        </Styled.TagArea>
                    ))
                }
            </Styled.CardTag>
            <ScrollView>
                <Styled.Card>
                    {
                        [...new Array(3)].map((ele, id) => (
                            <Styled.CardItem key={id}>
                                <Styled.CardTop>
                                    <Styled.CardOrder>Commande n° 2385</Styled.CardOrder>
                                    <Styled.CardDate>20/12/2023</Styled.CardDate>
                                </Styled.CardTop>
                                <Styled.CardQuantity>
                                    <Styled.Quantity>Quantity: 03</Styled.Quantity>
                                    <Styled.Total>Total amount: 50€</Styled.Total>
                                </Styled.CardQuantity>
                                <Styled.CardButton>
                                    <GradientButton buttonText='Detail' flag={true} width='100px' height='36px' kind='md' />
                                    <Styled.Delivered>Delivered</Styled.Delivered>
                                </Styled.CardButton>
                            </Styled.CardItem>
                        ))
                    }
                </Styled.Card>
            </ScrollView>
        </Styled.MyOrder>
    )
}