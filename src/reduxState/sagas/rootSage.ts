import {fork} from 'redux-saga/effects';

const combinedSagas = []; // 将其他的不影响界面state渲染的逻辑放到这里统一处理

function* rootSaga() {
  for (const sagas of combinedSagas) {
    for (const saga of Object.values(sagas)) {
      yield fork(saga);
    }
  }
}

export default rootSaga;
