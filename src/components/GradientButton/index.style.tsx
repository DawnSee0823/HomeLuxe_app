import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { fontValue, vw } from '../../utils/global_styles';
import { COLORS } from '../../utils/app_config';

interface CustomGradientProps extends LinearGradientProps {
    buttonWidth?: number;
    height?: number;
    onPress: Function
}

interface GradientProps {
    colors: string[];
    flag?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<{ width?: string, height?: string, flag?: boolean }>`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.flag ? '#242424' : '#fff'};
    border: 1px solid #a5a5a5;
    height: ${props => props.height ? props.height : '100%'};
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    shadow-color: #8A959E;
    shadow-opacity: 0.20;
    shadow-radius: 30px;
    elevation: 14;
`

export const Button = styled.TouchableOpacity<CustomGradientProps>`
    width: ${(props) => (props.buttonWidth ? props.buttonWidth : vw * 0.85)}px;
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
`

export const TextContainer = styled.Text<{ size?: string, flag?: boolean }>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${props => props.flag ? 'white' : '#303030'};
    font-size: ${props => props.size === 'md' ? '16px' : '20px'};
`

export const ButtonLabel = styled.Text<{ flag: boolean }>`
    color: ${props => props.flag ? COLORS.white : COLORS.black};
    font-size: ${fontValue(20)};
`

export const Gradient = styled(LinearGradient).attrs<GradientProps>((props) => ({
    colors: props.flag ? props.colors : ['#ffdf00', '#ff8800']
}))`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`