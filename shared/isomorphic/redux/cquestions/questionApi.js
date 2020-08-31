import axiosClient from './../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';

const questionApi = {
  getQuestionList: async _params => {
    console.log('3. get');
    const url = '/question';
    const params = queryString.stringify(_params);
    const questionList = await axiosClient
      .get(url + '?' + params)
      .then(response => {
        console.log('response', response);
        switch (response.status) {
          case 200:
            return response.data;
            break;

          default:
            window.alert(response.status);
            return [];
            break;
        }
      })
      .catch(error => {
        window.alert('connection failed');
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
    const questionWithId = await axiosClient
      .post(url, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.data;
            break;

          default:
            window.alert(response.status);
            return {};
            break;
        }
      })
      .catch(error => {
        window.alert('connection failed');
        return {};
      });
    return questionWithId;
  },

  editQuestion: async (id, newQuestion) => {
    const url = '/question';
    console.log('1. edit');
    const updatedtQuestion = await axiosClient
      .patch(`${url}/${id}`, newQuestion)
      .then(response => {
        switch (response.status) {
          case 200:
            return response.data;
            break;
          default:
            window.alert(response.status);
            return newQuestion;
            break;
        }
      })
      .catch(error => {
        window.alert('connection failed');
        return newQuestion;
      });
    return updatedtQuestion;
  },
  apii: async () => {
    const url = '';
    const data = await axiosClient
      .get(url)
      .then(response => {
        switch (response.status) {
          case 200:
            return [];
            break;

          default:
            return [];
            break;
        }
      })
      .catch(error => {
        window.alert('connection failed');
        return {};
      });

    return data;
  },
};

export default questionApi;
