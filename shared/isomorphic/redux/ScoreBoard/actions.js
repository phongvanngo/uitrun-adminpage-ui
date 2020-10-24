// import { contacts } from "./reducer";
import scoreBoardApi from './scoreBoardApi';

const userAction = {
  FETCH_SCORE_BOARD: 'FETCH_SCOREBOARD',
  BOARD_UNLOADING: 'UNLOADING',
  BOARD_LOADING: 'LOADING',

  fetchScoreBoard: () => {
    return async dispatch => {
      const params = { pageSize: 1000, page: 0 };
      dispatch({ type: userAction.BOARD_LOADING });
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
