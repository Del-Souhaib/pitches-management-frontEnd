import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import SideMenue from "../../components/parts/admin/sideMenue";
import {Select} from "antd";
import {useState} from "react";


export default function AdminDashboard(props) {
    const [events,setEvents]=useState()

    console.log(props)
    function handleDateClick(e) {
        const resDate = moment(e.date).format('yyyy-M-DD HH:mm:ss')
        console.log(resDate)

        fetch('http://localhost:8080/api/reservations/byDate/' + resDate).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data) {
                    showError()
                } else {
                    showConfirm(resDate)

                }
                // data =true?  showConfirm(resDate) : showError
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    function changePitch(e){
        console.log(e)
    }
    return (
        <>
            <div className="d-flex">

                <SideMenue/>
                <div>
                    {/*<Select onChange={changePitch}>*/}
                    {/*    {props.data.map(pitch=>*/}
                    {/*        <Select.Option value={pitch.id}>{pitch.name}</Select.Option>*/}

                    {/*    )}*/}
                    {/*</Select>*/}
                </div>


                <div className="container mt-5">
                    <h3 className="text-center mb-5">Reservations</h3>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                        // events={events}
                        initialView='timeGridWeek'
                        height="80vh"
                        // visibleRange= {
                        //     start: '2020-03-22',
                        //     end: '2020-03-25'
                        // }
                        dateClick={handleDateClick}
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
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
