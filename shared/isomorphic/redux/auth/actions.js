import api from './../../../../packages/isomorphic/src/Api/AxiosClient';
import notification from '@iso/components/Notification';

const fakeResponse = {
  user: {
    username: 'admin',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMzLCJpYXQiOjE1OTkwMzA3OTcyMDgsImV4cCI6MTU5OTAzMTQwMjAwOH0.A8AzXldExU0cpkXlpr9_DTFgTjdhajSy4QEUEK3cvDw',
  expires: '7d',
};

const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  EDIT_PASSWORD: 'EDIT_PASSWORD',
  EDIT_USERNAME: 'EDIT_USERNAME',

  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  // login: (signinInfo) => ({
  //   type: actions.LOGIN_REQUEST,
  //   payload: { token },
  // }),
  login: user => {
    return dispatch => {
      dispatch({
        type: actions.LOGIN_REQUEST,
        payload: fakeResponse,
      });
      // return api
      //   .post('auth/login/admin', user)
      //   .then(response => {
      //     console.log(response);
      //     switch (response.status) {
      //       case 200:
      //         notification('success', 'Đăng nhập thành công');
      //         dispatch({
      //           type: actions.LOGIN_REQUEST,
      //           payload: response.data,
      //         });
      //         break;

      //       case 400:
      //         notification('warning', 'Wrong username or password', '');
      //         break;

      //       case 401:
      //         notification('warning', 'Wrong username or password', '');
      //         break;

      //       default:
      //         notification('warning', 'Tài khoản không tồn tại', '');
      //         // window.alert(response.status);
      //         break;
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     notification('warning', 'Sai mật khẩu', '');
      //   });
    };
  },

  logout: () => ({
    type: actions.LOGOUT,
  }),
  editPassword: newPassword => ({
    type: actions.EDIT_PASSWORD,
    payload: newPassword,
  }),
  editUsername: newUsername => ({
    type: actions.EDIT_USERNAME,
    payload: newUsername,
  }),
};
export default actions;
