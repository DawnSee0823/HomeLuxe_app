import React from 'react';
import { Button, ButtonContainer, ButtonLabel, Gradient, TextContainer } from './index.style';

interface Props {
    onPress?: () => void;
    buttonText?: string;
    width?: string;
    height?: string;
    flag?: boolean;
}

const GradientButton: React.FC<Props> = ({ onPress, buttonText, width, height, flag }) => {
    return (
        <ButtonContainer>
            {/* <Button onPress={onPress} buttonWidth={Number(width)} height={Number(height)}>
                <Gradient colors={['#539cff', '#466aca']} flag={flag}>
                    <TextContainer>
                        <ButtonLabel flag={flag}>{buttonText}</ButtonLabel>
                    </TextContainer>
                </Gradient>
            </Button> */}
            <TextContainer>{buttonText}</TextContainer>
        </ButtonContainer>
    )
}

export default GradientButton;