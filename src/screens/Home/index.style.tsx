import styled from "styled-components/native";

export const HomeWrapper = styled.View`
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

export const SubTitle = styled.Text`
    color: #909090;
    text-align: center;
    font-family: Gelasio;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
`

export const TextArea = styled.View`
    display: flex;
    align-items: center;
`

export const TabArea = styled.View`
    
`

export const List = styled.View`
    /* margin-top: 24px; */
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    overflow: scroll;
`

export const IntroArea = styled.View`
    margin-top: 30px;
    gap: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Tab = styled.View<{ isSelected: boolean }>`
    border: ${(props) => props.isSelected ? `1px solid #E32F2F` : `none`};
    display: flex;
    align-items: center;
    padding: 10px;
    padding-top: 37px;
    justify-content: flex-end;
    border-radius: 12px;
    background-color: ${props => props.isSelected ? '#FCF8F5' : 'transparent'};
    gap: 10px;
`

export const TabIcon = styled.View<{ isSelected: boolean }>`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${(props) => props.isSelected ? `#303030` : `#F5F5F5`};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TabText = styled.Text<{ isSelected: boolean }>`
    color: ${(props) => props.isSelected ? `#242424` : `#999`};
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.25px;
`

export const MaskItem = styled.TouchableOpacity`
    display: flex;
    gap: 14px;
    align-items: center;
    width: 47%;
`

export const Image = styled.View`
    width: 100%;
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