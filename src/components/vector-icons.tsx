import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {IconProps} from 'react-native-vector-icons/Icon';
import {TextStyle} from 'react-native';
type AppIconProps = IconProps & {
  type?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'FontAwesome5Pro'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons';
  style?: TextStyle;
};

export const AppVectorIcons = (props: AppIconProps) => {
  const {type, ...others} = props;

  if (type === 'FontAwesome5') {
    return <FontAwesome5 {...others} />;
  } else if (type === 'Entypo') {
    return <Entypo {...others} />;
  } else if (type === 'AntDesign') {
    return <AntDesign {...others} />;
  } else if (type === 'EvilIcons') {
    return <EvilIcons {...others} />;
  } else if (type === 'Feather') {
    return <Feather {...others} />;
  } else if (type === 'FontAwesome') {
    return <FontAwesome {...others} />;
  } else if (type === 'FontAwesome5Pro') {
    return <FontAwesome5Pro {...others} />;
  } else if (type === 'Fontisto') {
    return <Fontisto {...others} />;
  } else if (type === 'Foundation') {
    return <Foundation {...others} />;
  } else if (type === 'Ionicons') {
    return <Ionicons {...others} />;
  } else if (type === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons {...others} />;
  } else if (type === 'Octicons') {
    return <Octicons {...others} />;
  }

  return <MaterialIcons {...others} />;
};

const VectorIcon = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome5Pro,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AppVectorIcons,
  Octicons,
};
export default VectorIcon;
