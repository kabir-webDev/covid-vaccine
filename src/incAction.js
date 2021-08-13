export const INCRE = (data) => (dispatch) => {
  return dispatch({ type: "INC", data: data });
};

export const DECRE = (data) => (dispatch) => {
  return dispatch({ type: "DEC", dec: data });
};
