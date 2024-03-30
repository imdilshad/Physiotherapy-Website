import React from 'react'

function Home7() {
    let data=[
        {
            title:'Muscle Stiffness'
        },
        {
            title:'Muscle Spasm'
        },
        {
            title:'Crepitus - Cracking Joints'
        },
        {
            title:'Numbness And Tingling'
        },
        {
            title:'Neck Pain'
        },
        {
            title:'Foot Pain'
        },
        {
            title:'Tremors'
        },
        {
            title:'Swan Neck Deformity'
        },
        {
            title:'Knee pain'
        },
        {
            title:'Back Pain'
        },
        {
            title:"Joint Pain"
        },
        {
            title:'Shoulder Pain'
        },
        {
            title:'Loss Of Balance'
        },
        {
            title:'Inflammation'
        },
        {
            title:'Headache'
        },
        {
            title:'Shortness Of Breath'
        },
        {
            title:'Sprains And Strains'
            
        },

    ]

    return (
        <>
            <div className='my-4'>
            

                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                           <h1 className='m-vertical-scroll-bar-head'>SYMPTOMS</h1>
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
                

            </>
            )
}
            export default Home7

