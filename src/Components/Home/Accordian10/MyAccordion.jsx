import React ,{useState} from 'react'


function MyAccordian({ question, answer }) {
    const [show, setShow] = useState(false)
    return (
        
        <div>
            <div className='question'>
                <p className='plus' onClick={() => setShow(!show)}>{show?"-":"+"}</p>
                <h3 >{question}</h3>
            </div>
            {
                show && <p className='answer'>{answer}</p>
            }
        </div>
    )
}

export default MyAccordian
