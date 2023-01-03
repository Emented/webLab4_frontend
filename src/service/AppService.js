import AuthService from "./AuthService";
import AxiosApi from "./AxiosApi";

const HITS_URI = "api/v1/hits";

const refreshHandler = (response, callback) => {
    if (response.status === 403) {
        return AuthService.refresh()
            .then(() => {
                    return callback();
                },
                () => {
                    AuthService.logout();
                })
    } else {
        return response;
    }
};

const AppService = {

    checkHit: async (hit) => {
        const requestBody = JSON.stringify(hit);
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.post(HITS_URI, requestBody, config)
            .then((response) => {
                return refreshHandler(response, () => {
                    return AppService.checkHit(hit);
                });
            });
    },
    getAllHits: async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.get(HITS_URI, config)
            .then((response) => {
                return refreshHandler(response, () => {
                    return AppService.getAllHits();
                });
            });
    },
    getAllHitsByR: async (radius) => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.get(`${HITS_URI}/${radius}`, config)
            .then((response) => {
                return refreshHandler(response, () => {
                    return AppService.getAllHitsByR(radius);
                });
            });
    },
    deleteAllHits: async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.delete(HITS_URI, config)
            .then((response) => {
                return refreshHandler(response, () => {
                    return AppService.deleteAllHits();
                });
            })
    }
};

export default AppService;