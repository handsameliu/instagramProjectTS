import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {navigate} from 'utils/navigationService';
import Icon from 'react-native-vector-icons/FontAwesome';
import {post} from 'utils/request';
import {useDispatch} from 'react-redux';
import actions from 'reduxState/actions';

interface Props {}

const LoginScreen = ({}: Props) => {
  const dispatch = useDispatch();
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  async function login() {
    setIsSigninInProgress(true);
    try {
      const {ok, msg, data}: any = await post('/login', {
        username,
        pwd,
      });
      let user = data;
      if (ok && user) {
        dispatch(actions.setUser(user));
        setTimeout(() => {
          Alert.alert('登录成功');
        }, 200);
      } else {
        Alert.alert(msg || '登陆失败，请检查网络和输入后重试');
        setIsSigninInProgress(false);
      }
    } catch (error) {
      console.warn('error: ', error);
      throw error;
    }
  }
  function gotoRegister() {
    navigate('RegisterScreen');
  }
  return (
    <View style={styles.bg}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.input}
            placeholder="用户名"
            autoCapitalize="none"
            autoCorrect={false}
            leftIcon={<Icon name="user" style={styles.icon} />}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            containerStyle={styles.input}
            placeholder="密码"
            secureTextEntry
            leftIcon={<Icon name="lock" style={styles.icon} />}
            value={pwd}
            onChangeText={setPwd}
            onSubmitEditing={login}
          />
          <View style={styles.signup}>
            <Text style={styles.link} onPress={gotoRegister}>
              注册用户
            </Text>
            <Text style={styles.link}>忘记密码</Text>
          </View>
        </View>
        <Button
          title="登陆"
          onPress={login}
          buttonStyle={styles.signinButton}
          disabled={isSigninInProgress}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '35%',
    alignItems: 'center',
  },
  bg: {flex: 1},
  inputContainer: {
    width: '95%',
    backgroundColor: '#fff8',
    padding: 12,
    borderRadius: 16,
  },
  input: {
    marginVertical: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 24,
  },
  signup: {
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinButton: {
    marginTop: 50,
    width: 192,
    height: 48,
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 40,
  },
  link: {
    fontSize: 16,
    color: '#0366d6',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
