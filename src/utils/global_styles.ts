import { Dimensions, PixelRatio } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const fontValue = (fontSizePixel: number, standardScreenHeight: number = 932) => {
    const heightPercent = (fontSizePixel * screenHeight) / standardScreenHeight;
    return Math.round(heightPercent);
};

export const widthPercentageToDP = (widthPixel: number) => {
    return PixelRatio.roundToNearestPixel((screenWidth * widthPixel) / 393); // Replace  with the desired standard screen width
};

export const heightPercentageToDP = (heightPixel: number) => {
    return PixelRatio.roundToNearestPixel((screenHeight * heightPixel) / 852); // Replace  with the desired standard screen height
};

export const vw = screenWidth;
export const vh = screenHeight;
