import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import Contacts from '@iso/redux/contacts/reducer';
import Questions from '@iso/redux/cquestions/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import ScoreBoard from '@iso/redux/ScoreBoard/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import UserManager from '@iso/redux/userManager/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  ThemeSwitcher,
  LanguageSwitcher,

  // Calendar,
  // Mails,
  // Box,
  // Notes,
  // Todos,
  // Cards,
  // Chat,
  // DynamicChartComponent,
  // Ecommerce,
  // Invoices,
  // YoutubeSearch,
  // Articles,
  // Investors,
  // scrumBoard,
  // modal,
  // drawer,
  // profile,
  // githubSearch,

  Contacts,
  Questions,
  UserManager,
  ScoreBoard,
  Auth,
  App,
});
