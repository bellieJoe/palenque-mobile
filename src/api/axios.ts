
import axiosLib from "axios";

const axios = axiosLib.create({
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
    withXSRFToken : true,
});

export default axios;
