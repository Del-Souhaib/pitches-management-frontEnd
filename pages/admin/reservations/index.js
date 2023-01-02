import {Button, Input, Space, Table} from "antd";
import {useRef, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import SideMenue from "../../../components/parts/admin/sideMenue";
import Link from "next/link";


const Reservations=(props)=>{

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Date Match',
            dataIndex: 'dateReservation',
            key: 'dateReservation',
            sorter: (a, b) => a.dateReservation.length - b.dateReservation.length,
            ...getColumnSearchProps('dateReservation'),
        },
        {
            title: 'Stadium',
            dataIndex: 'stadium',
            key: 'stadium',
            render: (_, record) => (
                <Link href={'/client/stadium/' + record.pitch}>Show</Link>
            ),

        },
        {
            title: 'PAYMENTS',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Date de reservation',
            dataIndex: 'created_at',
            key: 'created_at',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.location.length - b.location.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Link href={'client/profile/reservations/'+record.id}>Show</Link>
            ),

        },
    ];

    return (
        <div className="d-flex">

            <SideMenue/>
            <div className="container mt-5">
                <h3 className="text-center mb-5">List reservations</h3>


                <Table columns={columns} dataSource={props.reservations} />

            </div>
        </div>
    );

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/api/reservations`)
    const reservations = await res.json()

    // Pass data to the page via props
    return { props: { reservations } }
}

export default Users
