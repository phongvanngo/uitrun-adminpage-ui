import Button from '@iso/components/uielements/button';
import Checkbox from '@iso/components/uielements/checkbox';
import Input from '@iso/components/uielements/input';
import IntlMessages from '@iso/components/utility/intlMessages';
import appAction from '@iso/redux/app/actions';
import authAction from '@iso/redux/auth/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import SignInStyleWrapper from './SignIn.styles';

const { login, editPassword, editUsername } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);
  const password = useSelector(state => state.Auth.password);
  const username = useSelector(state => state.Auth.username);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  function handleLogin(e, token = false) {
    e.preventDefault();
    const user = { username: username, password: password };
    dispatch(login(user));
    dispatch(clearMenu());
    history.push('/dashboard');
  }
  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Username"
                  autoComplete="true"
                  value={username}
                  onChange={e => dispatch(editUsername(e.target.value))}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                  value={password}
                  onChange={e => dispatch(editPassword(e.target.value))}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              {/* <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p> */}
            </form>

            {/* <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
