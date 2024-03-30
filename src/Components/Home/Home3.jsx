import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home3() {
    
    let data=[
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.yDLnrwRy7U5kICVAAAbhUQHaE8&pid=Api&P=0&h=180',
            title:"Sports Therapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.fwpwTG_FgrmXrHUgWUTedgHaE8&pid=Api&P=0&h=180',
            title:"Home Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.LJqZBcaqRyUauwi3S7L80gHaE8&pid=Api&P=0&h=180',
            title:"Chiropractor"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.EPtI5MtABx2UU5IIcalFQgHaE7&pid=Api&P=0&h=180',
            title:"Physiotherapy Clinic"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.0ECPOeeV6WxZ-AUQWxOa4wHaE8&pid=Api&P=0&h=180',
            title:"Physiotherapist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.d9oF0c1cqdRt-jk36Xa5wgHaE8&pid=Api&P=0&h=180',
            title:"Tele Physiotherapist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.yV9jC593Qv1hjift7erP8AHaFZ&pid=Api&P=0&h=180',
            title:"Sports Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.GK1w3npzOu-kp6_tFfLhiQHaHA&pid=Api&P=0&h=180',
            title:"Ortho Physiotherapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.IUm3U_0JY5uU_R8lYsN6EAHaE8&pid=Api&P=0&h=180',
            title:"Neuro Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.yqgtodUVI7XsXaFN1b6ucwHaFl&pid=Api&P=0&h=180',
            title:"Ergonomics Specialist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.XavjndVhPXTT6x3xH8r4EgHaEK&pid=Api&P=0&h=180',
            title:"Women's Health Therapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.QfZda-RK8H1Lx0LJJ-GCpQHaE8&pid=Api&P=0&h=180',
            title:"Pediatric Physiotherapist"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.qTgR4pfs9J9TPnGzDuK-ZAHaE5&pid=Api&P=0&h=180',
            title:"Geriatric Physiotherapist"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.AWDR7kdSQRedMi6gqZ9FOwHaE8&pid=Api&P=0&h=180',
            title:"Sports Massage Therapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.P72vdi5ppQw45COLzbA9ugHaE8&pid=Api&P=0&h=180',
            title:"Cardio Respiratory Physiotherapist"
        },
        {
            img:'https://tse1.mm.bing.net/th?id=OIP.0mzAMWejmbTl6uGu98AFzgHaE8&pid=Api&P=0&h=180',
            title:"Vestibular Rehabilitation (vrt)"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.X7XvdjtgJbx2tMwGu4DxvQHaE8&pid=Api&P=0&h=180',
            title:"Pre And Post Surgery Rehabilitation"
        },
        {
            img:'https://tse3.mm.bing.net/th?id=OIP.5A_rGsHdlqgj087GVcVOjQHaE8&pid=Api&P=0&h=180',
            title:"Spinal Injury Physio"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.lZWrXofrrWkFLtqFLcMyLQHaE8&pid=Api&P=0&h=180',
            title:"Strength Training Specialist"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.spfaIWhCVsZqzNgLBgOD2QHaE8&pid=Api&P=0&h=180',
            title:"Advanced Physiotherapy"
        },
    ]

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1180,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 816,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide:1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 20,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
        <div className='my-4'>
            <div className='container '>
                <h3 style={{ fontSize: '50px', margin: '10px' }}>CB SPECIALITIES</h3>
                <p >CB Physiotherapy, provides treatments across multiple specialities in various cities. Confirm with us the availability of Physiotherapist in your nearby areas.</p>
            </div>
             <div className='container d-flex justify-content-center align-items-center'>
                <div className=' ' style={{width:'80vw'}} >
                    <Slider {...settings}>

                    {data.map((d)=>{
                        return (
                        <div className='  p-5 ' >
                
                            <div  >
                                <img src={d.img} alt="" style={{border:'2px solid violet',borderRadius:'3px',width:'250px',height:'200px'}} />
                            </div>
                            <div style={{width:'250px',minHeight:'50px'}}>
                                <p className='font-semibold' style={{backgroundColor:'violet',borderRadius:'3px',padding:'5px'}}>{d.title}</p>
                            </div>
                        </div>
                        )
                    })}
                    </Slider>

                </div>
            </div> 
                
        </div>
        <hr />

    </>
    )
}
export default Home3

