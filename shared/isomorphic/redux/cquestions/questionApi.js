import axiosClient from './../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';

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
            window.alert(response.status);
            return [];
            break;
        }
      })
      .catch(error => {
        window.alert('connection fail');
        console.log(error);
        return [];
      });
    return questionList;
  },

  get: id => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default questionApi;
