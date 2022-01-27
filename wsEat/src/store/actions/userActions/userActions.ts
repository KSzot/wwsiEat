import {Dispatch} from 'redux';

export enum UserActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
}

interface LoginUserActionType {
  type: UserActionTypes.LOGIN_USER;
  payload: any;
}

export const loginUser = (data: any) => async (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.LOGIN_USER, payload: data});
};

export type UserActions = LoginUserActionType;
