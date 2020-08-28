import fakeData from './data';
import questionActions from './actions';

const contacts = new fakeData().getAll();
const questions = new fakeData().getAll();

console.log(contacts);

const initState = {
  contacts,
  seectedId: contacts[0].id,
  editView: false,
};

export default function contactReducer(state = initState, action) {
  switch (action.type) {
    case questionActions.CHANGE_QUESTION:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case questionActions.ADD_QUESTION:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.selectedId,
        editView: true,
      };
    case questionActions.EDIT_QUESTION:
      return {
        ...state,
        contacts: action.contacts,
      };
    case questionActions.DELETE__QUESTION:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.seectedId,
      };
    case questionActions.EDIT_VIEW:
      return {
        ...state,
        editView: action.view,
      };
    default:
      return state;
  }
}

export { contacts };
