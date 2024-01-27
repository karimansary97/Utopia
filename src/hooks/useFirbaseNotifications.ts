import {useEffect} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, {
  EventType,
  Event,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import {Linking} from 'react-native';
import useGetFirebaseDeviceToken from './useGetFirebaseDeviceToken';

const displayNotifee = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'default',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });

  notifee.displayNotification({
    title: remoteMessage?.notification?.title,
    body: remoteMessage?.notification?.body,
    data: remoteMessage?.data,
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
      pressAction: {
        id: 'default',
      },
    },
  });
};

export const onPressNotification = async (data: any) => {
  if (data?.newsId) {
    Linking.openURL(`koraplus://app/news/${data?.newsId}`);
  }
  if (data?.matchId) {
    Linking.openURL(`koraplus://app/matches/matchDetails/${data?.matchId}`);
  }
  if (data?.link) {
    Linking.openURL(data?.link as string);
  }
};

const onNotificationOpenedApp = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
) => {
  onPressNotification(remoteMessage?.data);
};

const onForground = async ({type, detail}: Event) => {
  if (type === EventType.PRESS) {
    onPressNotification(detail.notification?.data);
  }
};

const useFirbaseNotifications = () => {
  useGetFirebaseDeviceToken();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(displayNotifee);
    const unsubscribeOpenApp = messaging().onNotificationOpenedApp(
      onNotificationOpenedApp,
    );
    const unsubscribeForeground = notifee.onForegroundEvent(onForground);
    messaging().getInitialNotification().then(onNotificationOpenedApp);

    return () => {
      unsubscribe();
      unsubscribeOpenApp();
      unsubscribeForeground();
    };
  }, []);
};

export default useFirbaseNotifications;
