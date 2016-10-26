import { CLICK_ON_HELLOWORLD } from './constants';

export const helloworldClick = (message) => ({
  type: CLICK_ON_HELLOWORLD,
  payloads: message
});
