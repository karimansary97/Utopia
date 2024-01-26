import {FC} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import LocationCard from './LocationCard';
import Text from '../UIELements/Text';
import unit from '../../styles/unit';
import Button from '../UIELements/Button';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';
import {LocationDataType} from '../../types/Locations.type';
import ErrorHappen from '../UIELements/ErrorHappen';
import NoDataFound from '../UIELements/NoDataFound';

type LocationListProps = {
  locations?: LocationDataType[];
  userEmail: string;
  edit?: boolean;
  isError?: boolean;
};

const LocationList: FC<LocationListProps> = ({
  locations,
  userEmail,
  edit,
  isError,
}) => {
  const {navigate} = useNavigation();
  const handleAddLocation = () => {
    navigate(routes.AddLocation, {userEmail, edit});
  };
  if (isError) {
    return <ErrorHappen />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text size="large" bold>
          Locations
        </Text>
        <Button size="sm" text="Add New Location" onPress={handleAddLocation} />
      </View>
      {locations?.length ? (
        <FlatList
          data={locations}
          nestedScrollEnabled
          keyExtractor={item => item?.id + ''}
          renderItem={({item}) => (
            <LocationCard
              lat={item?.lat}
              lng={item?.lng}
              id={item?.id}
              edit={edit}
            />
          )}
        />
      ) : (
        <NoDataFound />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12 * unit,
    justifyContent: 'space-between',
  },
});

export default LocationList;
