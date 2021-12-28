export const bookAppointment = (name) => {
  return {
    type: "BOOK_APPOINTMENT",
    payload: name,
  };
};
export const cancelAppointment = () => {
  return {
    type: "CANCEL_APPOINTMENT",
  };
};
