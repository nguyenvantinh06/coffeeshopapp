/* eslint-disable no-sparse-arrays */
import React, {useMemo} from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {getSize} from 'src/hooks/use-resize-hoc';
import {useAppTheme} from 'src/config/theme-config';
import {FONT_FAMILY} from 'src/config/theme';

export type TextProps = {
  style?:
    | TextStyle
    | ViewStyle
    | object
    | Array<TextStyle | ViewStyle | object>;
  color?: string;
  marginBottom?: number;
  required?: boolean;
  children?: React.ReactNode;
  textHighLight?: string;
  [x: string]: any;
};

const AppText = (props: TextProps) => {
  const theme = useAppTheme();
  const {style, color, marginBottom, required = false} = props;

  const stylesText = React.useMemo(() => {
    return [
      (color && {color}) || {color: theme.colors.text},
      marginBottom && {marginBottom},
      {...StyleSheet.flatten(style)},
      {
        fontSize: Number(
          props?.fontSize ||
            (StyleSheet.flatten(style) as any)?.fontSize ||
            getSize.m(14).toString(),
        ),
      },
      ,
    ];
  }, [color, marginBottom, props?.fontSize, style, theme.colors.text]);

  const stylesFont = useMemo(
    () => [mapPropsToFontStyle(props), stylesText],
    [props, stylesText],
  );

  const renderChildren = React.useCallback(() => {
    return props.children;
  }, [props.textHighLight, props.children, stylesFont]);

  return (
    <Text {...props} style={stylesFont} allowFontScaling={false}>
      {renderChildren()}
      {required && (
        <Text style={styles.required} allowFontScaling={false}>
          *
        </Text>
      )}
    </Text>
  );
};

export default React.memo<TextProps>(AppText);

const styles = StyleSheet.create({
  required: {
    fontSize: getSize.m(14),
    fontWeight: '400',
    color: '#DA294A',
  },
});

export function mapPropsToFontStyle(props: any) {
  let fontWeight = '';
  // let fontSize = 14;
  if (props && props.style && typeof props.style === 'object') {
    fontWeight = '';
    let iFontWeight = '';
    if (Array.isArray(props.style)) {
      for (let i of props.style) {
        if (i && i.fontWeight) {
          iFontWeight = i.fontWeight;
        }
      }
    } else {
      if (props.style.fontWeight) {
        iFontWeight = props.style.fontWeight;
      }
    }
    if (Number(iFontWeight)) {
      if (Number(iFontWeight) < 400) {
        fontWeight = 'light';
      } else if (Number(iFontWeight) === 400) {
        fontWeight = 'regular';
      } else if (Number(iFontWeight) === 500) {
        fontWeight = 'medium';
      } else if (Number(iFontWeight) >= 600) {
        fontWeight = 'bold';
      } else {
        fontWeight = '';
      }
    }
  }

  const familyDefault = 'regular';
  const newProps = {
    fontFamily: FONT_FAMILY.regular,
  };

  return newProps;
}
