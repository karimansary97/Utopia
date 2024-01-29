import 'react-native-gesture-handler';
import 'react-native-devsettings';
import {enableLatestRenderer} from 'react-native-maps';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import appQueryClient, {asyncStoragePersister} from './config/appQueryClient';
import {NotifierWrapper} from 'react-native-notifier';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useRef} from 'react';

enableLatestRenderer();
const App = () => {
  const routeNameRef = useRef<any>();
  const navigationRef = useRef<any>();
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef?.current;
          const currentRouteName =
            navigationRef?.current?.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <PersistQueryClientProvider
          client={appQueryClient}
          persistOptions={{persister: asyncStoragePersister}}>
          <NotifierWrapper>
            <MainNavigation />
          </NotifierWrapper>
        </PersistQueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
