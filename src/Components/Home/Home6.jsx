import React from 'react'

function Home6() {
    let data=[
        {
            title:'Quadriceps Muscle Strain'
        },
        {
            title:'Lumbar Spondylosis'
        },
        {
            title:'Pes Anserine Bursitis'
        },
        {
            title:'Herniated Disk Or Slipped Disc'
        },
        {
            title:'Clubfoot Or Congenital Talipes Equinovarus Or Ctev'
        },
        {
            title:'Ankle Bone Spur'
        },
        {
            title:'Total Hip Replacement (thr)'
        },
        {
            title:'Swan Neck Deformity'
        },
        {
            title:'Quadriceps Muscle Strain'
        },
        {
            title:'Erb’s Palsy'
        },
        {
            title:"Sprengel's Shoulder"
        },
        {
            title:'Meralgia Paresthetica'
        },
        {
            title:'Tendinitis'
        },
        {
            title:'Guillain-barré Syndrome'
        },

    ]

    return (
        <>
        <section className='main-div'>

            <div className='my-4'>
                <div className=' '>
                    <h3 className='display-4'>WHAT WE TREAT</h3>
                    <p className='lead'>We offer physiotherapy treatments across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports related issues covering a wide range of conditions & symptoms</p>
                </div>
            

                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                           <h1 className='m-vertical-scroll-bar-head'>Conditions</h1>
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
            </section>
            </>
            )
}
            export default Home6

