import {Alert, Linking} from 'react-native';

export const getYoutubeVideoId = (url: string) => {
  const regex = /[?&]v=([^&]+)/;
  const match = url?.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
};

export const handleOpenLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const parseBadge = (number: number) => {
  if (Number.isInteger(number) && number > 99) {
    return '99+';
  } else {
    return number.toString();
  }
};
