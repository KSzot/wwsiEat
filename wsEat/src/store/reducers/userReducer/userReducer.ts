import {
  UserActions,
  UserActionTypes,
} from '../../actions/userActions/userActions';

type UserState = {
  user: any;
};

const initialState: UserState = {
  user: {},
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions,
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER: {
      return {...state, user: action.payload};
    }
    default:
      return state;
  }
};
