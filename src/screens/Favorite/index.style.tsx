import styled from "styled-components/native"

export const FavoriteWrapper = styled.View`
    padding: 16px;
    position: relative;
    height: 100%;
    overflow: scroll;
    background-color: white;
`

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
`

export const Title = styled.Text`
    color: #242424;
    font-family: Gelasio;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
`

export const TextArea = styled.View`
    display: flex;
    align-items: center;
`

export const ProductList = styled.View`
    padding: 4px;
    width: 100%;
`

export const Product = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 18px 0;
    gap: 20px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #F0F0F0;
`

export const Image = styled.View`
    border-radius: 5px;
    contain: content;
`

export const Control = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 67%;
    height: 100%;
`

export const PriceArea = styled.View`
    display: flex;
    gap: 5px;
`

export const ProductTitle = styled.Text`
    color: #606060;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

export const Price = styled.Text`
    color: #303030;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`

export const ManageArea = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BagArea = styled.View`
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e05e;
    border-radius: 10px;
`

export const AddButton = styled.View`
    position: absolute;
    bottom: 20px;
    width: 98%;
    left: 20px;
`