import {FC} from 'react';
import {View, Pressable} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import colors from '../../../styles/colors';
import styles from './BottomBar.style';

import {CommonActions} from '@react-navigation/native';
import Text from '../Text';
import addShadow from '../../../styles/addShadow';
const BottomBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View style={[styles.container, addShadow('sm')]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.dispatch({
              ...CommonActions.navigate(route),
              target: state.key,
            });
          }
        };
        return (
          <Pressable key={route.key} style={styles.item} onPress={onPress}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? colors.secondary : colors.white,
                size: 0,
              })}
            <Text
              style={[
                styles.text,
                isFocused ? styles.focused : styles.unFocused,
              ]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomBar;
