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
            <section className='main-div container-fluid '>
                <div className='w-100'>
                    <div className=' w-100 py-3'>
                        <h3 className='display-4 '>WHAT WE TREAT</h3>
                        <p className='lead text-secondary fs-6'>We offer physiotherapy treatments across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports related issues covering a wide range of conditions & symptoms</p>
                    </div>

                    <div className='d-flex justify-content-center '>
                    <div className="row w-100">
                        <div className='my-4 col-md-3 col-12 px-2'>
                            <div className="  d-flex flex-column justify-content-center align-items-center w-100">
                                <div className='w-100 py-1 ' style={{backgroundColor:'aquamarine'}}>
                                    <h1 className='m-vertical-scroll-bar-head w-100 fs-4'>Conditions</h1>
                                </div>
                                <div className='w-100 '>
                                    <ul className=" nav-pills nav-stacked anyClass w-100 pl-0" style={{padding:'0rem'}} >
                                        {data1.map((d) => {
                                            return (
                                                <>
                                                    <li className='nav-item bg-white mb-1 py-1 rounded  'style={{fontSize:"13px"}}>
                                                        {d.title}
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='my-4 col-md-3 col-12 px-2'>
                            <div className="  d-flex flex-column justify-content-center align-items-center w-100">
                                <div className='w-100 py-1' style={{backgroundColor:'aquamarine'}}>
                                    <h1 className='  w-100 fs-4'>SYMPTOMS</h1>
                                </div>
                                <div className='w-100 '>
                                    <ul className=" nav-pills nav-stacked anyClass w-100 pl-0  " style={{padding:'0rem'}}>
                                        {data2.map((d) => {
                                            return (
                                                <>
                                                    <li className='nav-item  bg-white mb-1 py-1 rounded 'style={{fontSize:"13px"}}>
                                                        {d.title}
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='my-4 col-md-3 col-12 px-2'>
                            <div className="  d-flex flex-column justify-content-center align-items-center w-100">
                                <div className='w-100 py-1' style={{backgroundColor:'aquamarine'}}>
                                    <h1 className=' w-100 fs-5'>THERAPIES OFFERED</h1>
                                </div>
                                <div className='w-100'>
                                    <ul className=" nav-pills nav-stacked anyClass w-100 pl-0" style={{padding:'0rem'}}>
                                        {data3.map((d) => {
                                            return (
                                                <>
                                                    <li className='nav-item bg-white mb-1 py-1 rounded  'style={{fontSize:"13px"}}>
                                                        {d.title}
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='my-4 col-md-3 col-12 px-2' >
                            <div className="  d-flex flex-column justify-content-center align-items-center w-100">
                                <div className='w-100 py-1' style={{backgroundColor:'aquamarine'}}>
                                    <h1 className=' w-100 fs-5'>SERVICES OFFERED</h1>
                                </div>
                                <div className='w-100 d-flex' >
                                    <ul className=" nav-pills nav-stacked anyClass w-100 " style={{padding:'0rem'}}>
                                        {data4.map((d) => {
                                            return (
                                                <>
                                                    <li className='nav-item bg-white mb-1 py-1 rounded ' style={{fontSize:"13px"}}>
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
                </div>
                                        </div>
            </section>
        </>
    )
}
export default Home6

