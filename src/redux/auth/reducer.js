//intital value;

const initial = {
  loading: false,
  isAuth: false,
  token: "",
};

const authReducer = (state = { ...initial }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "loginsuccess":
      return { ...state, token: payload, loading: true, isAuth: true };
    default:
      return state;
  }
};

export { authReducer };
