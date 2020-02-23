import AsyncStorage from '@react-native-community/async-storage';
import dataStateReducer from 'reduxState/reducers/dataStateReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'reduxState/sagas/rootSage';

const sagaMiddleware = createSagaMiddleware();

export const reducer = combineReducers({
  // uiState: reducers.uiStateReducer,
  dataState: persistReducer(
    {
      key: 'datastate',
      storage: AsyncStorage,
    },
    dataStateReducer,
  ),
  // settingsState: reducers.settingsStateReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['dataState'],
  },
  reducer,
);

export const ReduxStore = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(ReduxStore);

sagaMiddleware.run(rootSaga);
