import {Button, Dropdown, Input, Space, Table} from "antd";
import {useRef, useState} from "react";
import {DownOutlined, SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import SideMenue from "../parts/sideMenue";
import Link from "next/link";
import { Image } from 'antd';


const Pitches=(props)=>{
console.log(props)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            sorter: (a, b) => a.description.length - b.description.length,
            ...getColumnSearchProps('description'),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            ...getColumnSearchProps('type'),
            sorter: (a, b) => a.type.length - b.type.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
            ...getColumnSearchProps('capacity'),
            sorter: (a, b) => a.capacity.length - b.capacity.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Covered',
            dataIndex: 'covered',
            key: 'covered',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.covered.length - b.covered.length,
            sortDirections: ['descend', 'ascend'],
            render: (_, record) => (
                <span>{record.covered?'Yes' : 'No'}</span>
            ),

        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            ...getColumnSearchProps('price'),
            sorter: (a, b) => a.price.length - b.price.length,
            sortDirections: ['descend', 'ascend'],
            render: (_, record) => (
                <span>{record.price} Dh</span>
            ),

        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            ...getColumnSearchProps('location'),
            sorter: (a, b) => a.location.length - b.location.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Images',
            key: 'image',
            render: (_, record) => (
                <Image
                    width={50}
                    height={60}
                    src="https://thumbs.dreamstime.com/b/stade-de-football-13647873.jpg"
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Dropdown
                    menu={
                        [
                            {
                                label: <Link href={"/admin/pitches/"+record.id}>Edit</Link>,
                                key: '0',
                            },
                            {
                                label: <a href="https://www.aliyun.com">Delete</a>,
                                key: '1',
                            },
                        ]
                    }
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Action
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            ),

        },
    ];

    return (
        <div className="d-flex">

            <SideMenue/>
            <div className="container mt-5">
                <h3 className="text-center mb-5">List Pitches</h3>


                <Table columns={columns} dataSource={props.data}   pagination={tableParams.pagination}
                />

            </div>
        </div>
    );

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/api/pitches`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Pitches
