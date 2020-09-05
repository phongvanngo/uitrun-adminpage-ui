// import { contacts } from "./reducer";
import notification from '@iso/components/Notification';
import userApi from './userApi';

const userAction = {
  FETCH_USER_LIST: 'FETCH_USER_LIST',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_FULLNAME: 'UPDATE_FULLNAME',

  fetchUserList: () => {
    return async dispatch => {
      const params = { pageSize: 500, page: 0 };
      const userList = await userApi.getUserList(params, dispatch);
      const userListWithKey = userList
        ? userList.map((user, index) => ({
            ...user,
            key: index + 1,
          }))
        : [];
      if (userListWithKey.length > 0) {
        dispatch({
          type: userAction.FETCH_USER_LIST,
          userList: userListWithKey,
        });
      }
    };
  },

  updateUser: (id, atribute, value) => {
    return async dispatch => {
      const response = await userApi.updateUser(
        id,
        { [atribute]: value },
        dispatch
      );
      dispatch({
        type: userAction.UPDATE_USER,
        id: id,
        atribute: atribute,
        value: value,
      });
    };
  },
};
export default userAction;
