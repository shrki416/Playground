import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((error) => {
        console.log("Auth Service Error", error);
        throw error;
      });
  },

  register: (data) => {},

  logout: () => {},
};

export default AuthService;
