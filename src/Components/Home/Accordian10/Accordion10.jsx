import React, { useState } from 'react'
import './Accordian10.css'
import MyAccordian from './MyAccordion'


function Accordion10() {
    const data=[
        {
            id:1,
            question: "What is Integrated Physio Care by CB Physiotherapy",
            answer:"Integrated Care Focusses on better Outcomes by using a combination of therapies and delivery models that suit you the best for short term relief as well as long term management of your condition. It Starts with an all-around assessment followed by a personalized treatment program consisting of various types of therapies. Our Efforts Continue after the treatment is over as you would be given an exercise prescription/schedule to be followed at home. Video Library and supported mobile app help in adherence to prescribed exercises and reduce the chances of problem recurrence.",
        },
        {
            id:2,
            question: "What are the services Offered by CB Physiotherapy in India?",
            answer:"CB Physiotherapy Offers treatments in our partner clincs & Physiotherapy at Home Service ( currently in major metros in India). We Also provide Remote / virtual physiotherapy session. VIrtual Physiotherapy Sessions generally asessment of your condition and then an exercise prescription is given for the same. Home Exercises for managemnt of ortho / neuro conditions is enabled by our mobile app.",
        },
        {
            id:3,
            question: "Do you Offer Remote Physiotherapy / VIrtual Physiotherapy to Overseas Patients.",
            answer:"Yes, If you are located outside India, you can still avial our remote physiotehrapy services. After booking a remote therapy session. Our team wil schedule a remote therapy session over whatsapp/ gooogle meet / zoom meeting. After the session home exercise sessions will be given or if needed the exercise sessions can be done under the guidance of our physio over video calling.",
        },
    ]


    
  return (
    <>
    <hr />
    <section className='main-div'>
    <h1>Frequently Asked Questions</h1>
    {
        data.map((curr)=>{
            const {id}=curr;
            return (
                <>
                <MyAccordian key={id} {...curr}/>
            
                </>
            )
        })
    }
    </section>
    <hr />
    </>
  )
}

export default Accordion10
