import {Dispatch} from 'redux';

export enum UserActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET',
}

interface LoginUserActionType {
  type: UserActionTypes.LOGIN_USER;
  payload: any;
}

export const loginUser = (data: any) => async (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.LOGIN_USER, payload: data});
};

interface AddProdcutActionType {
  type: UserActionTypes.ADD_PRODUCT_TO_BASKET;
  payload: Product;
}

export const addProdcutToBasket = (data: Product) => (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.ADD_PRODUCT_TO_BASKET, payload: data});
};

export type UserActions = LoginUserActionType | AddProdcutActionType;
