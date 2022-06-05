const initialState = {
  appointBook: false,
  name: null,
};

const appointment = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_APPOINTMENT":
      return {
        appointBook: true,
        name: action.payload,
      };
    case "CANCEL_APPOINTMENT":
      return initialState;
    default:
      return state;
  }
};

export default appointment;
