import { CLICK_ON_HELLOWORLD } from '../actions/constants';

const main = (state = {
  message: null
}, action) => {
  switch (action.type) {
    case CLICK_ON_HELLOWORLD:
      return {
        ...state,
        message: action.payloads
      };
    default:
      return state
  }
};

export default main;
