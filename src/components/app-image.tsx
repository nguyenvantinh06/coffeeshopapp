import React, {useCallback, useState, useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay';
import AppText from 'src/components/app-text';
import {COLORS} from 'src/config/theme';
import {getSize} from 'src/hooks/use-resize-hoc';

type Props = {
  style?: any;
  source?: any;
  url?: string;
  imgError?: string;
  iconError?: JSX.Element;
  [x: string]: any;
};

function AppImage({style, source, url, imgError, iconError, ...rest}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const onLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);
  const sour = useMemo(() => source || {uri: url}, [source, url]);
  const onError = useCallback(() => {
    setIsError(true);
  }, []);

  // useEffect(() => {
  //   setIsError(false);
  //   sour?.uri &&
  //     Image.prefetch(sour.uri).catch(() => {
  //       setIsError(true);
  //     });
  // }, [sour]);

  const onLoadStart = useCallback(() => {
    setIsError(false);
    setIsLoading(true);
  }, []);

  if (isError) {
    return imgError ? (
      <Image
        {...rest}
        style={[styles.container, styles.image, style]}
        source={{uri: imgError}}
      />
    ) : (
      <View
        style={[
          styles.container,
          style,
          {
            backgroundColor: COLORS.DarkGrey,
          },
        ]}>
        {iconError ? <>{iconError}</> : <AppText>Error</AppText>}
      </View>
    );
  }

  return (
    <>
      <FastImage
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        {...rest}
        style={[styles.container, style]}
        source={sour}>
        {isLoading && (
          <View style={[styles.container, style, styles.overlay]}>
            <Spinner color={COLORS.DarkGrey} />
          </View>
        )}
      </FastImage>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: getSize.s(60),
    height: getSize.v(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'stretch',
  },
});

export default React.memo(AppImage);
