import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { orderTag } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/AntDesign'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import Avatar from '../../../assets/img/user.jpg'
import GradientButton from '../../../components/GradientButton'
import { Checkbox } from 'react-native-paper'

export const Delivery = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const navigation = useNavigation()
    return (
        <Styled.MyOrder>
            <Styled.Top>
                <Icon name='chevron-left' size={24} color={'#242424'} onPress={() => navigation.navigate('Profile')} />
                <Styled.Text>Delivery address</Styled.Text>
            </Styled.Top>

            <ScrollView>
                <Styled.ScrollArea>
                    {
                        [...new Array(3)].map((ele, id) =>
                            <Styled.Card key={id}>
                                <Styled.CheckBoxArea>
                                    <Checkbox
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                    <Styled.CheckBoxText>Use as delivery address</Styled.CheckBoxText>
                                </Styled.CheckBoxArea>
                                <Styled.CardItem>
                                    <Styled.CardTop>
                                        <Styled.CardOrder>Bruno Fernandes</Styled.CardOrder>
                                        <Icon name='edit' size={18} />
                                    </Styled.CardTop>
                                    <Styled.CardQuantity>
                                        <Styled.Quantity>25 rue Robert Latouche, Béziers, 34500, France</Styled.Quantity>
                                    </Styled.CardQuantity>
                                </Styled.CardItem>
                            </Styled.Card>
                        )
                    }
                </Styled.ScrollArea>
            </ScrollView>
        </Styled.MyOrder>
    )
}