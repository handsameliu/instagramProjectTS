import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import {useSelector} from 'react-redux';
import {selectToken} from 'reduxState/selectors';
// import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from 'utils/navigationService';

export default function RootScreen() {
  const token = useSelector(selectToken);
  // useEffect(() => SplashScreen.hide(), []);
  return (
    <NavigationContainer ref={navigationRef}>
      {token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
