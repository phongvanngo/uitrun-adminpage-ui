import api from './../../../../packages/isomorphic/src/Api/AxiosClient';

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
      return api
        .post('auth/login/admin', user)
        .then(response => {
          if (response.status === 200) {
            // dispatch(isAuthenticated());
            // localStorage.setItem("accessToken", response.data.token);
            // localStorage.setItem("authenticated", "true");
            // localStorage.setItem("username", user.username);
            dispatch({
              type: actions.LOGIN_REQUEST,
              payload: response.data,
            });
          }
        })
        .catch(err => {
          console.log(err);
          alert('Không thể thực hiện');
        });
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
