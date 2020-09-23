// import fakeData from './data2';
import contactActions from './actions';

// const contacts = new fakeData(4).getAll();

const initState = {
  contacts: [],
  seectedId: null,
  editView: false,
  editingQuestion: {},
  loading: false,
};

export default function questionReducer(state = initState, action) {
  switch (action.type) {
    case contactActions.FETCH_QUESTION:
      return {
        ...state,
        contacts: action.questions,
        seectedId: action.seectedId,
        loading: false,
      };
    case contactActions.CHANGE_CONTACT:
      return {
        ...state,
        seectedId: action.id,
        editView: false,
      };
    case contactActions.ADD_QUESTION:
      return {
        ...state,
        contacts: action.contacts,
        seectedId: action.selectedId,
        editingQuestion: action.editQuestion,
        editView: true,
        loading: false,
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
        return {
          ...state,
          editView: action.view,
          editingQuestion: editQuestion[0],
        };
      }

    case contactActions.EDITING_QUESTION:
      return {
        ...state,
        editingQuestion: action.question,
      };
    case contactActions.UPDATE_QUESTION:
      return {
        ...state,
        contacts: action.questions,
      };

    case contactActions.UNVALID_PAYLOAD:
      return {
        ...state,
        editView: true,
      };

    case contactActions.QUESTION_LOADING:
      return {
        ...state,
        loading: true,
      };

    case contactActions.QUESTION_UNLOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

// export { contacts };
