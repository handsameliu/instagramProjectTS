import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
  NumberAction,
} from 'redux-type-actions';

const actions = createActions({
  showCameraOptions: NoArgAction,

  setAge: NumberAction,

  setUser: createAction<{name: string; age: number; sex: 'male' | 'female'}>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
