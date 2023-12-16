import styled from "styled-components/native";

export const CategoryWrapper = styled.View`
    display: flex;
    padding: 24px;
    background-color: white;
    height: 100%;
`

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const TabArea = styled.View`
    
`

export const List = styled.View`
    margin-top: 38px;
    display: flex;
    gap: 30px;
    width: 100%;
    overflow: scroll;
`

export const IntroArea = styled.View`
    margin-top: 30px;
    width: 100vw;
    display: flex;
    gap: 14px;
`

export const Tab = styled.View<{ isSelected: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`

export const TabIcon = styled.View<{ isSelected: boolean }>`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${(props) => props.isSelected ? `#303030` : `#F5F5F5`};
`

export const TabText = styled.Text<{ isSelected: boolean }>`
    color: ${(props) => props.isSelected ? `#000` : `#000`};
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.25px;
`

export const TitleArea = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #D9D9D9;
`

export const MaskItem = styled.View`
    width: 50%;
    display: flex;
    gap: 14px;
    align-items: center;
`

export const Image = styled.View`
    width: 157px;
    height: 160px;
`

export const Intro = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const TextPart = styled.View`
    
`

export const BookMark = styled.View`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(96, 96, 96, 0.40);
`

export const FirstText = styled.Text`
    color: #606060;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

export const SecText = styled.Text`
    color: #303030;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
`