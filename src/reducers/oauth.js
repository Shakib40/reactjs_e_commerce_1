export const OAUTH_REQUESTED = 'oauth/OAUTH_REQUESTED';
export const OAUTH_SUCCESS = 'oauth/OAUTH_SUCCESS';
export const OAUTH_FAILURE = 'oauth/OAUTH_FAILURE';

export const SET_USERDATA = 'oauth/SET_USERDATA';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  userdata: JSON.parse(window.localStorage.getItem('userData')) || {},
  isUserLogin: false,
};

export default (state = initialState, action) => {
  console.log('initialState, action', action);
  switch (action.type) {
    case OAUTH_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case OAUTH_SUCCESS: {
      window.localStorage.setItem('userData', JSON.stringify(action.result));
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        userdata: JSON.parse(window.localStorage.getItem('userData')),
        isUserLogin: true,
      };
    }
    case OAUTH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
      };
    }
    case SET_USERDATA: {
      const user = JSON.parse(window.localStorage.getItem('userData'));
      user.userData.walletAmt = action.payload;
      window.localStorage.setItem('userData', JSON.stringify(user));
      return {
        ...state,
        userdata: JSON.parse(window.localStorage.getItem('userData')),
      };
    }
    default:
      return state;
  }
};

export const login = (data) => {
  return {
    types: [OAUTH_REQUESTED, OAUTH_SUCCESS, OAUTH_FAILURE],
    promise: client => client.post('login', {
      data,
    }),
  };
};

export const setUserdata = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_USERDATA,
      payload: data,
    });
  };
};
