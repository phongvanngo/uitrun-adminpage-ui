import axiosClient from './../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';

function solveError() {
  if (window.confirm('Reload website')) {
    questionApi.getQuestionList();
  }
}

const questionApi = {
  getQuestionList: async _params => {
    const url = '/question';
    const params = queryString.stringify(_params);
    const questionList = await axiosClient
      .get(url + '?' + params)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.data;
            break;

          default:
            solveError();
            return [];
            break;
        }
      })
      .catch(error => {
        solveError();
        console.log(error);
        return [];
      });
    return questionList;
  },

  get: id => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  addQuestion: async newQuestion => {
    const url = '/question';
    const newId = await axiosClient
      .post(url, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.data.id;
            break;

          default:
            solveError();
            return null;
            break;
        }
      })
      .catch(error => {
        solveError();
        return null;
      });
    return newId;
  },

  editQuestion: async (id, newQuestion) => {
    const url = '/question';
    const updatedtQuestion = await axiosClient
      .patch(`${url}/${id}`, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.data;
            break;
          default:
            solveError();
            return newQuestion;
            break;
        }
      })
      .catch(error => {
        solveError();
        return newQuestion;
      });
    return updatedtQuestion;
  },

  deleteQuestion: async id => {
    const url = '/question';
    const response = await axiosClient
      .delete(`${url}/${id}`)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.status;
            break;

          default:
            return response.status;
            break;
        }
      })
      .catch(error => {
        solveError();
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
            return [];
            break;
        }
      })
      .catch(error => {
        solveError();
        return {};
      });

    return data;
  },
};

export default questionApi;
