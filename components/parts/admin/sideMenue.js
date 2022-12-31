import {Menu} from "antd";
import {useState} from "react";
import {
    AppstoreOutlined,
    AuditOutlined,
    MailOutlined,
    MessageOutlined,
    PieChartOutlined,
    SettingOutlined, TableOutlined, TeamOutlined, UsergroupAddOutlined
} from "@ant-design/icons";
import Link from "next/link";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link href="/admin">Dashboard</Link>, '1',<PieChartOutlined />, ),
    getItem('User', 'sub1', <TeamOutlined />, [
        getItem(<Link href="/admin/users">List</Link>, '2'),
        getItem(<Link href="/admin/users/add">Add</Link>, '3'),
    ]),
    getItem('Pitches', 'sub2', <TableOutlined />, [
        getItem(<Link href="/admin/pitches">List</Link>, '4'),
        getItem(<Link href="/admin/pitches/add">Add</Link>, '5'),
    ]),
    getItem('Reservations', '6', <AuditOutlined />),

    getItem('Messages', '7', <MessageOutlined />),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default function SideMenue(){
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
        />
    )
}