import React from 'react'
import './testimonialCard.css'
const TestimonialCard = ({ m }) => {
    return (
        <div className='testimonialCard'>
            <div className='testimonialCardInfo'>
                <div className='testimonialImage'>
                    <img src={m.img} alt="testimonil" />
                </div>
                <div className='testimonialsName'>
                    <h1>{m.name}</h1>
                    <h3>{m.company}</h3>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <div className='testimonialCardSideLine'> 

                </div>
                <div className='testimonialContent'>
                    <p>{m.testimonial}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
