import AxiosApi from "./AxiosApi";

const LOGIN_URI = "api/v1/auth/login";
const REGISTER_URI = "api/v1/auth/register";
const REFRESH_URI = "api/v1/auth/refresh";


const AuthService = {

    login: async (email, password) => {
        const requestBody = JSON.stringify({
            email: email,
            password: password
        });

        return AxiosApi.post(LOGIN_URI, requestBody)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    return Promise.reject("Invalid username or password")
                }
            })
            .then((data) => {
                localStorage.setItem("access_token", data.accessToken);
                localStorage.setItem("refresh_token", data.refreshToken);
                localStorage.setItem("email", email);
                return data;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },
    register: async (email, password) => {
        const requestBody = JSON.stringify({
            email: email,
            password: password
        });
        return AxiosApi.post(REGISTER_URI, requestBody)
            .then((response) => {
                return response.status === 200;
            })

    },
    refresh: async () => {
        const refreshToken = localStorage.getItem("refresh_token");

        if (refreshToken === null) {
            return Promise.reject("No refresh token");
        }

        const requestBody = JSON.stringify({
            refreshToken: refreshToken
        });

        return AxiosApi.post(REFRESH_URI, requestBody)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    return Promise.reject("Failed to ");
                }
            })
            .then((data) => {
                localStorage.setItem("access_token", data.accessToken);
                return data
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            })
    },
    getCurrentAccessToken: () => {
        return localStorage.getItem("access_token");
    },
    isLoggedIn: () => {
        return localStorage.getItem("access_token") !== null;
    },
    logout: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("email");
    }

}

export default AuthService;