import React from 'react'
import {demandCoursesData} from '../data/Data'
import { useParams } from 'react-router'


export default function DemandCourseDetail() {
   const styles={
    width:'100%',
    height:'500px',
    objectFit:'cover'
  }
    const {id} =useParams()
    const displayParam=demandCoursesData.find((item) => item.id === Number(id))
  return (
    <div className='detail-container'>
        <h4>{displayParam.caption}</h4>
      <img src={displayParam.img} alt=' ' style={styles} />
       
      <p>{displayParam.text}</p>
    </div>
  )
}
