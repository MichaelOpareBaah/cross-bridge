import React from 'react'
import hero from '../assets/sectionImg.png'
export default function Hero() {
  const styles={
    width:'100%',
    height:'600px',
    objectFit:'cover',
    objectPosition:'center',
    marginBottom:'40px' 

  }
  return (
    <div>
       <img src={hero} alt='' style={styles}/>
    </div>
  )
}
