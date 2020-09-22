// import { contacts } from "./reducer";
import notification from '@iso/components/Notification';
import questionApi from './questionApi';
function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

function makePayloadValid({ ...data }) {
  // let data = { ..._data };
  for (let atribute in data) {
    if (data[atribute] === '') data[atribute] = '_';
  }
  return data;
}

function validQuestion(question) {
  if (question.content.replace(/\s+/g, '') === '') return false;
  if (question.answerA.replace(/\s+/g, '') === '') return false;
  if (question.answerB.replace(/\s+/g, '') === '') return false;
  if (question.answerC.replace(/\s+/g, '') === '') return false;
  if (question.answerD.replace(/\s+/g, '') === '') return false;
  // if (question.image !== undefined || question.image !== null)
  // if (question.image.replace(/\s+/g, '') === '') question.image = 'no image';
  return true;
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
  UNVALID_PAYLOAD: 'UNVALID_PAYLOAD',
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',

  changeContact: id => ({
    type: contactActions.CHANGE_CONTACT,
    id,
  }),

  fetchQuestionList: () => {
    //console.log('hell');
    return async dispatch => {
      const params = { pageSize: 500, page: 0 };
      dispatch({ type: contactActions.LOADING });
      const questionList = await questionApi.getQuestionList(params, dispatch);
      dispatch({ type: contactActions.UNLOADING });
      console.log('hi');
      if (questionList.length > 0) {
        dispatch({
          type: contactActions.FETCH_QUESTION,
          questions: questionList,
          seectedId: questionList[0].id,
        });
      }
    };
  },

  onAddQuestion: () => {
    const newQuestion = {
      content: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      result: 'A',
      image: '',
      description: '',
      isShuffle: 0,
    };
    return async (dispatch, getState) => {
      const validQuestion = makePayloadValid(newQuestion);
      //console.log(validQuestion, newQuestion);
      const newId = await questionApi.addQuestion(validQuestion, dispatch);
      const newQuestionWithId = { ...newQuestion, id: newId };
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
          questionApi.deleteQuestion(id, dispatch);
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

      const valid = validQuestion(newQuestion); //questions will change;
      if (valid) {
        questions.forEach(async question => {
          if (question.id === newQuestion.id) {
            newQuestionList.push(newQuestion); //--> han che get
            const updatedQuestion = await questionApi.editQuestion(
              newQuestion.id,
              newQuestion,
              dispatch
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
      } else {
        dispatch(contactActions.unvalidPayload());
        notification(
          'error',
          `Câu hỏi không hợp lệ`,
          'Kiểm tra lại các trường dữ liệu bắt buộc'
        );
      }
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

  unvalidPayload: () => ({
    type: contactActions.UNVALID_PAYLOAD,
  }),
};
export default contactActions;
