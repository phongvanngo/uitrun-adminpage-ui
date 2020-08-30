import { contacts } from './reducer';

function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const contactActions = {
  ADD_QUESTION: 'ADD_QUESTION',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE__CONTACT: 'DELETE__CONTACT',
  CHANGE_CONTACT: 'CHANGE_CONTACT',
  EDIT_VIEW: 'EDIT_VIEW',
  EDITING_QUESTION: 'EDITING_QUESTION',
  UPDATE_QUESTION: 'UPDATE_QUESTION',

  changeContact: id => ({
    type: contactActions.CHANGE_CONTACT,
    id,
  }),

  addContact: () => {
    const newContact = {
      id: new Date(),
      // firstName: '',
      // // avatar: contacts[new Date() % 10].avatar,
      // LastName: '',
      // mobile: '',
      // home: '',
      // name: '',
      // company: '',
      // work: '',
      // note: '',

      content: '',
      image: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      result: '',
      description: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: contactActions.ADD_QUESTION,
        contacts: [...getState().Questions.contacts, newContact],
        selectedId: newContact.id,
        editQuestion: newContact,
      });
      // dispatch({
      //   type: contactActions.EDIT_VIEW,
      //   view: true,
      // });
    };
  },
  editContact: newContact => {
    return (dispatch, getState) => {
      const contacts = getState().Questions.contacts;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === newContact.id) {
          newContacts.push(newContact);
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.EDIT_CONTACT,
        contacts: newContacts.sort(ascendingSort),
      });
    };
  },

  updateQuestion: () => {
    return (dispatch, getState) => {
      const questions = getState().Questions.contacts;
      const newQuestion = getState().Questions.editingQuestion;
      const newQuestions = [];
      questions.forEach(question => {
        if (question.id === newQuestion.id) {
          newQuestions.push(newQuestion);
        } else {
          newQuestions.push(question);
        }
      });
      dispatch({
        type: contactActions.UPDATE_QUESTION,
        questions: newQuestions.sort(ascendingSort),
      });
    };
  },

  onEditQuestion: (atribute, value) => {
    return (dispatch, getState) => {
      const question = getState().Questions.editingQuestion;

      let newQuestion = { ...question };
      switch (atribute) {
        case 'content':
          newQuestion = { ...question, content: value };
          break;
        case 'image':
          newQuestion = { ...question, image: value };
          break;
        case 'description':
          newQuestion = { ...question, description: value };
          break;
        case 'result':
          newQuestion = { ...question, result: value };
          break;
        case 'description':
          newQuestion = { ...question, description: value };
          break;
        case 'answerA':
          newQuestion = { ...question, answerA: value };
          break;
        case 'answerB':
          newQuestion = { ...question, answerB: value };
          break;
        case 'answerC':
          newQuestion = { ...question, answerC: value };
          break;
        case 'answerD':
          newQuestion = { ...question, answerD: value };
          break;
        default:
          break;
      }

      dispatch({
        type: contactActions.EDITING_QUESTION,
        question: newQuestion,
      });
    };
  },

  deleteContact: id => {
    return (dispatch, getState) => {
      const contacts = getState().Questions.contacts;
      const seectedId = getState().Questions.seectedId;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.DELETE__CONTACT,
        contacts: newContacts,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: view => ({
    type: contactActions.EDIT_VIEW,
    view,
  }),
};
export default contactActions;
