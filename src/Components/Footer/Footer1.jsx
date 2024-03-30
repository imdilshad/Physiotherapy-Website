import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer1() {
    return (
        <div>
            <div class="container">
                <footer class="row row-cols-5 py-5 my-5 border-top">
                    <div class="col">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                            <h1 style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}>PHYSIO</h1>
                        </a>
                        <p class="text-muted">© 2021 physio</p>
                    </div>

                    <div class="col">

                    </div>



                    <div class="col">
                        <h5 style={{fontWeight:'bold',color:'gray'}}>About Us</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQ</a></li>

                        </ul>
                    </div>
                    <div>

                    <div class="col">
                        <h5 style={{fontWeight:'bold',color:'gray'}}>NO SPECIALITIES</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><MdOutlineMail />help@physio.in</a></li>
                        </ul>
                    </div>
                    <div>

                        <h5 style={{fontWeight:'bold',color:'gray'}}>FOLLOW US</h5>
                        <div className='social_media d-flex justify-content-center gap-3' style={{  padding: '0px' }}>
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
                </footer>
                    <hr />
                    Terms and conditions | Privacy
            </div>

        </div>
    )
}

export default Footer1
