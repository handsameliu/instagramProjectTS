import React, {ReactNode, ReactElement} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import actions from 'reduxState/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {}
interface HeaderType {
  title?: string;
  rightBtn?: ReactNode;
  leftBtn?: ReactNode;
}

export default function HomeScreen({}: Props) {
  // const dispatch = useDispatch();
  const Header = ({title, rightBtn, leftBtn}: HeaderType) => {
    return (
      <View
        style={{
          marginVertical: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {rightBtn}
        </View>
        <View
          style={{
            alignContent: 'center',
            width: '80%',
          }}>
          <Text style={{textAlign: 'center'}}>{title}</Text>
        </View>
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {leftBtn}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.container}>
        <Header title="动态" leftBtn={<Icon name="plus" size={24} />} />
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
