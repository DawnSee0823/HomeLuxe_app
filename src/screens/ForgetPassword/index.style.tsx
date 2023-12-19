import styled from "styled-components/native";
import { COLORS } from "../../utils/app_config";

export const SignInWrapper = styled.View`
    align-items: center;
    background-color: ${COLORS.white};
    height: 100%;
`

export const Logo = styled.View`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
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
    padding: 40px 30px;
    width: 100%;
`

export const InputGroup = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const FormButton = styled.View`
    display: flex;
    flex-direction: column;
    gap: 300px;
    align-items: center;

    /* justify-content: space-between; */
    margin-top: 20px;
    height: 50%;
`

export const TextButton = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Account = styled.Text`
    color: #808080;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`

export const Login = styled.Text`
    color: #303030;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    padding-left: 5px;
`