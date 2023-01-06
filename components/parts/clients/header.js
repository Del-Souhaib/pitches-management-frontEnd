import {Image} from 'antd';
import Link from "next/link";
import Cookies from "js-cookie";
import UseUserInfo from "../../../hooks/useUserInfo";
import UseLogout from "../../../hooks/useLogout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function HeaderClient() {
    const route = useRouter()
    const [isLogged, setIsLogged] = useState(false)

    let user = UseUserInfo('client')


    useEffect(() => {
        if (user) {
            setIsLogged(true)
        }

    }, [])


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
                            <h1 className="m-0 text-primary text-uppercase">My Stadiums</h1>
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
                                <a href="contact.html" className="nav-item nav-link">Contact</a>

                                {isLogged ?
                                    <div className="dropdown">
                                        <a className="dropdown-toggle   d-block d-lg-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user?.fullName}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="/client/profile">Profile</Link></li>
                                            <li><Link className="dropdown-item" href="/client/profile/reservations">Reservations</Link></li>
                                            <li><a className="dropdown-item" onClick={handleLogout} href="#">LogOut</a></li>
                                        </ul>
                                    </div>

                                    :
                                    <Link href="/client/auth/login"
                                          className="rounded-0 py-4 px-md-5 d-block d-lg-none">Login<i
                                        className="fa fa-arrow-right ms-3"/></Link>
                                }

                            </div>

                            {isLogged ?
                                <div className="dropdown">
                                    <button className="dropdown-toggle btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user?.fullName}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="/client/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" href="/client/profile/reservations">Reservations</Link></li>
                                        <li><a className="dropdown-item" onClick={handleLogout} href="#">LogOut</a></li>
                                    </ul>
                                </div>

                                :
                                <Link href="/client/auth/login"
                                      className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Login<i
                                    className="fa fa-arrow-right ms-3"/></Link>
                            }

                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}