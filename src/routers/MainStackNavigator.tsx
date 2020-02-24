import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

export type MainStackParamList = {
  TabNavigator: undefined;
  PostFeedScreen: undefined;
};

const {Navigator, Screen} = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerBackTitle: '返回',
      }}>
      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
