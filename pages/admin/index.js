import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import SideMenue from "../../components/parts/admin/sideMenue";
import {Select} from "antd";
import {useState} from "react";


export default function AdminDashboard(props) {
    const [events, setEvents] = useState([])

    const onChange = async (value) => {
        console.log(`selected ${value}`);
        const res2 = await fetch(`http://localhost:8080/api/reservations/byPitch/` + value)
        const reservations = await res2.json()
        setEvents(reservations.map(reservation =>
            (
                {
                    "id": reservation.id,
                    "title": "Résérved",
                    "date": reservation.dateReservation,
                    "display": 'background',
                    "backgroundColor": "#ce079c",
                    "color": "black"

                }
            )
        ))

    };
    console.log(props)
    return (
        <>
            <div className=" d-flex">

                <SideMenue/>
                <div>
                    {/*<Select onChange={changePitch}>*/}
                    {/*    {props.data.map(pitch=>*/}
                    {/*        <Select.Option value={pitch.id}>{pitch.name}</Select.Option>*/}

                    {/*    )}*/}
                    {/*</Select>*/}
                </div>


                <div className="container mt-5">
                    <h3 className="text-center mb-5">Dashboard</h3>
                    <div className="">
                        <label className="me-3 mb-4">Select a Stadium</label>
                        <Select style={{width: 200}}
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={props.pitches?.map(pitch => (
                                    {value: pitch.id, label: pitch.name}
                                ))}
                        />

                    </div>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                        events={events}
                        initialView='timeGridWeek'
                        height="100vh"
                        slotMinTime="06:00:00"
                        slotMaxTime="24:00:00"
                        slotDuration="01:00:00"
                    />
                </div>
            </div>
        </>

    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/api/pitches`)
    const pitches = await res.json()


    // Pass data to the page via props
    return {props: {pitches}}
}
