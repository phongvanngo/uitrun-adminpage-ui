import fakeData from './data2';
import contactActions from './actions';

const contacts = new fakeData(4).getAll();

const initState = {
  contacts,
  seectedId: contacts[0].id,
  editView: false,
  editingQuestion: {},
};

export default function questionReducer(state = initState, action) {
  switch (action.type) {
    case contactActions.CHANGE_CONTACT:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case contactActions.ADD_QUESTION:
      console.log('dfd');
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.selectedId,
        editingQuestion: action.editQuestion,
        view: true,
      };
    case contactActions.EDIT_CONTACT:
      return {
        ...state,
        contacts: action.contacts,
      };
    case contactActions.DELETE__CONTACT:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.seectedId,
      };
    case contactActions.EDIT_VIEW:
      if (action.view === false) {
        return {
          ...state,
          editView: action.view,
        };
      } else {
        const editQuestion = state.contacts.filter(
          contact => contact.id === state.seectedId
        );
        console.log(editQuestion);
        return {
          ...state,
          editView: action.view,
          editingQuestion: editQuestion[0],
        };
      }

      const editQuestion = question.filter();
      return {
        ...state,
        editView: action.view,
      };
    case contactActions.EDITING_QUESTION:
      return {
        ...state,
        editingQuestion: action.question,
      };
    case contactActions.ADD_EDIT_QUESTION:
      console.log(action.question);
      return {
        ...state,
        editingQuestion: action.question,
      };
    default:
      return state;
  }
}

export { contacts };
