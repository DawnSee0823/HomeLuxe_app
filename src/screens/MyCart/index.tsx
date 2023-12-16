import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
// import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import GradientButton from '../../components/GradientButton'
import { Image, ScrollView, View } from 'react-native'
import Image1 from '../../assets/img/2.png'
import { TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native"

export const MyCart: React.FC = () => {
    const navigate = useNavigation()
    return (
        <Styled.FavoriteWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('Home')} />
                <Styled.TextArea>
                    <Styled.Title>My cart</Styled.Title>
                </Styled.TextArea>
                <View></View>
            </Styled.Top>
            <ScrollView>
                <Styled.ProductList>
                    {
                        [...new Array(8)].map((ele, id) => (
                            <Styled.Product key={id}>
                                <Styled.Image>
                                    <Image source={Image1} alt='img' style={{
                                        borderRadius: 10,
                                        width: 100,
                                        height: 100
                                    }} />
                                </Styled.Image>
                                <Styled.Left>
                                    <Styled.Control>
                                        <Styled.PriceArea>
                                            <Styled.ProductTitle>Ophélia</Styled.ProductTitle>
                                            <Styled.Price>310,00 €</Styled.Price>
                                        </Styled.PriceArea>
                                        <Styled.ManageArea>
                                            <Icon name='cancel' color={'#303030'} size={24} />
                                        </Styled.ManageArea>
                                    </Styled.Control>
                                    <Styled.Order>
                                        <Styled.ControlButton>
                                            <Octicons name='minus' />
                                        </Styled.ControlButton>
                                        <Styled.OrderText>01</Styled.OrderText>
                                        <Styled.ControlButton>
                                            <Octicons name='plus' />
                                        </Styled.ControlButton>
                                    </Styled.Order>
                                </Styled.Left>

                            </Styled.Product>
                        ))
                    }
                </Styled.ProductList>
            </ScrollView>
            <Styled.ButtonArea>
                <Styled.InputPromo>
                    <Styled.InputArea>
                        <TextInput placeholder='Enter your promo code' style={{ textAlign: 'left', marginLeft: -140 }} />
                    </Styled.InputArea>
                    <Styled.ConfirmButton>
                        <Icon name='chevron-right' color={'white'} size={24} />
                    </Styled.ConfirmButton>
                </Styled.InputPromo>
                <Styled.TotalArea>
                    <Styled.TotalText>Total:</Styled.TotalText>
                    <Styled.Amount>1459.00 €</Styled.Amount>
                </Styled.TotalArea>
                <GradientButton buttonText='Payment' height='60px' onPress={() => navigate.navigate('Checkout')} />
                <GradientButton buttonText='Payment 3/4x without fee' flag height='60px' onPress={() => navigate.navigate('Payment')} />
            </Styled.ButtonArea>
        </Styled.FavoriteWrapper>
    )
}