import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {HomeIcon, NearbyIcon} from '../styles/icons';
import BottomBar from '../components/UIELements/BottomBar';
import Maps from '../screens/Maps/Maps';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        key="home"
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
        component={Home}
      />

      <Tab.Screen
        key="map"
        name="map"
        options={{
          title: 'Nearby',
          tabBarIcon: ({color}) => <NearbyIcon color={color} />,
        }}
        component={Maps}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
