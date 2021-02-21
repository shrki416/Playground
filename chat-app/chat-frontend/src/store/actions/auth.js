import AuthService from "../../services/authService";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (params, history) => (dispach) => {
  return AuthService.login(params)
    .then((data) => {
      dispach({ type: LOGIN, payload: data });
      history.push("/");
    })
    .catch((error) => console.log(error));
};

export const register = (params, history) => (dispach) => {
  return AuthService.register(params)
    .then((data) => {
      dispach({ type: REGISTER, payload: data });
      history.push("/");
    })
    .catch((error) => console.log(error));
};
