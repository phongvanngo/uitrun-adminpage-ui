import scoreBoardAction from './actions';

const initState = {
  scoreBoard: [],
  loading: false,
};

export default function scoreBoardReducer(state = initState, action) {
  switch (action.type) {
    case scoreBoardAction.FETCH_SCORE_BOARD:
      return {
        scoreBoard: action.scoreBoard,
        loading: false,
      };
    case scoreBoardAction.BOARD_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

// export { contacts };
