import React from 'react'
import * as Styled from './index.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import GradientButton from '../../components/GradientButton'
import { Image, ScrollView, View } from 'react-native'
import Preview from '../../assets/img/5.png'
import Avatar from '../../assets/img/avatar.jpg'
import { useNavigation } from "@react-navigation/native"

export const Reviews = () => {
    const navigate = useNavigation()
    return (
        <Styled.ReviewWrapper>
            <Styled.Top>
                <Icon name='chevron-left' color={'#242424'} size={24} onPress={() => navigate.navigate('Home')} />
                <Styled.TextArea>
                    <Styled.Title>Ratings & Reviews</Styled.Title>
                </Styled.TextArea>
                <View></View>
            </Styled.Top>
            <Styled.ReviewArea>
                <Styled.ReviewPreview>
                    <Image source={Preview} alt='preview' style={{ borderRadius: 15, width: 100, height: 100 }} />
                    <Styled.PreviewText>
                        <Styled.PreviewTitle>Table basse Ophélia</Styled.PreviewTitle>
                        <Styled.PreviewStar>
                            <Icon name='star' size={30} color={'#F2C94C'} />
                            <Styled.StarText>4.8</Styled.StarText>
                        </Styled.PreviewStar>
                        <Styled.PreviewReview>10 reviews</Styled.PreviewReview>
                    </Styled.PreviewText>
                </Styled.ReviewPreview>
                <View style={{ height: '74%', overflow: 'scroll' }}>
                    <ScrollView>
                        <Styled.ReviewContent>
                            {

                                [...new Array(3)].map((ele, id) => (
                                    <Styled.ReviewItem key={id}>
                                        <Styled.ReviewAvatar>
                                            <Image source={Avatar} alt='preview' style={{ borderRadius: 50, width: 40, height: 40 }} />
                                        </Styled.ReviewAvatar>
                                        <Styled.ReviewTop>
                                            <Styled.TitlePart>
                                                <Styled.ReviewTitle>Bruno Fernandes</Styled.ReviewTitle>
                                                <Styled.ReviewData>20/03/2020</Styled.ReviewData>
                                            </Styled.TitlePart>
                                            <Styled.StarPart>
                                                {
                                                    [...new Array(5)].map((ele, id) => (
                                                        <Icon name='star' key={id} size={20} color={'#F2C94C'} />
                                                    ))
                                                }
                                            </Styled.StarPart>
                                        </Styled.ReviewTop>
                                        <Styled.ReviewDes style={{
                                            lineHeight: 22
                                        }}>Nice piece of furniture with good delivery. The delivery time is very fast. The products are exactly as shown in the application photo. The color is also the same and the quality is very good despite the low price.</Styled.ReviewDes>
                                    </Styled.ReviewItem>
                                ))
                            }
                        </Styled.ReviewContent>
                    </ScrollView>
                </View>
            </Styled.ReviewArea>
            <Styled.ButtonArea>
                <GradientButton buttonText='Write a review' width='100%' height='50px' flag={true} />
            </Styled.ButtonArea>
        </Styled.ReviewWrapper>
    )
}