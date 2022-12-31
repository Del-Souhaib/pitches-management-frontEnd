import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';

import Head from "next/head";
import HeaderClient from "../../../components/parts/clients/header";
import FooterClient from "../../../components/parts/clients/footer";
import {useState} from "react";
import {ExclamationCircleFilled} from "@ant-design/icons";
import {Button, Modal, Space} from 'antd';
import moment from 'moment';
import Link from "next/link";
import JsFiles from "../../../components/parts/packages/jsFiles";
import StadiumsList from "../../../components/parts/clients/stadiums";
import StadiumRecherche from "../../../components/parts/clients/search";

const {confirm} = Modal;

export default function SpecificPitch(props) {
    console.log(props)
    return (
        <>
            <Head>
                <title>Stadiums</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <HeaderClient/>
            <main className="mb-5">
                <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(img/carousel-1.jpg)'}}>
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Stadiums</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Stadiums</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <StadiumRecherche villes={props.villes}/>

                <StadiumsList pitches={props.pitchs}/>
            </main>
            {/*<FooterClient/>*/}

            <JsFiles/>

        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const ville=context.query.ville  ?  context.query.ville :null
    const isCovered=context.query.isCovered ? context.query.isCovered : null
    const capacity=context.query.capacity  ? context.query.capacity :null

    const res = await fetch("http://localhost:8080/api/pitches/search?"+(ville!=null? "ville="+ville: "" )+(isCovered !=null ?"&&isCovered="+isCovered : '')+(capacity!=null ?"&&capacity="+capacity: ''))
    const pitchs = await res.json()


    const res2 = await fetch(`http://localhost:8080/api/villes`)
    const villes = await res2.json()

    // Pass data to the page via props
    return {props: {pitchs,villes,ville,isCovered,capacity}}
}
