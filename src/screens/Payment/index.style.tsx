import styled from "styled-components/native"

export const PaymentWrapper = styled.View`
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

export const Option = styled.View`
    margin-top: 16px;
    display: flex;
    gap: 20px;
`

export const OptionTitle = styled.Text`
    color: #909090;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`

export const OptionList = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #8f8f8f;
    background: #FFF;
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 40px;
    elevation: 14;
    padding: 4px;
    height: 68px;
`

export const Card = styled.View`
    border-radius: 8px;
    background: #FFF;
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 40px;
    elevation: 14;
    padding: 20px;
    margin-top: 240px;
    gap: 20px;
    margin-bottom: 25px;
`

export const CardLine = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardText = styled.Text`
    color: #808080;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
`

export const CardPrice = styled.Text`
    color:  #242424;
    text-align: right;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`

export const CardTotalPrice = styled.Text`
    color:  #242424;
    text-align: right;
    font-family: Nunito Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
`

export const Divider = styled.View`
    width: 2px;
    height: 41px;
    border-radius: 36px;
    background: #303030;
`

export const OptionText = styled.Text`
    color: #303030;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    padding-left: 14px;
`

