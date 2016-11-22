import { CLICK_ON_HELLOWORLD, RESPONSE_PROCESSING } from './constants';

export const helloworldClick = (message) => ({
  type: CLICK_ON_HELLOWORLD,
  payloads: message
});

export const responseProcessing = (data) => {
  return  {
    type: RESPONSE_PROCESSING,
    payloads: data
  }
};

export const fetchModel = ()  => (dispatch) => {
  let currentUrl = window.location.pathname;
  return fetch(currentUrl, {
    method: 'GET',
    headers: {
      Accept: "application/json; charset=utf-8"
    }
  })
    .then(res => {
      if(res.status >= 200 && res.status < 300){
        return res.json();
      }
      else {
        return `${res.status} ${res.statusText}`
      }

    })
    .then(json => dispatch(responseProcessing(json))
  );
};
