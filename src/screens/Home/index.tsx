import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { ProductList, tabList } from './data'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Home: React.FC = () => {
    return (
        <Styled.HomeWrapper>
            <Styled.Top>
                <Icon name='search' color={'#808080'} size={24} />
                <Styled.TextArea>
                    <Styled.SubTitle>Discover</Styled.SubTitle>
                    <Styled.Title>HOME LUXE</Styled.Title>
                </Styled.TextArea>
                <Icon name='search' color={'#808080'} size={24} />
                {/* <BucketIcon /> */}
            </Styled.Top>
            <Styled.TabArea>
                <Styled.List>
                    {
                        tabList.map((ele, id) => (
                            <Styled.Tab isSelected={ele.isSelected} key={id}>
                                <Styled.TabIcon isSelected={ele.isSelected}>{ele.icon}</Styled.TabIcon>
                                <Styled.TabText isSelected={ele.isSelected}>{ele.title}</Styled.TabText>
                            </Styled.Tab>
                        ))
                    }
                </Styled.List>
            </Styled.TabArea>
            <Styled.IntroArea>
                {
                    ProductList.map((ele, id) => (
                        <Styled.MaskItem key={id}>
                            <Styled.Image>
                                <Image source={ele.img} alt='img' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Styled.Image>
                            <Styled.Intro>
                                <Styled.TextPart>
                                    <Styled.FirstText>{ele.title}</Styled.FirstText>
                                    <Styled.SecText>{ele.price}</Styled.SecText>
                                </Styled.TextPart>
                                <Styled.BookMark>
                                    <Icon name='bookmark' color={'white'} size={17} />
                                </Styled.BookMark>
                            </Styled.Intro>
                        </Styled.MaskItem>
                    ))
                }
            </Styled.IntroArea>
        </Styled.HomeWrapper >
    )
}