import scoreBoardAction from './actions';

const initState = {
  scoreBoard: [],
};

export default function scoreBoardReducer(state = initState, action) {
  switch (action.type) {
    case scoreBoardAction.FETCH_SCORE_BOARD:
      return {
        scoreBoard: action.scoreBoard,
      };

    default:
      return state;
  }
}

// export { contacts };
