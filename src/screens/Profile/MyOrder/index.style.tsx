import styled from "styled-components/native";

export const MyOrder = styled.View`
    height: 100%;
    background-color: white;
`

export const Top = styled.View`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 130px;
    padding: 12px 0;
    padding: 20px; 

`

export const Text = styled.Text`
    color:  #303030;
    text-align: center;
    font-family: Merriweather;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`

export const TagArea = styled.View<{ selected: boolean }>`
    border-bottom-width: ${props => props.selected ? '4px' : '0px'};
    border-style: solid;
    border-color: #242424;
    padding: 3px 0;
`

export const Tag = styled.Text<{ selected: boolean }>`
    color:${props => props.selected ? ' #242424' : '#999999'};
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: ${props => props.selected ? '700' : '400'};
`

export const CardTag = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 19px 0;
    padding: 20px;
`

export const Order = styled.View`

    `

export const Delivery = styled.View`

    `

export const OrderCard = styled.View`

    `

export const Card = styled.View`
    display: flex;
    gap: 25px;
    padding: 20px;
    padding-bottom : 100px;
`

export const CardItem = styled.View`
    background-color: white;
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 40px;
    elevation: 14;
    border-radius: 8px;
`

export const CardTop = styled.View`
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #F0F0F0;
`

export const CardQuantity = styled.View`
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardButton = styled.View`
    padding: 20px 20px 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CardOrder = styled.Text`
    color: #242424;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`

export const CardDate = styled.Text`
    color: #808080;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

export const Quantity = styled.Text`
    color: #808080;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`

export const Total = styled.Text`
    color: #808080;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`

export const Detail = styled.View`

    `

export const Delivered = styled.Text`
    color:  #27AE60;
    text-align: right;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`