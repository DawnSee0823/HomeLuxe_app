import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
// import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import GradientButton from '../../components/GradientButton'
import { Image, ScrollView } from 'react-native'
import Image1 from '../../assets/img/2.png'
import { useNavigation } from "@react-navigation/native"

export const Favorite: React.FC = () => {
    const navigate = useNavigation()

    return (
        <Styled.FavoriteWrapper>
            <Styled.Top>
                <Icon name='search' color={'#808080'} size={24} />
                <Styled.TextArea>
                    <Styled.Title>Favorite</Styled.Title>
                </Styled.TextArea>
                <Icon name='shopping-cart' color={'#808080'} size={24} />
            </Styled.Top>
            <ScrollView>
                <Styled.ProductList>
                    {
                        [...new Array(8)].map((ele, id) => (
                            <Styled.Product key={id} onPress={() => navigate.navigate('Reviews')}>
                                <Styled.Image>
                                    <Image source={Image1} alt='img' style={{
                                        borderRadius: 10,
                                        width: 100,
                                        height: 100
                                    }} />
                                </Styled.Image>
                                <Styled.Control>
                                    <Styled.PriceArea>
                                        <Styled.ProductTitle>Ophélia</Styled.ProductTitle>
                                        <Styled.Price>310,00 €</Styled.Price>
                                    </Styled.PriceArea>
                                    <Styled.ManageArea>
                                        <Icon name='cancel' color={'#303030'} size={20} />
                                        <Styled.BagArea>
                                            <Icon name='shopping-bag' color={'#303030'} size={20} />
                                        </Styled.BagArea>
                                    </Styled.ManageArea>
                                </Styled.Control>
                            </Styled.Product>
                        ))
                    }
                </Styled.ProductList>
            </ScrollView>
            <Styled.AddButton>
                <GradientButton buttonText='Add all to cart' kind='md' flag width='100%' height='50px' onPress={() => navigate.navigate('MyCart')} />
            </Styled.AddButton>
        </Styled.FavoriteWrapper>
    )
}