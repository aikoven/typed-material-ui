interface Typography {
  textFullBlack: string;
  textDarkBlack: string;
  textLightBlack: string;
  textMinBlack: string;
  textFullWhite: string;
  textDarkWhite: string;
  textLightWhite: string;

  // font weight
  fontWeightLight: number;
  fontWeightNormal: number;
  fontWeightMedium: number;

  fontStyleButtonFontSize: number;
}

declare const typography: Typography;
export default typography;
