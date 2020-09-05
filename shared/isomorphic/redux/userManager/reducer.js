import userAction from './actions';

const initState = {
  userList: [],
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case userAction.FETCH_USER_LIST:
      return {
        userList: action.userList,
      };
    case userAction.UPDATE_FULLNAME:
      return {
        userList: action.userList,
      };
    case userAction.UPDATE_USER:
      let newUserList = [...state.userList];
      for (let i = 0; i < newUserList.length; i++) {
        if (newUserList[i].id === action.id) {
          newUserList[i] = {
            ...newUserList[i],
            [action.atribute]: action.value,
          };
          break;
        }
      }

      return {
        userList: newUserList,
      };

    default:
      return state;
  }
}

// export { contacts };
