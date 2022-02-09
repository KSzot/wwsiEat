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
    default:
      return state;
  }
};
