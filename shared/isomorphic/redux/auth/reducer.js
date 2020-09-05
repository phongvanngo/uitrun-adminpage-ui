import actions from './actions';

const initState = { idToken: null, signInInfo: { username: '', password: '' } };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
      };
    case actions.LOGOUT:
      return initState;
    case actions.EDIT_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case actions.EDIT_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}
