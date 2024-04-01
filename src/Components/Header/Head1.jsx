import React from 'react'
import { Link } from 'react-router-dom'

function Head1() {
  return (

    <>
    <hr />

<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow main-div">
<div className="container-fluid  ">
    <div style={{margin:'0 8vw'}}>
        <a className="navbar-brand mx-4 " href="#"><h1 style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}>PHYSIO</h1></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item nav-ele">
                <a className="nav-link active " aria-current="page" href="#"><Link to={`/`} className='text-decor'>Home</Link></a>
            </li>
            <li className="nav-item nav-ele">
                <a className="nav-link " href="#"><Link to={'/about'} className='text-decor'>About Us</Link></a>
            </li>
            <li className="nav-item dropdown nav-ele">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Offerings
                </a>
                <ul className="dropdown-menu" style={{width:'auto',}}>
                    <li><a className="dropdown-item" style={{width:'',}} href="#">Therapies Offered</a></li>
                    <li><a className="dropdown-item" href="#">Services Offered</a></li>
                </ul>
            </li>
            <li className="nav-item nav-ele">
                <a className="nav-link" href="#"><Link to={'/faq'} className='text-decor'>FAQ</Link></a>
            </li>
            <li className="nav-item dropdown nav-ele">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Patient Education
                </a>
                <ul className="dropdown-menu" style={{width:'auto',}}>
                    <li><a className="dropdown-item"  href="#">Conditions We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Symptoms We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Home Excercises</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
            </li>
        
        </ul>
    </div>
</div>
</nav>

<hr style={{padding:'20px 0'}}/> 
    </>
  )
}

export default Head1

{/* <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
<div className="container-fluid m-3 ">
    <div>
        <a className="navbar-brand mx-4 " href="#">Navbar</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row justify-content-center align-items-center" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Offerings
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Therapies Offered</a></li>
                    <li><a className="dropdown-item" href="#">Services Offered</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Patient Education
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Conditions We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Symptoms We Treat</a></li>
                    <li><a className="dropdown-item" href="#">Home Excercises</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
            </li>
        
        </ul>
    </div>
</div>
</nav> */}