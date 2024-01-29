import {View, Text, StyleSheet, Image, ViewStyle} from 'react-native';

type ApartmentListItem = {
  item: any;
  containerStyle?: ViewStyle;
};

const MapCard = ({item, containerStyle}: ApartmentListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.type}</Text>
        <View style={styles.footer}>
          {/* <Text style={styles.price}>$20 {item.price} </Text> */}
          <Text style={styles.price}>★ 5 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'InterBold',
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontFamily: 'InterBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

export default MapCard;
