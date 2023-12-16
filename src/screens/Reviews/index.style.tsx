import styled from "styled-components/native";

export const ReviewWrapper = styled.View`
    padding: 20px;
    height: 100%;
    background-color: white;
`

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    margin-bottom: 20px;
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

export const ReviewArea = styled.View`
    
`

export const ReviewPreview = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 15px 0;
    border-bottom-width: 1px;
    border-color: #F0F0F0;
    border-style: solid;
`

export const ReviewContent = styled.View`
    padding: 35px 0;
    gap: 40px;
    
`

export const PreviewText = styled.View`
    display: flex;
    justify-content: space-between;
`

export const PreviewTitle = styled.Text`
    color:  #242424;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

export const PreviewStar = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const StarText = styled.Text`
    color: #303030;
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
`

export const ButtonArea = styled.View`
    position: absolute;
    bottom: 35px;
    left: 20px;
    width: 100%;
`

export const PreviewReview = styled.Text`
    color:  #303030;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`

export const ReviewItem = styled.View`
    border-radius: 8px;
    background: #FFF;
    /* box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.20); */
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 40px;
    elevation: 14;
    padding: 20px 16px;
    position: relative;
    display: flex;
    min-height: 190px;
    gap: 15px;
`

export const ReviewAvatar = styled.View`
    position: absolute;
    top: -20px;
    left: 50%;
`

export const ReviewTop = styled.View`
    display: flex;
    gap: 5px;
`

export const TitlePart = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ReviewTitle = styled.Text`
    color: #242424;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`

export const ReviewData = styled.Text`
    color:  #808080;
    text-align: right;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`

export const StarPart = styled.View`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const ReviewDes = styled.Text`
    color: #242424;
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

