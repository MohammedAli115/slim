import logo from '../images/logo-removebg-preview.png';
import React from 'react';

function Navbar() {
    return (
        <div dir="rtl">
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-0"  style={{boxShadow: "0 0 5px #20b1e1"}}>
                <div className="container d-flex flex-row-reverse align-items-center justify-content-between">
                    <a className="navbar-brand" href="#f">
                        <img
                            src={logo}
                            alt="Logo"
                            width="50"
                            height="50"
                        />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#home" style={{color : "#0078d7"}}>الرئيسيه</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#about_us" style={{color : "#00ACE7"}}>من نحن</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#services" style={{color : "#00ACE7"}}>الخدمات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#d" style={{color : "#00ACE7"}}>الفريق</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#d" style={{color : "#00ACE7"}}>أنشطه</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#d" style={{color : "#00ACE7"}}>الأراء</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="#d" style={{color : "#00ACE7"}}>اتصل بنا</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
