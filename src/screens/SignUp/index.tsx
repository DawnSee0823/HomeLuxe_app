import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './index.style'
import { Input, InputProps } from 'react-native-elements'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import Logo from '../../assets/img/logo.png'
import Icon from 'react-native-vector-icons/Octicons'
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
                    <Input
                        label='Name'
                        ref={userinput}
                        // placeholder='Email'
                        // leftIcon={
                        //     <Icon name='user' size={20} />
                        // }
                        onChangeText={value => handleChange(value, 'username')}
                        errorStyle={{ color: 'red' }}
                        errorMessage={isUserErr ? 'please input your username' : ''}
                    // style={{ fontSize: fontValue(20) }}
                    />
                    <Input
                        label='Email'
                        ref={userinput}
                        // placeholder='Email'
                        // leftIcon={
                        //     <Icon name='user' size={20} />
                        // }
                        onChangeText={value => handleChange(value, 'username')}
                        errorStyle={{ color: 'red' }}
                        errorMessage={isUserErr ? 'please input your username' : ''}
                    // style={{ fontSize: fontValue(20) }}
                    />
                    <Input
                        label='Password'
                        ref={passinput}
                        // placeholder='Password'
                        secureTextEntry={credentials.securePassword}
                        // leftIcon={
                        //     <Icon name='password' size={20} />
                        // }
                        onChangeText={value => handleChange(value, 'password')}
                        rightIcon={
                            credentials.securePassword ?
                                <TouchableOpacity onPress={() => handleChange(false, 'securePassword')}>
                                    <Icon name='eye' size={20} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => handleChange(true, 'securePassword')}>
                                    <Icon name='eye-closed' size={20} />
                                </TouchableOpacity>
                        }
                        errorStyle={{ color: 'red' }}
                        errorMessage={isPassErr ? 'please input your password' : ''}
                    // style={{ fontSize: fontValue(20) }}
                    />
                    <Input
                        label='Confirm Password'
                        ref={passinput}
                        // placeholder='Password'
                        secureTextEntry={credentials.securePassword}
                        // leftIcon={
                        //     <Icon name='password' size={20} />
                        // }
                        onChangeText={value => handleChange(value, 'password')}
                        rightIcon={
                            credentials.securePassword ?
                                <TouchableOpacity onPress={() => handleChange(false, 'securePassword')}>
                                    <Icon name='eye' size={20} />
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => handleChange(true, 'securePassword')}>
                                    <Icon name='eye-closed' size={20} />
                                </TouchableOpacity>
                        }
                        errorStyle={{ color: 'red' }}
                        errorMessage={isPassErr ? 'please input your password' : ''}
                    // style={{ fontSize: fontValue(20) }}
                    />
                </Styled.InputGroup>
                <Styled.FormButton>
                    <GradientButton width={`285px`} height='50px' buttonText='Sign up' onPress={handleSignIn} flag={true} />
                    <Styled.TextButton>
                        <Styled.Account>Already have an account?</Styled.Account>
                        <Styled.Login onPress={() => navigation.navigate('SignIn')}>Login</Styled.Login>
                    </Styled.TextButton>
                </Styled.FormButton>
            </Styled.FormContainer>
        </Styled.SignInWrapper>
    )
}