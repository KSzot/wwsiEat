type UserState = {
  user: any;
};

const initialState: UserState = {
  user: {},
};

export const userReducer = (
  state: UserState = initialState,
  action: any,
): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};
