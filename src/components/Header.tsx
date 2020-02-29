import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface HeaderType {
  title?: string;
  rightBtn?: ReactNode;
  leftBtn?: ReactNode;
}

export default function Header({title, rightBtn, leftBtn}: HeaderType) {
  return (
    <View style={styles.container}>
      <View style={styles.action}>{rightBtn}</View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{title}</Text>
      </View>
      <View style={styles.action}>{leftBtn}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignContent: 'center',
    width: '80%',
  },
  contentText: {
    textAlign: 'center',
  },
});
