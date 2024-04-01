import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer1() {
    return (
        <>
        <div style={{margin:'0 -8vw'}}>

        <p style={{border:'2px solid black'}}/>
        <div style={{}}>
            <footer className="  my-5  ">
                <div className="d-flex  align-items-center justify-content-beteen gap-5">
                    <div className="">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                            <h1 style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}>PHYSIO</h1>
                        </a>
                        <p className="text-muted">© 2021 physio</p>
                    </div>
                    <div className=" ">
                        <h5 style={{ fontWeight: 'bold', color: 'gray' }}>About Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>

                        </ul>
                    </div>
                    <div className="">
                        <h5 style={{ fontWeight: 'bold', color: 'gray' }}>NO SPECIALITIES</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><MdOutlineMail />help@physio.in</a></li>
                        </ul>
                    </div>
                    <div>

                        <h5 style={{ fontWeight: 'bold', color: 'gray' }}>FOLLOW US</h5>
                        <div className='social_media d-flex justify-content-center gap-3' style={{ padding: '0px' }}>
                            <div>
                                <FaFacebookF />
                            </div>
                            <div>
                                <FaTwitter />
                            </div>
                            <div>
                                <FiInstagram />
                            </div>
                            <div>
                                <FaLinkedinIn />
                            </div>
                            <div>
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
        
                </footer >
        <hr />
                    Terms and conditions | Privacy

        </div >
        </div>
        </>
    )
}

export default Footer1
