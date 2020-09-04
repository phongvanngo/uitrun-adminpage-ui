// import { contacts } from "./reducer";
import scoreBoardApi from './scoreBoardApi';

const userAction = {
  FETCH_SCORE_BOARD: 'FETCH_SCOREBOARD',

  fetchScoreBoard: () => {
    return async dispatch => {
      const params = { pageSize: 500, page: 0 };
      const scoreBoard = await scoreBoardApi.getScoreBoard(params, dispatch);
      const scoreBoardWithKey = scoreBoard
        ? scoreBoard.map((user, index) => ({
            ...user,
            key: index + 1,
          }))
        : [];
      dispatch({
        type: userAction.FETCH_SCORE_BOARD,
        scoreBoard: scoreBoardWithKey,
      });
    };
  },
};
export default userAction;
