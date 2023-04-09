import axios from "axios";

const LogicAction = (inputData) => {
  return (dispatch) => {
    try {
      axios
        .post("https://reqres.in/api/login", {
          email: inputData.email,
          password: inputData.password,
        })
        .then((res) => {
          dispatch({ type: "loginsuccess", payload: res.data.token });
          console.log(res.data.token);
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export { LogicAction };
