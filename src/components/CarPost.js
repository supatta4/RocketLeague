import React from 'react'
import './CarPost.css'


const CarPost=(props)=>{
    const {car ,onBgclick} = props

    return(
        <div className="car-post">
            <div className="car-bg" onClick={onBgclick}/>
            <div className="car-content">
        <img src={car.thumbnailUrl}/>
        <h4>{car.title}</h4>
        </div>
        </div>
    );
}

export default CarPost;