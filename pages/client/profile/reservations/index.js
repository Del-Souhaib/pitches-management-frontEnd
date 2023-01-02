import Head from "next/head";
import HeaderClient from "../../../../components/parts/clients/header";
import {Formik} from "formik";
import JsFiles from "../../../../components/parts/packages/jsFiles";
import {useRef, useState} from "react";
import {Button, Image, Input, Space, Table} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import Cookies from "js-cookie";
import Link from "next/link";


export default function ClientReservations(props) {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    console.log("reser")

    console.log(props)
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
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
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
                        icon={<SearchOutlined/>}
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
        <>
            <Head>
                <title>Reservations</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <HeaderClient/>
            <main>
                <div className="container-fluid page-header mb-5 p-0"
                     style={{backgroundImage: 'url(img/carousel-1.jpg)'}}>
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Reservations</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Profile</li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Reservations
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Profile</h6>
                            <h1 className="mb-5">Your  <span
                                className="text-primary text-uppercase">Reservations</span>
                            </h1>
                        </div>
                        <div>
                            <Table columns={columns} dataSource={props.reservations}/>
                        </div>
                    </div>
                </div>
            </main>
            {/*<FooterClient/>*/}
            <JsFiles/>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    let user = JSON.parse(context.req.cookies['client'])

    const res = await fetch('http://localhost:8080/api/reservations/byClient/' + user.userId)
    const reservations = await res.json()


    // Pass data to the page via props
    return {props: {reservations, user}}
}
