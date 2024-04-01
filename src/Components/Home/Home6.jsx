import React from 'react'

function Home6() {
    let data1 = [
        {
            title: 'Quadriceps Muscle Strain'
        },
        {
            title: 'Lumbar Spondylosis'
        },
        {
            title: 'Pes Anserine Bursitis'
        },
        {
            title: 'Herniated Disk Or Slipped Disc'
        },
        {
            title: 'Clubfoot Or Congenital Talipes Equinovarus Or Ctev'
        },
        {
            title: 'Ankle Bone Spur'
        },
        {
            title: 'Total Hip Replacement (thr)'
        },
        {
            title: 'Swan Neck Deformity'
        },
        {
            title: 'Quadriceps Muscle Strain'
        },
        {
            title: 'Erb’s Palsy'
        },
        {
            title: "Sprengel's Shoulder"
        },
        {
            title: 'Meralgia Paresthetica'
        },
        {
            title: 'Tendinitis'
        },
        {
            title: 'Guillain-barré Syndrome'
        },

    ]

    let data2 = [
        {
            title: 'Muscle Stiffness'
        },
        {
            title: 'Muscle Spasm'
        },
        {
            title: 'Crepitus - Cracking Joints'
        },
        {
            title: 'Numbness And Tingling'
        },
        {
            title: 'Neck Pain'
        },
        {
            title: 'Foot Pain'
        },
        {
            title: 'Tremors'
        },
        {
            title: 'Swan Neck Deformity'
        },
        {
            title: 'Knee pain'
        },
        {
            title: 'Back Pain'
        },
        {
            title: "Joint Pain"
        },
        {
            title: 'Shoulder Pain'
        },
        {
            title: 'Loss Of Balance'
        },
        {
            title: 'Inflammation'
        },
        {
            title: 'Headache'
        },
        {
            title: 'Shortness Of Breath'
        },
        {
            title: 'Sprains And Strains'

        },

    ]

    let data3 = [
        {
            title: 'Interferential Therapy (ift)'
        },
        {
            title: 'Chiropractic Therapy'
        },
        {
            title: 'Ultrasound Therapy'
        },
        {
            title: 'Myofascial Release (mfr)'
        },
        {
            title: 'Acupuncture'
        },
        {
            title: 'Cupping Therapy'
        },
        {
            title: 'Spinal Decompression / Traction Therapy'
        },
        {
            title: 'Manual Therapy'
        },
        {
            title: 'Overhead Track Harness Therapy'
        },
        {
            title: 'Lymphatic Drainage Massage'
        },
        {
            title: "Transcutaneous Electrical Nerve Stimulation(tens) Therapy"
        },
        {
            title: 'Thermotherapy(heat Therapy)'
        },
        {
            title: 'Dry Needling Therapy'
        },
        {
            title: 'Kinesio Taping / Taping Therapy'
        },
        {
            title: 'Wax Therapy'
        },
        {
            title: 'Traction Therapy'
        },
        {
            title: 'Shockwave Therapy'

        },
        {
            title: 'Post-covid Physiotherapy'

        },
        {
            title: 'Shortwave Diathermy (swd)'

        },

    ]

    let data4 = [
        {
            title: 'Chiropractor Treatment'
        },
        {
            title: 'Sports Physiotherapy'
        },
        {
            title: 'Pediatric Physiotherapy'
        },
        {
            title: 'Home Care Physiotherapy'
        },
        {
            title: 'Neuro Physiotherapy - Rehab'
        },
        {
            title: 'Cupping Therapy'
        },
        {
            title: 'Spinal Decompression / Traction Therapy'
        },
        {
            title: 'Manual Therapy'
        },
        {
            title: 'Overhead Track Harness Therapy'
        },
        {
            title: 'Lymphatic Drainage Massage'
        },
        {
            title: "Transcutaneous Electrical Nerve Stimulation(tens) Therapy"
        },
        {
            title: 'Thermotherapy(heat Therapy)'
        },
        {
            title: 'Dry Needling Therapy'
        },
        {
            title: 'Kinesio Taping / Taping Therapy'
        },
        {
            title: 'Wax Therapy'
        },
        {
            title: 'Traction Therapy'
        },
        {
            title: 'Shockwave Therapy'

        },
        {
            title: 'Post-covid Physiotherapy'

        },
        {
            title: 'Shortwave Diathermy (swd)'

        },

    ]
    return (
        <>
            <section className='main-div '>
                
                    
                    <div className=' '>
                        <h3 className='display-4'>WHAT WE TREAT</h3>
                        <p className='lead'>We offer physiotherapy treatments across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports related issues covering a wide range of conditions & symptoms</p>
                    </div>

                <div className="row">
                <div className='my-4 col xs={12} md={8} lg={6}'>
                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h1 className='m-vertical-scroll-bar-head'>Conditions</h1>
                        </div>
                        <div>
                            <ul className=" nav-pills nav-stacked anyClass" style={{ width: '40vw' }}>
                                {data1.map((d) => {
                                    return (
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

                <div className='my-4 col xs={12} md={8} lg={6}'>
                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h1 className='m-vertical-scroll-bar-head'>SYMPTOMS</h1>
                        </div>
                        <div>
                            <ul className=" nav-pills nav-stacked anyClass" style={{ width: '40vw' }}>
                                {data2.map((d) => {
                                    return (
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

                </div>


                <div className="row">

                <div className='my-4 col'>
                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h1 className='m-vertical-scroll-bar-head'>THERAPIES OFFERED</h1>
                        </div>
                        <div>
                            <ul className=" nav-pills nav-stacked anyClass" style={{ width: '40vw' }}>
                                {data3.map((d) => {
                                    return (
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

                <div className='my-4 col'>
                    <div className="  d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h1 className='m-vertical-scroll-bar-head'>SERVICES OFFERED</h1>
                        </div>
                        <div>
                            <ul className=" nav-pills nav-stacked anyClass" style={{ width: '40vw' }}>
                                {data4.map((d) => {
                                    return (
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
               </div>
            </section>
        </>
    )
}
export default Home6

