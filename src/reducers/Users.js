let initState = {
  user_tmp: 'Chinh'
};

const UsersReducer = (state = initState, action) => {
  switch(action.type) {
    case 'TEST_USERS_ACTION':
      state.user_tmp = 'Hoang Duy Chinh'
      return {...state};
    default: return state;
  }

}

export default UsersReducer;