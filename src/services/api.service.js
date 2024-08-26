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
const uppDateapi = () => {

}

export {
    creatApi, uppDateapi
}
