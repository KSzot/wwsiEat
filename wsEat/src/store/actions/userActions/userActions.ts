import {Dispatch} from 'redux';

export enum UserActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET',
  DELETE_PRODUCT_FROM_BASKET = 'DELETE_PRODUCT_FROM_BASKET',
  INCREASE_PRODUCT_AMOUNT = 'INCREASE_PRODUCT_AMOUNT',
  DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT',
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

export const addProdcutToBasket =
  (data: Product) => (dispatch: Dispatch, getState: () => RootStore) => {
    const currentArray = getState().User.basket;
    if (
      currentArray.findIndex(
        el => el.id.toLowerCase() === data.id.toLowerCase(),
      ) === -1
    )
      dispatch({type: UserActionTypes.ADD_PRODUCT_TO_BASKET, payload: data});
  };

interface DeleteProductFromBasket {
  type: UserActionTypes.DELETE_PRODUCT_FROM_BASKET;
  payload: number;
}

export const deleteProductFromBasket =
  (id: string) => (dispatch: Dispatch, getState: () => RootStore) => {
    const currentArray = getState().User.basket;
    const index = currentArray.findIndex(
      el => el.id.toLowerCase() === id.toLowerCase(),
    );
    dispatch({
      type: UserActionTypes.DELETE_PRODUCT_FROM_BASKET,
      payload: index,
    });
  };

interface IncreaseAmountSelectedProduct {
  type: UserActionTypes.INCREASE_PRODUCT_AMOUNT;
  payload: {index: number; currentAmount: number};
}

export const increaseAmountSelectedProduct =
  (id: string, currentAmount: number) =>
  (dispatch: Dispatch, getState: () => RootStore) => {
    const currentArray = getState().User.basket;
    const index = currentArray.findIndex(
      el => el.id.toLowerCase() === id.toLowerCase(),
    );
    dispatch({
      type: UserActionTypes.INCREASE_PRODUCT_AMOUNT,
      payload: {index, currentAmount},
    });
  };

interface DecreaseAmountSelectedProduct {
  type: UserActionTypes.DECREASE_PRODUCT_AMOUNT;
  payload: number;
}

export const decreaseAmountSelectedProduct =
  (id: string) => (dispatch: Dispatch, getState: () => RootStore) => {
    const currentArray = getState().User.basket;
    const index = currentArray.findIndex(
      el => el.id.toLowerCase() === id.toLowerCase(),
    );
    if (currentArray[index].amount > 1) {
      dispatch({
        type: UserActionTypes.DECREASE_PRODUCT_AMOUNT,
        payload: index,
      });
    }
  };

export type UserActions =
  | LoginUserActionType
  | AddProdcutActionType
  | DeleteProductFromBasket
  | IncreaseAmountSelectedProduct
  | DecreaseAmountSelectedProduct;
