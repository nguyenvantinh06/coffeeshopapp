import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, SPACING} from 'src/config/theme';

interface BGIconProps {
  icon: any;
  bgColor: string;
}

const BGIcon: React.FC<BGIconProps> = ({icon, bgColor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: bgColor}]}>{icon}</View>
  );
};

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.radius_8,
  },
});

export default React.memo(BGIcon);
