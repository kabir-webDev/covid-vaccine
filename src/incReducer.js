const initialState = {
  data: [{ name: "Kabir" }],
};

const incReducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      data: action.data,
    };
  } else if (action.type === "DEC") {
    return {
      ...state,
      count: state.count - action.dec,
    };
  }

  return state;
};

export default incReducer;
