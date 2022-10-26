import { FETCH_SIGNUSER, POST_SIGNUSER, POST_LOGUSER } from '../Action/Action';

const intialState = {
  user: []
};
export const Reducer = (state = intialState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case FETCH_SIGNUSER: {
      return { ...state, user: action.payload };
    }
    case POST_SIGNUSER:
      return { ...state, user: action.payload };
    case POST_LOGUSER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
