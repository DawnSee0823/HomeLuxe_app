
const URL_REGEX = new RegExp(
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
);
export const EMAIL_REGEX: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


const FONT = {
    bold: 'Roboto-Bold',
    medium: 'Roboto-Medium',
    semi_bold: 'Roboto-SemiBold',
    regular: 'Roboto-Regular',
    italic: 'Roboto-Italic',
    medium_italic: "Roboto-MediumItalic",
    semi_bold_italic: "Roboto-SemiBoldItalic"
};

const COLORS = {
    primaryColor: '#52005c',
    headerColor: '#3a0b4a',
    footerColor: '#671f70',
    categoryColor: '#5b0d64',
    white: '#FFFFFF',
    buttonColor: '#72059D',
    transparentWhite: '#1110108f',
    textColor: '#4b4b4b',
    LoginbuttonColor: '#AEA269',
    RegisterbuttonColor: '#007E45',
    black: '#000'
};

export { FONT, COLORS, URL_REGEX };