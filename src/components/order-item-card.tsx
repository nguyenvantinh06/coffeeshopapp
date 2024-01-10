import {StyleSheet, View, ImageProps, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDER_RADIUS, COLORS, FONTSIZE, SPACING} from 'src/config/theme';
import AppText from './app-text';

interface OrderItemCardProps {
  type: string;
  name: string;
  image_link_square: ImageProps;
  special_ingredient: string;
  prices: any;
  ItemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  image_link_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradient}>
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardImageInfoContainer}>
          <Image source={image_link_square} style={styles.Image} />
          <View>
            <AppText style={styles.CardTitle}>{name}</AppText>
            <AppText style={styles.CardSubtitle}>{special_ingredient}</AppText>
          </View>
        </View>
        <View>
          <AppText style={styles.CardCurrency}>
            $ <AppText style={styles.CardPrice}>{ItemPrice}</AppText>
          </AppText>
        </View>
      </View>
      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.CardTableRow}>
          <View style={styles.CardTableRow}>
            <View style={styles.SizeBoxLeft}>
              <AppText
                style={[
                  styles.SizeText,
                  {
                    fontSize:
                      type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                  },
                ]}>
                {data.size}
              </AppText>
            </View>
            <View style={styles.PriceBoxRight}>
              <AppText style={styles.PriceCurrency}>
                {data.currency}
                <AppText style={styles.Price}> {data.price}</AppText>
              </AppText>
            </View>
          </View>

          <View style={styles.CardTableRow}>
            <AppText style={styles.CardQuantityPriceText}>
              X <AppText style={styles.Price}>{data.quantity}</AppText>
            </AppText>
            <AppText style={styles.CardQuantityPriceText}>
              $ {(data.quantity * data.price).toFixed(2).toString()}
            </AppText>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_25,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardImageInfoContainer: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  Image: {
    height: 90,
    width: 90,
    borderRadius: BORDER_RADIUS.radius_15,
  },
  CardTitle: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CardSubtitle: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CardCurrency: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardTableRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS.radius_10,
    borderBottomLeftRadius: BORDER_RADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryGreyHex,
  },
  SizeText: {
    color: COLORS.secondaryLightGreyHex,
  },
  PriceBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDER_RADIUS.radius_10,
    borderBottomRightRadius: BORDER_RADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.primaryGreyHex,
  },
  PriceCurrency: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  CardQuantityPriceText: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
});

export default OrderItemCard;
