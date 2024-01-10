import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from './app-text';
import {COLORS, FONTSIZE, SPACING} from 'src/config/theme';
import OrderItemCard from './order-item-card';
import {SCENE_NAME} from 'src/utils/app-const';
interface OrderHistoryCardProps {
  navigationHandler: any;
  CartList: any;
  CartListPrice: string;
  OrderDate: string;
}
const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  CartList,
  CartListPrice,
  OrderDate,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <AppText style={styles.HeaderTitle}>Order Time</AppText>
          <AppText style={styles.HeaderSubtitle}>{OrderDate}</AppText>
        </View>
        <View style={styles.PriceContainer}>
          <AppText style={styles.HeaderTitle}>Total Amount</AppText>
          <AppText style={styles.HeaderPrice}>$ {CartListPrice}</AppText>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() => {
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              });
            }}>
            <OrderItemCard
              type={data.type}
              name={data.name}
              image_link_square={data.image_link_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  HeaderTitle: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});

export default OrderHistoryCard;
