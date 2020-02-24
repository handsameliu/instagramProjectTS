import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
  NumberAction,
} from 'redux-type-actions';
import {User} from 'types/types';

const actions = createActions({
  showCameraOptions: NoArgAction,

  setAge: NumberAction,

  setUser: createAction<User>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
