import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const AppConfig = {
  ENV: Config.ENV,
  APP_NAME: Config.APP_NAME,
  API_URL:
    Config.ENV !== 'LOCAL'
      ? Config.API_URL
      : Platform.OS === 'android'
      ? Config.API_URL_ANDROID
      : Config.API_URL_IOS,
  ANDROID_APP_ID: Config.ANDROID_APP_ID,
  ANDROID_APP_VERSION_CODE: Config.ANDROID_APP_VERSION_CODE,
  ANDROID_APP_VERSION_NAME: Config.ANDROID_APP_VERSION_NAME,
  DEEP_LINK_ANDROID_URL: Config.DEEP_LINK_ANDROID_URL,
  IOS_APP_ID: DeviceInfo.getBundleId(),
  IOS_APP_VERSION_CODE: DeviceInfo.getVersion(),
  IOS_APP_BUILD_CODE: DeviceInfo.getBuildNumber(),
  DEEP_LINK_IOS_URL: Config.DEEP_LINK_IOS_URL,
  APP_VERSION: `${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`,
  APP_VERSION_RELEASED_DATE: Config.APP_VERSION_RELEASED_DATE,
};

export default AppConfig;
