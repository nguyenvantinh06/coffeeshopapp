import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDER_RADIUS,
  COLORS,
  FONTSIZE,
  FONT_FAMILY,
  SPACING,
} from 'src/config/theme';
import VectorIcon from './vector-icons';
import BGIcon from './bg-icon';
import AppText from './app-text';
import {deviceWidth} from 'src/utils/app-const';

const CARD_WIDTH = deviceWidth * 0.32;

interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  image_link_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  image_link_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={image_link_square}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <VectorIcon.Feather
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <AppText style={styles.CardRatingText}>{average_rating}</AppText>
        </View>
      </ImageBackground>
      <AppText style={styles.CardTitle}>{name}</AppText>
      <AppText style={styles.CardSubtitle}>{special_ingredient}</AppText>
      <View style={styles.CardFooterRow}>
        <AppText style={styles.CardPriceCurrency}>
          $ <AppText style={styles.CardPrice}>{price.price}</AppText>
        </AppText>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              type,
              roasted,
              image_link_square,
              name,
              special_ingredient,
              prices: [{...price, quantity: 1}],
            });
          }}>
          <BGIcon
            bgColor={COLORS.primaryOrangeHex}
            icon={
              <VectorIcon.MaterialIcons
                color={COLORS.primaryWhiteHex}
                name={'add'}
                size={FONTSIZE.size_16}
              />
            }
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDER_RADIUS.radius_25,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDER_RADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDER_RADIUS.radius_20,
    borderTopRightRadius: BORDER_RADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONT_FAMILY.medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  CardTitle: {
    fontFamily: FONT_FAMILY.medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  CardSubtitle: {
    fontFamily: FONT_FAMILY.light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  CardPriceCurrency: {
    fontFamily: FONT_FAMILY.semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default React.memo(CoffeeCard);
