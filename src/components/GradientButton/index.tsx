import React from 'react';
import { Button, ButtonContainer, ButtonLabel, Gradient, TextContainer } from './index.style';

interface Props {
    onPress?: () => void;
    buttonText?: string;
    width?: string;
    height?: string;
    flag?: boolean;
    kind?: string;
}

const GradientButton: React.FC<Props> = ({ onPress, buttonText, width, height, flag, kind }) => {
    return (
        <ButtonContainer height={height} width={width} flag={flag} onPress={onPress}>
            {/* <Button onPress={onPress} buttonWidth={Number(width)} height={Number(height)}>
                <Gradient colors={['#539cff', '#466aca']} flag={flag}>
                    <TextContainer>
                        <ButtonLabel flag={flag}>{buttonText}</ButtonLabel>
                    </TextContainer>
                </Gradient>
            </Button> */}
            <TextContainer size={kind} flag={flag}>{buttonText}</TextContainer>
        </ButtonContainer>
    )
}

export default GradientButton;