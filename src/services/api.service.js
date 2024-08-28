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
const Deleteapi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND)
}

const Updateuserimage = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        avatar: avatar,
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data);
}
const handleupdatefile = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file)
    return axios.post(URL_BACKEND, bodyFormData, config)
}
export {
    creatApi, uppDateapi, fecthAlluserapi, Deleteapi, handleupdatefile, Updateuserimage
}
