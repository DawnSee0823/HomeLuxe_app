import styled from "styled-components/native";

export const ProductWrapper = styled.View`
    position: relative;
    background-color: white;
    height: 100%;
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #FFF;
    left: 32px;
    top: 30px;
`

export const PreviewContainer = styled.View`
    contain: content;
    height: 60%;
`

export const DesContainer = styled.View`
    padding: 27px;
`

export const Manage = styled.View`
    display: flex;
    gap: 24px;
`

export const previewImage = styled.View`
    margin-top: 27px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const PriceArea = styled.View`
    display: flex;
`

export const Title = styled.Text`
    font-family: Gelasio;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    color: #303030;
`

export const Price = styled.Text`
    font-family: Nunito Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    color: #303030;
`

export const Order = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

export const Bottom = styled.View`
    display: flex;
    height: 60px;
    flex-direction: row;
    gap: 15px;
`

export const BookMark = styled.View`
    display: flex;
    padding: 18px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background:  #F0F0F0;
`

export const ControlButton = styled.View`
    width: 30px;
    height: 30px;
    background-color: #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`

export const OrderText = styled.Text`
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    color: #242424;
`