import {Form, Select} from "antd";
import {useRouter} from "next/router";
import {Formik} from 'formik';

export default function StadiumRecherche(props) {
    const route = useRouter()
    // const onSearchFinish = (values) => {
    //     route.push('/client/stadium/search?isCovered=' + values.isCovered + '&&ville=' + values.ville + '&&capacity=' + values.capacity)
    //     console.log('Success:', values);
    // };

    return (
        <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="bg-white shadow" style={{padding: '35px'}}>
                    <Formik
                        initialValues={{ville:'',capacity:'',isCovered:''}}
                        onSubmit={(values, {setSubmitting}) => {
                            route.push('/client/stadium/search?isCovered=' + values.isCovered + '&&ville=' + values.ville + '&&capacity=' + values.capacity)
                            console.log('Success:', values);
                        }}>
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit} className="row g-2">
                                <div className="col-md-10">
                                    <div className="row g-2">
                                        <div className="col-md-4">
                                            <select className="form-select" name="ville" onChange={handleChange}>
                                                <option value="">Select your city</option>
                                                {props.villes?.map((ville, index) =>
                                                    <option value={ville.id}>{ville.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-select" name="capacity" onChange={handleChange}>
                                                <option value="">Select Stadium Capacity</option>
                                                <option value="8">8</option>
                                                <option value="10">10</option>
                                                <option value="12">12</option>
                                                <option value="14">14</option>
                                                <option value="16">16</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-select" name="isCovered" onChange={handleChange}>
                                                <option value="">Is Stadium Indoor</option>
                                                <option value="1">Indoor</option>
                                                <option value="0">Outdoor</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary w-100" type="submit">Search</button>
                                </div>

                            </form>
                        )}
                    </Formik>
                    {/*<Form*/}
                    {/*    name="basic"*/}
                    {/*    onFinish={onSearchFinish}*/}
                    {/*    // onFinishFailed={onFinishFailed}*/}
                    {/*    autoComplete="off"*/}
                    {/*>*/}
                    {/*    <div className="row g-2">*/}

                    {/*        <div className="col-md-10">*/}
                    {/*            <div className="row g-2">*/}
                    {/*                <Form.Item*/}
                    {/*                    className="col-md-4"*/}
                    {/*                    name="isCovered">*/}
                    {/*                    <Select*/}
                    {/*                        // className="form-select"*/}
                    {/*                        showSearch*/}
                    {/*                        placeholder="Is Stadium Indoor"*/}
                    {/*                        filterOption={(input, option) =>*/}
                    {/*                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            width: '100%',*/}
                    {/*                        }}*/}
                    {/*                        defaultValue=''*/}

                    {/*                        options={[*/}
                    {/*                            {*/}
                    {/*                                value: '',*/}
                    {/*                                label: 'Is Stadium Indoor',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: 1,*/}
                    {/*                                label: 'Indoor',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: 0,*/}
                    {/*                                label: 'Outdoor',*/}
                    {/*                            }*/}

                    {/*                        ]}*/}
                    {/*                    />*/}
                    {/*                </Form.Item>*/}

                    {/*                <Form.Item*/}
                    {/*                    className="col-md-4"*/}
                    {/*                    name="ville">*/}

                    {/*                    <Select*/}
                    {/*                        // className="form-select"*/}
                    {/*                        showSearch*/}
                    {/*                        // placeholder="Select a City"*/}
                    {/*                        filterOption={(input, option) =>*/}
                    {/*                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            width: '100%',*/}
                    {/*                        }}*/}
                    {/*                        defaultValue=''*/}

                    {/*                        // options={ props.villes?.map((ville, index) =>*/}
                    {/*                        //     (*/}
                    {/*                        //         {*/}
                    {/*                        //             value: ville.id,*/}
                    {/*                        //             label: ville.name,*/}
                    {/*                        //         }*/}
                    {/*                        //     )*/}
                    {/*                        // )}*/}
                    {/*                    >*/}
                    {/*                        <Select.Option value="">Select a City </Select.Option>*/}
                    {/*                        {props.villes?.map((ville, index) =>*/}

                    {/*                            <Select.Option value={ville.id}>{ville.name}</Select.Option>*/}
                    {/*                        )}*/}
                    {/*                    </Select>*/}
                    {/*                    /!*{props.villes?.map(ville =>*!/*/}
                    {/*                    /!*    <option value={ville.id}>{ville.name}</option>*!/*/}
                    {/*                    /!*)}*!/*/}
                    {/*                    /!*</Select>*!/*/}
                    {/*                </Form.Item>*/}
                    {/*                <Form.Item*/}
                    {/*                    className="col-md-4"*/}
                    {/*                    name="capacity">*/}
                    {/*                    <Select*/}
                    {/*                        // className="form-select"*/}
                    {/*                        showSearch*/}
                    {/*                        placeholder="Select Stadium Capacity"*/}
                    {/*                        filterOption={(input, option) =>*/}
                    {/*                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            width: '100%',*/}
                    {/*                        }}*/}
                    {/*                        defaultValue=''*/}

                    {/*                        options={[*/}
                    {/*                            {*/}
                    {/*                                value: '',*/}
                    {/*                                label: 'Select Stadium Capacity',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '8',*/}
                    {/*                                label: '8',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '10',*/}
                    {/*                                label: '10',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '12',*/}
                    {/*                                label: '12',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '14',*/}
                    {/*                                label: '14',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '16',*/}
                    {/*                                label: '16',*/}
                    {/*                            },*/}
                    {/*                            {*/}
                    {/*                                value: '18',*/}
                    {/*                                label: '18',*/}
                    {/*                            },*/}

                    {/*                        ]}*/}
                    {/*                    />*/}
                    {/*                </Form.Item>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-2">*/}
                    {/*            <button className="btn btn-primary w-100">Search</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Form>*/}
                </div>
            </div>
        </div>

    )
}