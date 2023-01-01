import {Image} from 'antd';
import Link from "next/link";
import Cookies from "js-cookie";
import UseUserInfo from "../../../hooks/useUserInfo";
import UseLogout from "../../../hooks/useLogout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function HeaderClient() {
    const route = useRouter()
    const [element,setElement]=useState(<Link href="/client/auth/login"
                                              className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Login<i
        className="fa fa-arrow-right ms-3"/></Link>)

    let user = UseUserInfo('client')
    console.log('header')
    console.log(user?.fullName)

    function IsLoged() {
        if (user) {
            return (<Link href="/"
                             className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
                             data-bs-toggle="dropdown">Profile</Link>)
        } else {
            return (<Link href="/client/auth/login"
                  className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Login<i
                className="fa fa-arrow-right ms-3"/></Link>)
        }
    }

    useEffect(() => {
        if (user) {
            setElement(<Link href="/"
                            className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
                            data-bs-toggle="dropdown">{user?.fullName}</Link>)
        }

    },[user])


    function handleLogout() {
        console.log("logout function")
        UseLogout('client')
        route.push('/client/auth/login')
    }

    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html"
                       className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 className="m-0 text-primary text-uppercase">My Stadiums</h1>
                    </a>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"/>
                                <p className="mb-0">info@stadiums.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"/>
                                <p className="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href><i className="fab fa-facebook-f"/></a>
                                <a className="me-3" href><i className="fab fa-twitter"/></a>
                                <a className="me-3" href><i className="fab fa-linkedin-in"/></a>
                                <a className="me-3" href><i className="fab fa-instagram"/></a>
                                <a className href><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link href="/" className="nav-item nav-link active">Home</Link>
                                <Link href="about.html" className="nav-item nav-link">About</Link>
                                <Link href="service.html" className="nav-item nav-link">Services</Link>
                                <Link href="/client/stadium" className="nav-item nav-link">Stadiums</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="booking.html" className="dropdown-item">Booking</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                                <a href="#" className="nav-item nav-link"
                                   onClick={handleLogout}>Logout
                                    <i className="fa fa-arrow-right ms-3"/>
                                </a>

                            </div>

                            {element}
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}