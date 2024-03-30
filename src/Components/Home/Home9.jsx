import React from 'react'

function Home9() {
    let data=[
        {
            title:'Chiropractor Treatment'
        },
        {
            title:'Sports Physiotherapy'
        },
        {
            title:'Pediatric Physiotherapy'
        },
        {
            title:'Home Care Physiotherapy'
        },
        {
            title:'Neuro Physiotherapy - Rehab'
        },
        {
            title:'Cupping Therapy'
        },
        {
            title:'Spinal Decompression / Traction Therapy'
        },
        {
            title:'Manual Therapy'
        },
        {
            title:'Overhead Track Harness Therapy'
        },
        {
            title:'Lymphatic Drainage Massage'
        },
        {
            title:"Transcutaneous Electrical Nerve Stimulation(tens) Therapy"
        },
        {
            title:'Thermotherapy(heat Therapy)'
        },
        {
            title:'Dry Needling Therapy'
        },
        {
            title:'Kinesio Taping / Taping Therapy'
        },
        {
            title:'Wax Therapy'
        },
        {
            title:'Traction Therapy'
        },
        {
            title:'Shockwave Therapy'
            
        },
        {
            title:'Post-covid Physiotherapy'
            
        },
        {
            title:'Shortwave Diathermy (swd)'
            
        },

    ]

    return (
        <>
            <div className='my-4'>
            

                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                           <h1 className='m-vertical-scroll-bar-head'>SERVICES OFFERED</h1>
                        </div>
                        <div>
                            <ul className=" nav-pills nav-stacked anyClass" style={{width:'70vw'}}>
                                {data.map((d)=>{
                                    return(
                                        <>
                                        <li className='nav-item m-vertical-scroll-bar-list'>
                                        {d.title}
                                        </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                            

                </div>
                <hr />

            </>
            )
}
            export default Home9

