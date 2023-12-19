import React, { useState } from 'react'
import * as Styled from './index.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native"
import { Checkbox } from 'react-native-paper'
import { Image } from 'react-native-elements'
import Image2 from '../../../assets/img/Payment2.png'
import Image1 from '../../../assets/img/payment1.png'
import { ScrollView } from 'react-native'

export const Settings = () => {
    const navigate = useNavigation()
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <Styled.PaymentWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('Profile')} />
                <Styled.TextArea>
                    <Styled.Title>Settings</Styled.Title>
                </Styled.TextArea>
            </Styled.Top>
            <ScrollView>
                <Styled.InputArea>
                    <Styled.Presonal>

                    </Styled.Presonal>
                    <Styled.Password>

                    </Styled.Password>
                    <Styled.Notification>

                    </Styled.Notification>
                    <Styled.Support>

                    </Styled.Support>
                </Styled.InputArea>
            </ScrollView>
        </Styled.PaymentWrapper>
    )
} 