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

export interface ReportResult {
  name: string;
  score: number;
  user?: User;
  baike_info: {
    baike_url?: string;
    image_url?: string;
    description?: string;
  };
}

export type ReportType = 'plant';
export interface Report extends DataTimeStamp {
  id: string;
  user: User;
  image: number;
  desc: string;
  lat: number;
  lon: number;
  type: ReportType;
  extra?: ReportResult;
}

export interface FeedLike extends DataTimeStamp {
  id: number;
  userId: number;
}

export interface Feed extends DataTimeStamp {
  id: string;
  images?: number[];
  desc?: string;
  feedLikes?: FeedLike[];
  user: User;
}
