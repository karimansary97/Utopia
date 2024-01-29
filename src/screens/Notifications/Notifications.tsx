import {View, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import Text from '../../components/UIELements/Text';
import Layout from '../../components/UIELements/Layout';

const Notifications = () => {
  return (
    <Layout HeaderVisablity>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <View style={styles.icon} />
            <View>
              <Text style={styles.title}>Test Notification!</Text>
              <Text style={styles.date}>20 Dec, 2022 | 20:49 PM</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>
            Now Utopia has a Two-Factor Authentication. Try it now to make your
            account more secure
          </Text>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: 22,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(36, 107, 253, 0.9)',
  },
  title: {
    fontSize: 20 * unit,
    fontWeight: '700',
    marginLeft: 16 * unit,
  },
  date: {
    marginLeft: 16 * unit,
    color: '#616161',
  },
  subTitle: {
    fontSize: 16 * unit,
    marginTop: 12 * unit,
    color: '#424242',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Notifications;
