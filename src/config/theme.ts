import {TextStyle, ViewStyle} from 'react-native';
import {getSize} from 'src/hooks/use-resize-hoc';

interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_32: number;
  space_30: number;
  space_36: number;
  space_48: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
  space_48: 48,
};

interface Color {
  Black: string;
  BlackRGB10: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
  Primary: string;
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
}

export const COLORS: Color = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#FF5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#E1CD17',
  White: '#FFFFFF',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
  Primary: '#F59E0B',
  primaryRedHex: '#DC3535',
  primaryOrangeHex: '#D17842',
  primaryBlackHex: '#0C0F14',
  primaryDarkGreyHex: '#141921',
  secondaryDarkGreyHex: '#21262E',
  primaryGreyHex: '#252A32',
  secondaryGreyHex: '#252A32',
  primaryLightGreyHex: '#52555A',
  secondaryLightGreyHex: '#AEAEAE',
  primaryWhiteHex: '#FFFFFF',
  primaryBlackRGBA: 'rgba(12,15,20,0.5)',
  secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
};

interface FontFamily {
  black: string;
  bold: string;
  extraBold: string;
  extraLight: string;
  light: string;
  medium: string;
  regular: string;
  semibold: string;
  thin: string;
}

export const DEFAULT_PREFIX_FONT_FAMILY = 'Poppins';

export const FONT_FAMILY: FontFamily = {
  black: `${DEFAULT_PREFIX_FONT_FAMILY}-Black`,
  bold: `${DEFAULT_PREFIX_FONT_FAMILY}-Bold`,
  extraBold: `${DEFAULT_PREFIX_FONT_FAMILY}-ExtraBold`,
  extraLight: `${DEFAULT_PREFIX_FONT_FAMILY}-ExtraLight`,
  light: `${DEFAULT_PREFIX_FONT_FAMILY}-Light`,
  medium: `${DEFAULT_PREFIX_FONT_FAMILY}-Medium`,
  regular: `${DEFAULT_PREFIX_FONT_FAMILY}-Regular`,
  semibold: `${DEFAULT_PREFIX_FONT_FAMILY}-SemiBold`,
  thin: `${DEFAULT_PREFIX_FONT_FAMILY}-Thin`,
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDER_RADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};

export const SIZE = {
  heading1: getSize.m(48),
  heading2: getSize.m(40),
  heading3: getSize.m(28),
  heading4: getSize.m(20),
  heading5: getSize.m(16),
  heading6: getSize.m(14),
  body1: getSize.m(16),
  body2: getSize.m(14),
  body3: getSize.m(12),
  body4: getSize.m(10),
  body5: getSize.m(8),
};
interface ITypography {
  heading1: ViewStyle | TextStyle | object;
  heading2: ViewStyle | TextStyle | object;
  heading3: ViewStyle | TextStyle | object;
  heading4: ViewStyle | TextStyle | object;
  heading5: ViewStyle | TextStyle | object;
  heading6: ViewStyle | TextStyle | object;
  body1: ViewStyle | TextStyle | object;
  body2: ViewStyle | TextStyle | object;
  body3: ViewStyle | TextStyle | object;
  body4: ViewStyle | TextStyle | object;
  body5: ViewStyle | TextStyle | object;
}
const Typography = {
  heading1: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: SIZE.heading1,
    lineHeight: getSize.m(72),
  },
  heading2: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: SIZE.heading2,
    lineHeight: getSize.m(60),
  },
  heading3: {
    fontFamily: FONT_FAMILY.semibold,
    fontWeight: '700',
    fontSize: SIZE.heading3,
    lineHeight: getSize.m(42),
  },
  heading4: {
    fontFamily: FONT_FAMILY.semibold,
    fontWeight: '700',
    fontSize: SIZE.heading4,
    lineHeight: getSize.m(30),
  },
  heading5: {
    fontFamily: FONT_FAMILY.semibold,
    fontWeight: '700',
    fontSize: SIZE.heading5,
    lineHeight: getSize.m(24),
  },
  heading6: {
    fontFamily: FONT_FAMILY.black,
    fontWeight: '700',
    fontSize: SIZE.heading6,
    lineHeight: getSize.m(22),
  },
  body1: {
    fontFamily: FONT_FAMILY.medium,
    fontWeight: '400',
    fontSize: SIZE.body1,
    lineHeight: getSize.m(24),
  },
  body2: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: SIZE.body2,
    lineHeight: getSize.m(22),
  },
  body3: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: SIZE.body3,
    lineHeight: getSize.m(18),
  },
  body4: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '700',
    fontSize: SIZE.body4,
    lineHeight: getSize.m(12),
  },
  body5: {
    fontFamily: FONT_FAMILY.thin,
    fontWeight: '700',
    fontSize: SIZE.body5,
    lineHeight: getSize.m(10),
  },
};

export const STYLE_GLOBAL: ITypography = Typography;

const pallete = [
  {
    // orange
    text: '#f97316',
    bgColor: (opacity: number) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // dark gray
    text: '#334155',
    bgColor: (opacity: number) => `rgba(30, 41, 59, ${opacity})`,
  },
  {
    // purple
    text: '#7c3aed',
    bgColor: (opacity: number) => `rgba(167, 139, 250, ${opacity})`,
  },
  {
    // green
    text: '#009950',
    bgColor: (opacity: number) => `rgba(0, 179, 89, ${opacity})`,
  },
  {
    // teal
    text: '#14b8a6',
    bgColor: (opacity: number) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // red
    text: '#dc2626',
    bgColor: (opacity: number) => `rgba(248, 113, 113, ${opacity})`,
  },
];

export const themeColors = {
  ...pallete[0],
};
