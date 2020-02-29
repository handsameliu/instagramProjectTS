import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import PostFeedScreen from 'screens/PostFeedScreen/PostFeedScreen';
import FeedListScreen from 'screens/FeedListScreen/FeedListScreen';

export type MainStackParamList = {
  TabNavigator: undefined;
  PostFeedScreen: undefined;
  FeedListScreen: {title: string; showMe?: boolean};
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
      <Screen
        name="PostFeedScreen"
        component={PostFeedScreen}
        options={{
          title: '发表动态',
        }}
      />
      <Screen
        name="FeedListScreen"
        component={FeedListScreen}
        options={{
          title: '我的动态',
        }}
      />
    </Navigator>
  );
}
