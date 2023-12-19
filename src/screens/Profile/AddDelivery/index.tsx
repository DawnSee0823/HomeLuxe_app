import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { orderTag } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { CheckBox } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import GradientButton from '../../../components/GradientButton'

export const AddDelivery = () => {
    const [isSelected, setSelection] = useState<boolean>(false);
    const [text, setText] = useState("");
    const navigation = useNavigation()

    return (
        <Styled.AddDelivery>
            <Styled.Top>
                <Icon name='chevron-left' size={24} color={'#242424'} onPress={() => navigation.navigate('Profile')} />
                <Styled.Text>Add a delivery address</Styled.Text>
            </Styled.Top>
            <Styled.MainContainer>
                <Styled.TextArea>
                    <TextInput
                        label="Full name"
                        placeholder='Ex: Bruno Pham'
                        value={text}
                        underlineColor='transparent'
                        textColor='#242424'
                        onChangeText={text => setText(text)}
                        contentStyle={{
                            backgroundColor: '#F5F5F5'
                        }}
                    />
                </Styled.TextArea>
                <Styled.TextArea>
                    <TextInput
                        label="Address"
                        placeholder='Ex: 14 Avenu du Président Wilson'
                        underlineColor='transparent'
                        textColor='#242424'
                        value={text}
                        contentStyle={{
                            backgroundColor: '#F5F5F5'
                        }}
                        onChangeText={text => setText(text)}
                    />
                </Styled.TextArea>
                <Styled.TextArea>
                    <TextInput
                        label="Postal code"
                        placeholder='34500'
                        underlineColor='transparent'
                        textColor='#242424'
                        value={text}
                        contentStyle={{
                            backgroundColor: '#F5F5F5',
                        }}
                        onChangeText={text => setText(text)}
                    />
                </Styled.TextArea>
                <Styled.TextArea>
                    <TextInput
                        label="Country"
                        placeholder='Select a country'
                        underlineColor='transparent'
                        textColor='#242424'
                        value={text}
                        contentStyle={{
                            backgroundColor: '#F5F5F5'
                        }}
                        onChangeText={text => setText(text)}
                    />
                </Styled.TextArea>
                <Styled.TextArea>
                    <TextInput
                        label="City"
                        placeholder='Béziers'
                        underlineColor='transparent'
                        textColor='#242424'
                        value={text}
                        contentStyle={{
                            backgroundColor: '#F5F5F5'
                        }}
                        onChangeText={text => setText(text)}
                    />
                </Styled.TextArea>
            </Styled.MainContainer>
            <Styled.ButtonContainer>
                <GradientButton buttonText='Save address' flag />
            </Styled.ButtonContainer>
        </Styled.AddDelivery>
    )
}