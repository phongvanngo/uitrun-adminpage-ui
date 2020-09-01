import axiosClient from './../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';
import questionAction from './actions';
import notification from '@iso/components/Notification';

function solveError(mess, dispatch) {
  if (window.confirm(mess + ', reload ?')) {
    dispatch(questionAction.fetchQuestionList());
  }
}

const questionApi = {
  getQuestionList: async (_params, dispatch) => {
    const url = '/question';
    const params = queryString.stringify(_params);
    const questionList = await axiosClient
      .get(url + '?' + params)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Get question list successfully');
            return response.data;
            break;

          default:
            solveError(response.status, dispatch);
            return [];
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return [];
      });
    return questionList;
  },

  get: id => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  addQuestion: async (newQuestion, dispatch) => {
    const url = '/question';
    const newId = await axiosClient
      .post(url, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Add question successfully');
            return response.data.id;
            break;

          default:
            console.log(newQuestion);
            solveError(response.status, dispatch);
            return null;
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return null;
      });
    return newId;
  },

  editQuestion: async (id, newQuestion, dispatch) => {
    const url = '/question';
    const updatedtQuestion = await axiosClient
      .patch(`${url}/${id}`, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Update question successfully');
            return response.data;
            break;
          default:
            solveError(response.status, dispatch);
            return newQuestion;
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return newQuestion;
      });
    return updatedtQuestion;
  },

  deleteQuestion: async (id, dispatch) => {
    const url = '/question';
    const response = await axiosClient
      .delete(`${url}/${id}`)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Delete question successfully');
            return response.status;
            break;

          default:
            solveError(response.status, dispatch);
            return response.status;
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return {};
      });

    return response;
  },
  apii: async () => {
    const url = '';
    const data = await axiosClient
      .get(url)
      .then(response => {
        switch (response.status) {
          case 200:
            return response;
            break;

          default:
            solveError(response.status, dispatch);
            return [];
            break;
        }
      })
      .catch(error => {
        solveError('connection failed', dispatch);
        return {};
      });

    return data;
  },
};

export default questionApi;
