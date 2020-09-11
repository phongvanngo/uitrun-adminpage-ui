import axiosClient from '../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';
import notification from '@iso/components/Notification';
import scoreBoardAction from './actions';
import fakeData from './fakeData';

function solveError(mess, dispatch) {
  //console.log(mess);
  if (window.confirm(mess + ', reload ?')) {
    dispatch(scoreBoardAction.fetchScoreBoard());
  }
}

const scoreBoard = {
  getScoreBoard: async (_params, dispatch) => {
    const url = '/score';
    const params = queryString.stringify(_params);
    // //console.log(fakeData);
    // const userList = fakeData;
    const userList = await axiosClient
      .get(url + '?' + params)
      .then(response => {
        switch (response.status) {
          case 200:
            notification('success', 'Get score board successfully');
            return response.data;
            break;

          case 500:
            notification('warning', 'No information');
            return [];
            break;

          default:
            solveError(response.status, dispatch);
            return [];
            break;
        }
      })
      .catch(error => {
        const mess = 'connection failed';
        solveError(mess, dispatch);
        return [];
      });
    return userList;
  },
};

export default scoreBoard;
