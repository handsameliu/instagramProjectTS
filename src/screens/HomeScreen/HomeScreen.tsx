import React, {ReactNode} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import actions from 'reduxState/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'components/Header';
import {navigate} from 'utils/navigationService';
import FeedListScreen from 'screens/FeedListScreen/FeedListScreen';

interface Props {}

export default function HomeScreen({}: Props) {
  // const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.container}>
        <Header
          title="动态"
          leftBtn={
            <TouchableOpacity
              onPress={() => {
                navigate('PostFeedScreen');
              }}>
              <Icon name="plus" size={24} />
            </TouchableOpacity>
          }
        />
        <FeedListScreen />
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
