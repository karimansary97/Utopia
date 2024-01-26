import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {HomeIcon} from '../styles/icons';
import BottomBar from '../components/UIELements/BottomBar';

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
        key="scan"
        name="scan"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
        component={Home}
      />

      <Tab.Screen
        key="Help Center"
        name="Help"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
        component={Home}
      />

      <Tab.Screen
        key="more"
        name="More"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
