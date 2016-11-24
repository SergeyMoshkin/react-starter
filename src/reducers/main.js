import { CLICK_ON_HELLOWORLD, RESPONSE_PROCESSING } from '../actions/constants';

const initState = {
  message: null,
  response: null,
  items: ["", "page", "table", "row", "not-found"]
};

const main = (state = initState, action) => {
  switch (action.type) {
    case CLICK_ON_HELLOWORLD:
      return {
        ...state,
        message: action.payloads
      };
    case RESPONSE_PROCESSING:
      return {
        ...state,
        response: action.payloads
      };
    default:
      return state
  }
};

export default main;
