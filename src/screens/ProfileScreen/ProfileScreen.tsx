import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import actions from 'reduxState/actions';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  function logout() {
    Alert.alert(
      '提示',
      '您确定要退出？',
      [
        {
          text: '取消',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '退出',
          onPress: () => {
            dispatch(actions.logout());
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  }
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.container}>
        <Button
          title="退出"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
