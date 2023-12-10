import {getSize} from 'src/hooks/use-resize-hoc';
import {isNumber} from 'lodash';
import React, {PropsWithChildren} from 'react';
import {Platform, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type IViewStyle = Omit<ViewStyle, 'flex'>;
interface IAppView extends ViewProps, IViewStyle {
  row?: boolean;
  rowAlignCenter?: boolean;
  center?: boolean;
  column?: boolean;
  shadow?: boolean;
  space?: string | undefined;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  wrap?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  square?: boolean;
  round?: boolean | number;
  relative?: boolean;
  absolute?: boolean;
  isPaddingIos?: boolean;
  //   spacing?: ISpacing | number;
  safeArea?: boolean;
  safeAreaTop?: boolean;
  safeAreaLeft?: boolean;
  safeAreaRight?: boolean;
  safeAreaBottom?: boolean;
  flex?: boolean | number;
  radius?: number;
}

export const AppView = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  rowAlignCenter,
  center,
  column,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  opacity,
  elevation,
  maxWidth,
  maxHeight,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  isPaddingIos,
  zIndex,
  borderTopLeftRadius,
  borderTopRightRadius,
  safeArea,
  safeAreaTop,
  safeAreaLeft,
  safeAreaRight,
  safeAreaBottom,
  ...rest
}: PropsWithChildren<IAppView>) => {
  const insets = useSafeAreaInsets();

  const blockStyles: any = [
    isPaddingIos && {
      paddingBottom: Platform.OS === 'ios' ? insets.bottom : 20,
    },
    typeof flex === 'boolean' && (flex ? styles.block : {flex: 0}),
    flexShrink && styles.flexShrink,
    flexGrow && styles.flexGrow,
    isNumber(flex) && {flex},
    isNumber(maxWidth) && {maxWidth},
    isNumber(maxHeight) && {maxHeight},
    isNumber(width) && {width},
    isNumber(height) && {height},
    row && styles.row,
    rowAlignCenter && styles.rowAlignCenter,
    center && styles.center,
    column && styles.column,
    wrap && {flexWrap: 'wrap'},
    backgroundColor && {
      backgroundColor: backgroundColor,
    },
    isNumber(padding) && {padding},
    isNumber(margin) && {padding},
    alignStart && styles.alignStart,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    justifyCenter && styles.justifyCenter,
    justifyStart && styles.justifyStart,
    justifyEnd && styles.justifyEnd,
    space && {justifyContent: `space-${space}`},
    // paddingTop && { paddingTop: paddingTop },
    // paddingRight && { paddingRight: paddingRight },
    // paddingBottom && { paddingBottom: paddingBottom },
    // paddingLeft && { paddingLeft: paddingLeft },
    isNumber(marginBottom) && {marginBottom},
    isNumber(marginTop) && {marginTop},
    isNumber(marginRight) && {marginRight},
    isNumber(marginLeft) && {marginLeft},
    isNumber(paddingHorizontal) && {paddingHorizontal},
    isNumber(paddingVertical) && {paddingVertical},
    isNumber(marginHorizontal) && {marginHorizontal},
    isNumber(marginVertical) && {marginVertical},
    isNumber(radius) && {borderRadius: radius},
    isNumber(borderWidth) && {borderWidth},
    isNumber(square) && {borderRadius: square || getSize.m(8)},
    round && {
      borderRadius:
        typeof round === 'number' ? round : Number(height || width || 0) / 2,
    },
    isNumber(opacity) && {opacity},
    borderColor && {
      borderColor,
    },
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    isNumber(top) && {top: top},
    isNumber(left) && {left: left},
    isNumber(right) && {right: right},
    isNumber(bottom) && {bottom: bottom},
    overflow && {overflow},
    alignSelf && {alignSelf},
    isNumber(borderTopWidth) && {borderTopWidth},
    isNumber(borderRightWidth) && {borderRightWidth},
    isNumber(borderBottomWidth) && {borderBottomWidth},
    isNumber(borderLeftWidth) && {borderLeftWidth},
    zIndex && {zIndex},
    isNumber(borderTopLeftRadius) && {borderTopLeftRadius},
    isNumber(borderTopRightRadius) && {borderTopRightRadius},
    (paddingTop || safeAreaTop || safeArea) && {
      paddingTop:
        Number(paddingTop || 0) +
        Number(safeAreaTop || safeArea ? insets.top : 0),
    },
    (paddingRight || safeAreaRight || safeArea) && {
      paddingRight:
        Number(paddingRight || 0) +
        Number(safeAreaRight || safeArea ? insets.right : 0),
    },
    (paddingBottom || safeAreaBottom || safeArea) && {
      paddingBottom:
        Number(paddingBottom || 0) +
        Number(safeAreaBottom || safeArea ? insets.bottom : 0),
    },
    (paddingLeft || safeAreaLeft || safeArea) && {
      paddingLeft:
        Number(paddingLeft || 0) +
        Number(safeAreaLeft || safeArea ? insets.left : 0),
    },
    {...StyleSheet.flatten(style)},
  ];

  const renderChildComponent = React.useMemo(() => {
    // if (spacing && _.isArray(children) && children?.length > 1) {
    //   return children.insertBetweenElement(
    //     <SpacingElement spacing={spacing} />,
    //   );
    // }

    return children;
  }, [children]);

  return (
    <View style={blockStyles} {...rest}>
      {renderChildComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default AppView;
