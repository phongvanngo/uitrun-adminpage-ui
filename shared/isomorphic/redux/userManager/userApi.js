import axiosClient from '../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';
import notification from '@iso/components/Notification';
import userAction from './actions';

function solveError(mess, dispatch) {
  if (window.confirm(mess + ', reload ?')) {
    dispatch(userAction.fetchuserList());
  }
}

const userApi = {
  getUserList: async (_params, dispatch) => {
    console.log('hel');
    const url = '/user';
    const params = queryString.stringify(_params);
    const userList = await axiosClient
      .get(url + '?' + params)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Get user list successfully');
            return response.data;
            break;

          default:
            solveError(response.status, dispatch);
            return [];
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return [];
      });
    return userList;
  },

  updateUserCode: async (id, newUserCode, dispatch) => {
    const url = '/user/';
    console.log(id, newUserCode);
    const data = await axiosClient
      .patch(url + `${id}`, newUserCode)
      .then(response => {
        switch (response.status) {
          case 200:
            return response;
            break;

          default:
            solveError(response.status, dispatch);
            return null;
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return null;
      });

    return data;
  },
  apii: async () => {
    const url = '';
    const data = await axiosClient
      .get(url)
      .then(response => {
        switch (response.status) {
          case 200:
            return response;
            break;

          default:
            solveError(response.status, dispatch);
            return null;
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return null;
      });

    return data;
  },
};

export default userApi;
