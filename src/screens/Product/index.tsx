import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { data } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import GradientButton from '../../components/GradientButton'
import { Image } from 'react-native'

export const Product: React.FC = () => {
    return (
        <Styled.ProductWrapper>
            <Styled.PreviewContainer>
                <Image source={data.mainImage} alt='preview' style={{ width: '100%' }} />
            </Styled.PreviewContainer>
            <Styled.DesContainer>
                <Styled.Manage>
                    <Styled.Top>
                        <Styled.PriceArea>
                            <Styled.Title>Table Baieba</Styled.Title>
                            <Styled.Price>600 €</Styled.Price>
                        </Styled.PriceArea>
                        <Styled.Order></Styled.Order>
                    </Styled.Top>
                    <Styled.Bottom>
                        <Styled.BookMark></Styled.BookMark>
                        <GradientButton buttonText={'Add to cart'} />
                    </Styled.Bottom>
                </Styled.Manage>
                <Styled.previewImage>
                    {

                    }
                </Styled.previewImage>
            </Styled.DesContainer>
        </Styled.ProductWrapper >
    )
}