import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home3() {
    
    let data=[
        {
            img:'https://www.renoassistance.ca/wp-content/uploads/2018/03/massotherapy-room-physiotherapy-clinic.jpg',
            title:"Vt Road Mansarovar"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.EPtI5MtABx2UU5IIcalFQgHaE7&pid=Api&P=0&h=180',
            title:"Vijay Path"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.TIReCHFLcyusbKKpD88U0AHaD7&pid=Api&P=0&h=180',
            title:"Lal Kothi"
        },
        {
            img:'https://tse2.mm.bing.net/th?id=OIP.topsOtDokT_Sp6bkUrghmgHaFR&pid=Api&P=0&h=180',
            title:"Gandhi Nagar"
        },
        {
            img:'https://tse4.mm.bing.net/th?id=OIP.RklfEkDAELFOacIxU_18wAHaEu&pid=Api&P=0&h=180',
            title:"Tonk Phatak"
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
        <section className='main-div'>

        <div className='my-4'>
            <div className='container '>
                <h3 style={{ fontSize: '50px', margin: '10px' }}>ADVANCED PHYSIOTHERAPY CLINICS</h3>
                <p >With expertise, our Clinics are equipped with latest approved technologies in healing & rehabilitation to ensure that you get the best care.</p>
            </div>
             <div className='container d-flex justify-content-center align-items-center'>
                <div className=' ' style={{width:'80vw'}} >
                    <Slider {...settings}>

                    {data.map((d)=>{
                        return (
                        <div className='  p-5 ' >
                
                            <div  >
                                <img src={d.img} alt="" style={{border:'2px solid #7FFFD4',borderRadius:'3px',width:'250px',height:'200px'}} />
                            </div>
                            <div style={{width:'250px',minHeight:'50px'}}>
                                <p className='font-semibold' style={{backgroundColor:'#7FFFD4',borderRadius:'3px',padding:'5px'}}>{d.title}</p>
                            </div>
                        </div>
                        )
                      })}
                    </Slider>

                </div>
            </div> 
                
        </div>
        </section>
        <hr />

    </>
    )
}
export default Home3

