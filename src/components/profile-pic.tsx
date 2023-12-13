import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {COLORS, SPACING} from 'src/config/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('src/assets/images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;