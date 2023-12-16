import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { Categories } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Category: React.FC = () => {
    return (
        <Styled.CategoryWrapper>
            <Styled.Top>
                <Icon name='search' color={'#808080'} size={24} />
                <Styled.TextArea>
                    <Styled.Title>Categories</Styled.Title>
                </Styled.TextArea>
                <Icon name='shopping-cart' color={'#808080'} size={24} />
            </Styled.Top>
            <Styled.TabArea>
                <Styled.List>
                    {
                        Categories.map((ele, id) => (
                            <Styled.Tab isSelected={ele.isSelected} key={id}>
                                <Styled.TabIcon isSelected={ele.isSelected}>{ele.icon}</Styled.TabIcon>
                                <Styled.TitleArea>
                                    <Styled.TabText isSelected={ele.isSelected}>{ele.title}</Styled.TabText>
                                </Styled.TitleArea>
                            </Styled.Tab>
                        ))
                    }
                </Styled.List>
            </Styled.TabArea>
        </Styled.CategoryWrapper >
    )
}