import { Link, NavLink } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/user"}>User</Link>,
            key: 'user',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link to={"/product"}>Product</Link>,
            key: 'product',
            icon: <SettingOutlined />,
        },

    ];
    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}
export default Header;