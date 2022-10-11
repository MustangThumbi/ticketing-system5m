export const initialState = {
  user: null,
  agent: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_USER: "SET_AGENT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_AGENT":
      return {
        ...state,
        agent: action.agent,
      };
    default:
      return state;
  }
};
export default reducer;
