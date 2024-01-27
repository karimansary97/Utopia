import messaging from '@react-native-firebase/messaging';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

const useGetFirebaseDeviceToken = () => {
  const [enabled, setEnabled] = useState(false);

  const requestFCMPermission = async () => {
    const authResponse = await messaging().requestPermission();
    const isEnabled =
      authResponse === messaging.AuthorizationStatus.AUTHORIZED ||
      authResponse === messaging.AuthorizationStatus.PROVISIONAL;
    if (isEnabled) {
      setEnabled(true);
    }
    if (Platform.OS === 'android') {
      try {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (permission === 'granted') {
          setEnabled(true);
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    requestFCMPermission();
  }, []);

  const x = useQuery({
    queryKey: ['deviceToken'],
    queryFn: async () => await messaging().getToken(),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled,
  });
  console.log(x);
};

export default useGetFirebaseDeviceToken;
