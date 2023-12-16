import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { profileData } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import Avatar from '../../../assets/img/user.jpg'

export const Profile = () => {
    return (
        <Styled.ProfileWrapper>
            <Styled.Top>
                <Icon name='search' />
                <Styled.Title>Profile</Styled.Title>
                <Icon name='exit-to-app' />
            </Styled.Top>
            <Styled.Intro>
                <Image source={Avatar} alt='avatar' style={{ width: 80, height: 80, borderRadius: 50 }} />
                <Styled.InfoArea>
                    <Styled.Name>Bruno Pham</Styled.Name>
                    <Styled.Email>bruno203@gmail.com</Styled.Email>
                </Styled.InfoArea>
            </Styled.Intro>
            <Styled.Menu>
                {
                    profileData.map((ele, id) => (
                        <Styled.MenuItem>
                            <Styled.Left>
                                <Styled.MenuTitle>{ele.title}</Styled.MenuTitle>
                                <Styled.MenuDes>{ele.subtitle}</Styled.MenuDes>
                            </Styled.Left>
                            <Styled.Right>
                                <Icon name='keyboard-arrow-right' />
                            </Styled.Right>
                        </Styled.MenuItem>
                    ))
                }
            </Styled.Menu>
        </Styled.ProfileWrapper>
    )
}