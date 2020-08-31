// import { contacts } from "./reducer";

import api from './../../../../packages/isomorphic/src/Api/AxiosClient';
import questionApi from './questionApi';
function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

function validPayload(data) {
  // let data = { ..._data };
  for (let atribute in data) {
    if (data[atribute] === '') data[atribute] = '_';
  }
  // return data;
}

const contactActions = {
  ADD_QUESTION: 'ADD_QUESTION',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE__CONTACT: 'DELETE__CONTACT',
  CHANGE_CONTACT: 'CHANGE_CONTACT',
  EDIT_VIEW: 'EDIT_VIEW',
  EDITING_QUESTION: 'EDITING_QUESTION',
  UPDATE_QUESTION: 'UPDATE_QUESTION',
  FETCH_QUESTION: 'FETCH_QUESTION',

  changeContact: id => ({
    type: contactActions.CHANGE_CONTACT,
    id,
  }),

  fetchQuestionList: () => {
    return async dispatch => {
      const params = { pageSize: 500, page: 0 };
      const questionList = await questionApi.getQuestionList(params);
      console.log(questionList);
      dispatch({
        type: contactActions.FETCH_QUESTION,
        questions: questionList,
      });
    };
  },

  onAddQuestion: () => {
    const newQuestion = {
      content: '_',
      answerA: '_',
      answerB: '_',
      answerC: '_',
      answerD: '_',
      result: 'A',
      image: '_',
      description: '_',
      isShuffle: 0,
    };
    return async (dispatch, getState) => {
      validPayload(newQuestion);
      console.log(newQuestion);
      const newQuestionWithId = await questionApi.addQuestion(newQuestion);
      console.log(newQuestionWithId);
      dispatch({
        type: contactActions.ADD_QUESTION,
        contacts: [...getState().Questions.contacts, newQuestionWithId],
        selectedId: newQuestionWithId.id,
        editQuestion: newQuestionWithId,
      });
    };
  },

  onDeleteQuestion: id => {
    return (dispatch, getState) => {
      const contacts = getState().Questions.contacts;
      const seectedId = getState().Questions.seectedId;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {
          questionApi.deleteQuestion(id);
          // dispatch(contactActions.fetchQuestionList());
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

  addQuestion: newQuestion => {
    return (dispatch, getState) => {
      dispatch({
        type: contactActions.ADD_QUESTION,
        contacts: [...getState().Questions.contacts, newQuestion],
        selectedId: newQuestion.id,
        editQuestion: newQuestion,
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
      const newQuestionList = [];

      questions.forEach(async question => {
        if (question.id === newQuestion.id) {
          newQuestionList.push(newQuestion); //--> han che get
          const updatedQuestion = await questionApi.editQuestion(
            newQuestion.id,
            newQuestion
          );

          // dispatch(contactActions.fetchQuestionList()); // --> get nhieu lan
        } else {
          newQuestionList.push(question);
        }
      });

      dispatch({
        type: contactActions.UPDATE_QUESTION,
        questions: newQuestionList.sort(ascendingSort),
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
