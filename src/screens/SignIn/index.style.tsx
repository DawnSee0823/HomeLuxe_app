import styled from "styled-components/native";
import { COLORS } from "../../utils/app_config";
import { fontValue } from "../../utils/global_styles";

export const SignInWrapper = styled.View`
    align-items: center;
    background-color: ${COLORS.white};
    height: 100%;
`

export const Logo = styled.View`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 80px;
    margin-top: 35px;
`

export const Top = styled.View` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 22px;
`

export const Divider = styled.View`
    width: 30%;
    height: 1px;
    border-radius: 2px;
    background-color: #BDBDBD; 
`

export const Text = styled.Text`
    color: #0B0B0B;
    font-family: 'Merriweather';
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
`

export const FormContainer = styled.View`
    background: #FFF;
    /* box-shadow: 0px 7px 30px 0px rgba(138, 149, 158, 0.20); */
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 30px;
    elevation: 14;
    padding: 30px;
    padding-bottom: 40px;
    width: 100%;
`

export const InputGroup = styled.View`
    display: flex;
    flex-direction: column;
    gap: 35px;
`

export const FormButton = styled.View`
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
    padding-top: 15px;
`

export const TextButton = styled.Text`
    color:  #303030;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`