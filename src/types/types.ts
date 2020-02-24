import {Action} from 'reduxState/actions';
import {DataState} from 'reduxState/reducers/dataStateReducer';
import {MainStackParamList} from 'routers/MainStackNavigator';
import {TabParamList} from 'routers/TabNavigator';
import {AuthStackParamList} from 'routers/AuthStackNavigator';

export {Action};

export interface DataTimeStamp {
  updateAt: string;
  createAt: string;
  deleteAt: string | null;
}

export interface User extends DataTimeStamp {
  id: number;
  token: string;
  username: string;
  email: string;
  avatar: number;
  sex: 'male' | 'female';
}

export interface ReduxState {
  dataState: DataState;
  // uiState: UIState;
  // settingsState: SettingsState;
}

export type ScreensParamList = MainStackParamList &
  TabParamList &
  AuthStackParamList;
