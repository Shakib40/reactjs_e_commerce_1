export const OAUTH_REQUESTED = 'oauth/OAUTH_REQUESTED';
export const OAUTH_SUCCESS = 'oauth/OAUTH_SUCCESS';
export const OAUTH_FAILURE = 'oauth/OAUTH_FAILURE';

const initialState = {
  isLoading: false,
  hasError: false,
  userdata: JSON.parse(window.localStorage.getItem('userData')) || {},
  isUserLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OAUTH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case OAUTH_SUCCESS: {
      window.localStorage.setItem('userData', JSON.stringify(action.result));
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userdata: JSON.parse(window.localStorage.getItem('userData')),
        isUserLogin: true,
      };
    }
    case OAUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
      };
    }
    default:
      return state;
  }
};

export const LOGGEDIN = (data) => {
  return {
    types: [OAUTH_REQUESTED, OAUTH_SUCCESS, OAUTH_FAILURE],
    promise: client => client.post('login', {
      data,
    }),
  };
};
