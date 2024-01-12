import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, FONTSIZE, FONT_FAMILY, SPACING} from 'src/config/theme';
import AppText from './app-text';
import ProfilePic from './profile-pic';
import GradientBGIcon from './gradient-bg-icon';
import VectorIcon from './vector-icons';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon
        icon={
          <VectorIcon.Feather
            name="menu"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        }
      />
      <AppText style={styles.HeaderText}>{title}</AppText>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    paddingTop: SPACING.space_48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONT_FAMILY.semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default React.memo(HeaderBar);
