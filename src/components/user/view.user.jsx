import { Drawer } from "antd";

const Viewuser = (props) => {
    const {
        dataview,
        setdataview,
        viewopen,
        setviewopen
    } = props
    return (
        <Drawer title="Basic Drawer"
            onClose={() => {
                setdataview(null)
                setviewopen(false)
            }}
            open={viewopen}>
            {dataview ? <>
                <p>Name:{dataview.fullName}</p>
                <p>ID:{dataview._id}</p>
                <p>Email:{dataview.email}</p>
                <p>Phone:{dataview.phone}</p>
            </>
                :
                <>
                    <p>Khong co du lieu</p>
                </>
            }
        </Drawer>
    )
}

export default Viewuser;