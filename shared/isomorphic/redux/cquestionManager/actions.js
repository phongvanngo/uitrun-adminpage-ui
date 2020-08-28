import { contacts } from './reducer';

function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const questionActions = {
  ADD_QUESTION: 'ADD_QUESTION',
  EDIT_QUESTION: 'EDIT_QUESTION',
  DELETE__QUESTION: 'DELETE__QUESTION',
  CHANGE_QUESTION: 'CHANGE_QUESTION',
  EDIT_VIEW: 'EDIT_VIEW',
  changeQuestion: id => ({
    type: questionActions.CHANGE_QUESTION,
    id,
  }),
  addQuestion: () => {
    const newQuestion = {
      id: new Date(),
      firstName: '',
      // avatar: contacts[new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: questionActions.ADD_QUESTION,
        contacts: [...getState().Contacts.contacts, newQuestion],
        selectedId: newQuestion.id,
      });
    };
  },
  editContact: newQuestion => {
    return (dispatch, getState) => {
      const questions = getState().Contacts.contacts;
      const newQuestions = [];
      questions.forEach(question => {
        if (question.id === newQuestion.id) {
          newQuestions.push(newQuestion);
        } else {
          newQuestions.push(question);
        }
      });
      dispatch({
        type: questionActions.EDIT_QUESTION,
        contacts: newQuestion.sort(ascendingSort),
      });
    };
  },
  deleteContact: id => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.contacts;
      const seectedId = getState().Contacts.seectedId;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: questionActions.DELETE__QUESTION,
        contacts: newContacts,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: view => ({
    type: questionActions.EDIT_VIEW,
    view,
  }),
};
export default questionActions;
