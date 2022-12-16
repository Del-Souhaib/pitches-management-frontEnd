import SideMenue from "../parts/sideMenue";
import {Button, Checkbox, Form, Input, Radio, Select} from "antd";
import {useState} from "react";
import {useRouter} from "next/router";

const {Option} = Select;


export default function addUser(props) {


    const router = useRouter();

    const onFinish = (values) => {
        fetch('http://localhost:8080/api/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((data) => {
                router.push("/admin/users")
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="d-flex">

                <SideMenue/>
                <div className="container mt-5">
                    <h3 className="text-center mb-5">Add User</h3>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="row">
                            <div className="col-6">
                                <Form.Item
                                    label="First name"
                                    name="first_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your First name!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Last Name"
                                    name="last_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Last Name!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Phone!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Location"
                                    name="location"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Location!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Role"
                                    name="role_id"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Role!',
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Select a option and change input text above"
                                        allowClear>
                                        <Option value="Admin">Admin</Option>
                                        <Option value="Player">Player</Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <div className="col-6">
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password/>
                                </Form.Item>
                            </div>


                        </div>
                        <Form.Item wrapperCol={{span: 1, offset: 6}}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>


                    </Form>


                </div>
            </div>
        </>
    )

}