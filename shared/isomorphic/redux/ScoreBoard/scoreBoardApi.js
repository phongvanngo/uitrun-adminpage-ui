import axiosClient from '../../../../packages/isomorphic/src/Api/AxiosClient';
import queryString from 'query-string';
import notification from '@iso/components/Notification';
import scoreBoardAction from './actions';
import fakeData from './fakeData';

function solveError(mess, dispatch) {
  if (window.confirm(mess + ', reload ?')) {
    dispatch(scoreBoardAction.fetchScoreBoard());
  }
}

const scoreBoard = {
  getScoreBoard: async (_params, dispatch) => {
    const url = '/board';
    const params = queryString.stringify(_params);
    console.log(fakeData);
    const userList = fakeData;
    // const userList = await axiosClient
    //   .get(url + "?" + params)
    //   .then((response) => {
    //     switch (response.status) {
    //       case 200:
    //         notification("success", "Get user list successfully");
    //         return response.data;
    //         // return null;
    //         break;

    //       default:
    //         solveError(response.status, dispatch);
    //         return [];
    //         break;
    //     }
    //   })
    //   .catch((error) => {
    //     solveError("connection failed", dispatch);
    //     return [];
    //   });
    return userList;
  },
};

export default scoreBoard;
