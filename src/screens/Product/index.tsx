import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import GradientButton from '../../components/GradientButton'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"

export const Product: React.FC = () => {
    const navigate = useNavigation()

    return (
        <Styled.ProductWrapper>
            <Styled.PreviewContainer>
                <Image source={data.mainImage} alt='preview' style={{ width: '100%', height: '100%', borderBottomLeftRadius: 50 }} />
            </Styled.PreviewContainer>
            <Styled.DesContainer>
                <Styled.Manage>
                    <Styled.Top>
                        <Styled.PriceArea>
                            <Styled.Title>{data.title}</Styled.Title>
                            <Styled.Price>{data.price}</Styled.Price>
                        </Styled.PriceArea>
                        <Styled.Order>
                            <Styled.ControlButton>
                                <Octicons name='minus' />
                            </Styled.ControlButton>
                            <Styled.OrderText>{data.orders}</Styled.OrderText>
                            <Styled.ControlButton>
                                <Octicons name='plus' />
                            </Styled.ControlButton>
                        </Styled.Order>
                    </Styled.Top>
                    <Styled.Bottom>
                        <Styled.BookMark>
                            <Icon name='bookmark-outline' size={28} color={'#242424'} />
                        </Styled.BookMark>
                        <GradientButton buttonText={'Add to cart'} kind={'lg'} flag width='79%' onPress={() => navigate.navigate('Favorite')} />
                    </Styled.Bottom>
                </Styled.Manage>
                <ScrollView horizontal={true}>
                    <Styled.previewImage>
                        {
                            data.previewImages.map((ele, id) => (
                                <Image key={id} source={ele} alt='img' style={{ width: 100, height: 100 }} />
                            ))
                        }
                    </Styled.previewImage>
                </ScrollView>
            </Styled.DesContainer>
            <Styled.BackButton onPress={() => { navigate.navigate('Home') }}>
                <Icon name='keyboard-arrow-left' size={28} color={'#000'} />
            </Styled.BackButton>
        </Styled.ProductWrapper >
    )
}