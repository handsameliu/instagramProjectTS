import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native-elements';
// import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import actions from 'reduxState/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TabParamList = {
  HomeScreen: undefined;
  DiscoverScreen: undefined;
  MapScreen: undefined;
  ProfileScreen: undefined;
};

function HomeScreen() {
  const dispatch = useDispatch();
  function logout() {
    Alert.alert(
      '提示',
      '您确定要退出？',
      [
        {
          text: '取消',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '退出', onPress: () => dispatch(actions.logout())},
      ],
      {cancelable: false},
    );
  }

  return (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>动态</Text>
        <Button title="退出" onPress={logout} />
      </View>
    </SafeAreaView>
  );
}

function DiscoverScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>发现</Text>
    </View>
  );
}

function NearbyScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>附近</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>我的</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

interface renderIconType {
  name: string;
  fontColor?: string;
  fontSize?: number;
}

function renderIcon({name, fontColor, fontSize}: renderIconType) {
  return ({focused, color, size}) => (
    <Icon name={name} color={fontColor || color} size={fontSize || size} />
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="动态"
        component={HomeScreen}
        options={{
          tabBarIcon: renderIcon({name: 'home', fontSize: 24}),
        }}
      />
      <Tab.Screen
        name="发现"
        component={DiscoverScreen}
        options={{
          tabBarIcon: renderIcon({name: 'search', fontSize: 24}),
        }}
      />
      <Tab.Screen
        name="附近"
        component={NearbyScreen}
        options={{
          tabBarIcon: renderIcon({name: 'map-marker', fontSize: 24}),
        }}
      />
      <Tab.Screen
        name="我的"
        component={ProfileScreen}
        options={{
          tabBarIcon: renderIcon({name: 'user', fontSize: 24}),
        }}
      />
    </Tab.Navigator>
  );
}
