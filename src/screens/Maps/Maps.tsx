import {FC, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Text from '../../components/UIELements/Text';
import MapCard from '../../components/MapCard';
import {BackButtonIcon} from '../../styles/icons';
import useNavigation from '../../hooks/useNavigation';

type MapsProps = {};
const region = {
  latitude: 30.033333,
  longitude: 31.233334,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const compoundPlaces = [
  {
    name: 'Fitness Center',
    type: 'Gym',
    lat: 30.033333,
    lng: 31.233334,
    image: 'https://picsum.photos/300',
  },
  {
    name: 'Spa & Wellness',
    type: 'Spa',
    lat: 30.0156,
    lng: 31.2367,
    image: 'https://picsum.photos/500',
  },
  {
    name: 'Coffee Shop',
    type: 'Cafe',
    lat: 30.0189,
    lng: 31.239,
    image: 'https://picsum.photos/600',
  },
  {
    name: 'Swimming Pool',
    type: 'Recreation',
    lat: 30.0222,
    lng: 31.2412,
    image: 'https://picsum.photos/900',
  },
  {
    name: 'Supermarket',
    type: 'Shopping',
    lat: 30.0255,
    lng: 31.2434,
    image: 'https://picsum.photos/200',
  },
];
const CustomMarker = ({title, image, coordinate, onPress}: any) => (
  <Marker coordinate={coordinate} onPress={onPress}>
    <Image source={{uri: image}} style={{width: 40, height: 40}} />
    <Callout>
      <View>
        <Text>{title}</Text>
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
      </View>
    </Callout>
  </Marker>
);

const Maps: FC<MapsProps> = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        googleMapId=""
        style={styles.map}
        zoomEnabled
        zoomControlEnabled={true}>
        {compoundPlaces.map(item => (
          <CustomMarker
            key={item.name}
            title={item.name}
            image={item.image}
            coordinate={{latitude: item.lat, longitude: item.lng}}
            onPress={() => {
              console.log('xx');
              setSelectedItem(item);
            }}
          />
        ))}
      </MapView>
      <Pressable style={styles.button} onPress={() => goBack()}>
        <BackButtonIcon />
      </Pressable>
      {selectedItem && (
        <MapCard
          item={selectedItem}
          containerStyle={styles.selectedContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },

  selectedContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    left: 10,
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 20,
    height: 22,
    width: 22,
  },
});

export default Maps;
