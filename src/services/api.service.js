import axios from "./axios.custommine";
const creatApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}
const uppDateapi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        _id: _id,
        phone: phone
    }
    return axios.put(URL_BACKEND, data);
}
const fecthAlluserapi = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}

export {
    creatApi, uppDateapi, fecthAlluserapi
}
