import React from 'react'
import human from '../assets/person.png'
export default function Reviews() {
  return (
    <div>
        <h2>Cusomer's Reviews</h2>
        <div className='all-reviews'>
        <div className='review'>
            <div >
                <img className='review-img' src={human} alt=''/>
            </div>
            <div className='review-content'>
                <p className='review-text'>“The product quality is consistently outstanding, exceeding my expectations every time.”</p>
                <p className='review-name'>Mello Asare</p>

            </div>

        </div>
         <div className='review'>
            <div >
                <img className='review-img' src={human} alt=''/>
            </div>
            <div className='review-content'>
                <p className='review-text'>“The product quality is consistently outstanding, exceeding my expectations every time.”</p>
                <p className='review-name'>Mello Asare</p>

            </div>

        </div>
      
    </div>
    

    </div>
    
  )
}
