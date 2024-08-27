import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Popconfirm, notification } from 'antd';
import UpdateUserModel from './uppdate.user';
import { useState } from "react";
import Viewuser from './view.user';
import { Deleteapi } from '../../services/api.service';

const UserTable = (props) => {
    const { datauser, loaduser } = props
    const [Isdataupdateopen, setIsdataupdateopen] = useState(false)
    const [dataupdate, setdataupdate] = useState(null)

    const [dataview, setdataview] = useState(null)
    const [viewopen, setviewopen] = useState(false)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
            render: (_, record) => <a
                href="#"
                onClick={() => {
                    setdataview(record)
                    setviewopen(true)
                }}
            >{record.fullName}
            </a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setdataupdate(record)
                            setIsdataupdateopen(true)
                        }}
                    />
                    <Popconfirm
                        title="Delete the task"
                        description="Ban muon xoa nguoi dung nay"
                        onConfirm={() => handledelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },

    ];
    const handledelete = async (id) => {
        const res = await Deleteapi(id);
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Xoa nguoi dung thanh cong thanh cong"

            })
            await loaduser();
        } else {
            notification.error({
                message: "Not Delete user",
                description: JSON.stringify(res.message)
            })
        }

    }
    return (
        <>
            <Table columns={columns} dataSource={datauser} rowKey={"_id"} />
            <UpdateUserModel
                Isdataupdateopen={Isdataupdateopen}
                setIsdataupdateopen={setIsdataupdateopen}
                setdataupdate={setdataupdate}
                dataupdate={dataupdate}
                loaduser={loaduser}
            />
            <Viewuser
                dataview={dataview}
                setdataview={setdataview}
                viewopen={viewopen}
                setviewopen={setviewopen}
            />
        </>
    )

}
export default UserTable;