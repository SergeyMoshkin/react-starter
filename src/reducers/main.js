import {CLICK_ON_HELLOWORLD, RESPONSE_PROCESSING, TOGGLE_DIALOG} from '../actions/constants';

const initState = {
  message: null,
  response: null,
  items: ["", "page", "table", "row", "not-found"],
  num: null,
  isDialogShown: false
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
    case TOGGLE_DIALOG:
      return {
        ...state,
        isDialogShown: action.isDialogShown,
        num: action.num
      };
      
    default:
      return state
  }
};

export default main;
