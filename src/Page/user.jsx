import UserTable from "../components/user/user.table";
import UserForm from "../components/user/userform";
import { useEffect, useState } from 'react';
import { fecthAlluserapi } from '../services/api.service';
const UserPage = () => {
    const [datauser, setdatauser] = useState([])

    useEffect(() => {
        loaduser();
    }, [])
    const loaduser = async () => {
        const res = await fecthAlluserapi()
        setdatauser(res.data)
    }
    return (
        <div>
            <UserForm loaduser={loaduser} />
            <UserTable datauser={datauser}
                loaduser={loaduser}
            />
        </div>

    )
}
export default UserPage;