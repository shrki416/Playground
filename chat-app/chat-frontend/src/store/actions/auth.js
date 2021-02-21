export const LOGIN = "LOGIN";
import AuthService from "../../services/authService";

export const login = (params) => (dispach) => {
  return AuthService.login({ email, password })
    .then((data) => {
      dispach({ type: LOGIN, payload: data });
    })
    .catch((error) => console.log(error));
};
