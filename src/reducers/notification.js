export const SET_NOTIFICATION = 'notification/SET_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'notification/CLOSE_NOTIFICATION';

const initialValues = {
  isOpen: false,
  message: '',
  customClass: ''
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        type: action.payload.type
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export const setNotification = (data) => {
  return (dispatch) => {
    dispatch(
      {
        type: SET_NOTIFICATION,
        payload: data
      }
    );
    setTimeout(() => dispatch({
      type: CLOSE_NOTIFICATION
    }), 5000);
  };
};
