import {
  UserActions,
  UserActionTypes,
} from '../../actions/userActions/userActions';

type UserState = {
  user: any;
  basket: Product[];
};

const initialState: UserState = {
  user: {},
  basket: [],
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions,
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER: {
      return {...state, user: action.payload};
    }
    case UserActionTypes.ADD_PRODUCT_TO_BASKET: {
      return {...state, basket: state.basket.concat(action.payload)};
    }
    case UserActionTypes.DELETE_PRODUCT_FROM_BASKET: {
      return {
        ...state,
        basket: [
          ...state.basket.slice(0, action.payload),
          ...state.basket.slice(action.payload + 1),
        ],
      };
    }
    case UserActionTypes.INCREASE_PRODUCT_AMOUNT: {
      const newArray = [...state.basket];
      newArray[action.payload.index].amount = action.payload.currentAmount;
      return {
        ...state,
        basket: newArray,
      };
    }
    case UserActionTypes.DECREASE_PRODUCT_AMOUNT: {
      const newArray = [...state.basket];
      newArray[action.payload].amount = newArray[action.payload].amount - 1;
      return {
        ...state,
        basket: newArray,
      };
    }
    default:
      return state;
  }
};
