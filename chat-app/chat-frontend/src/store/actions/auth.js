import AuthService from "../../services/authService";
export const LOGIN = "LOGIN";

export const login = (params) => (dispach) => {
  return AuthService.login(params)
    .then((data) => {
      dispach({ type: LOGIN, payload: data });
    })
    .catch((error) => console.log(error));
};
