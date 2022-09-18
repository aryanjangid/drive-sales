import React from 'react'
import './card.css'

const Card = ({ m }) => {
    return (
        <>
            <div className='card'>
                <div className='imageCircle'> </div>
                <div className='image_container'>
                    <img alt="xyz" className='image' src={m.img} />
                </div>
                <div className='contents'>
                    <h1 className='name'>{m.title}</h1>
                    <p className='position'>{m.content}</p>
                </div>
            </div >
        </>
    )
}

export default Card
