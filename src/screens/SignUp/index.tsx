import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { Input, InputProps } from 'react-native-elements'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import UserSvg from '../../assets/svg/user.svg'
import PasswordSvg from '../../assets/svg/password.svg'
import EyeSvg from '../../assets/svg/eye.svg'
import EyeOffSvg from '../../assets/svg/eye-disable.svg'
import Logo from '../../assets/img/logo.png'
import { fontValue } from '../../utils/global_styles'
import { useTypedDispatch, useTypedSelector } from '../../store/typeHooks'
import { loginUser } from '../../api/auth'
import Toast from 'react-native-toast-message'
import { cleanError } from '../../store/slices/auth'
import GradientButton from '../../components/GradientButton'

export const SignUp: React.FC = () => {
    const dispatch = useTypedDispatch();
    const navigation = useNavigation();
    const userinput = useRef<InputProps>();
    const passinput = useRef<InputProps>();
    const [credentials, setCredentials] = useState({ username: '', password: '', securePassword: true });
    const [isUserErr, setUserErr] = useState(false);
    const [isPassErr, setPassErr] = useState(false);
    const { isLogin, error } = useTypedSelector((state) => state.auth);

    const handleChange = (value: any, filed: string) => {
        setCredentials({ ...credentials, [filed]: value })
    }

    const handleSignIn = () => {
        if (userinput.current !== undefined && passinput.current !== undefined) {
            if (credentials.username === '') {
                userinput.current.focus();
                userinput.current.shake();
                setUserErr(true)
                return;
            }
            if (credentials.password === '') {
                passinput.current.focus();
                passinput.current.shake();
                setPassErr(true);
                return;
            }
            setUserErr(false);
            setPassErr(false);
            const logindata = {
                username: credentials.username,
                password: credentials.password,
            };

            dispatch(loginUser(logindata))
        }
    }

    useEffect(() => {
        if (isLogin) navigation.navigate('Home');
    }, [isLogin]);

    useEffect(() => {
        if (error) {
            Toast.show({
                type: 'error',
                text1: 'Failed',
                text2: error
            });
            dispatch(cleanError());
        }
    }, [error]);

    return (
        <Styled.SignInWrapper>
            <Styled.Logo>
                <Styled.Top>
                    <Styled.Divider />
                    <Image source={Logo} alt='log' />
                    <Styled.Divider />
                </Styled.Top>
                <Styled.Text>Welcome</Styled.Text>
            </Styled.Logo>
            <Styled.FormContainer>
                <Styled.InputGroup>
                    {/* <Input
                        label='Email'
                        ref={userinput}
                        // placeholder='Email'
                        leftIcon={
                            <UserSvg width={20} />
                        }
                        onChangeText={value => handleChange(value, 'username')}
                        errorStyle={{ color: 'red' }}
                        errorMessage={isUserErr ? 'please input your username' : ''}
                        style={{ fontSize: fontValue(20) }}
                    />
                    <Input
                        label='Password'
                        ref={passinput}
                        // placeholder='Password'
                        secureTextEntry={credentials.securePassword}
                        leftIcon={
                            <PasswordSvg width={20} />
                        }
                        onChangeText={value => handleChange(value, 'password')}
                        rightIcon={
                            credentials.securePassword ?
                                <TouchableOpacity onPress={() => handleChange(false, 'securePassword')}>
                                    <EyeSvg width={20} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => handleChange(true, 'securePassword')}>
                                    <EyeOffSvg width={20} />
                                </TouchableOpacity>
                        }
                        errorStyle={{ color: 'red' }}
                        errorMessage={isPassErr ? 'please input your password' : ''}
                        style={{ fontSize: fontValue(20) }}
                    /> */}
                    <Input
                        label='Name'
                    />
                    <Input
                        label='Email'
                    />
                    <Input
                        label='Password'
                    />
                    <Input
                        label='Confirm Password'
                    />
                </Styled.InputGroup>
                <Styled.FormButton>
                    <GradientButton width={`200`} height='50' buttonText='Sign up' onPress={handleSignIn} flag={false} />
                    <Styled.TextButton>Already have an account? Login</Styled.TextButton>
                </Styled.FormButton>
            </Styled.FormContainer>
        </Styled.SignInWrapper>
    )
}