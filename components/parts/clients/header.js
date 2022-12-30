
import { Image } from 'antd';


export default function HeaderClient(){

    return (
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <a href="./index.html">
                        <Image src="img/logo.png" alt="" />
                    </a>
                </div>
                <div className="nav-menu">
                    <nav className="mainmenu mobile-menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./about-us.html">About</a></li>
                            <li><a href="./schedule.html">Schedule</a></li>
                            <li><a href="./gallery.html">Portfolio</a></li>
                            <li><a href="./blog.html">Blog</a>
                                <ul className="dropdown">
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div className="nav-right search-switch">
                        <i className="ti-search" />
                    </div>
                </div>
                <div id="mobile-menu-wrap" />
            </div>
        </header>

    )
}