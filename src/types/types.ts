import {Action} from 'reduxState/actions';

export {Action};

export interface DataTimeStamp {
  updateAt: string;
  createAt: string;
}

export interface User extends DataTimeStamp {
  id: number;
  token: string;
  username: string;
  email: string;
}
