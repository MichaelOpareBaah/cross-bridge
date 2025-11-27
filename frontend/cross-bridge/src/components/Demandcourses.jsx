import React from 'react'
import { demandCoursesData } from '../data/Data'
import { NavLink } from 'react-router-dom'

export default function Demandcourses() {
    const displayDemandCourses=demandCoursesData.map(course=>{
        return(
           <div className='course' key={course.id}>
                <div>
                <img src={course.img} alt='' className='course-img'/>
                </div>
                <div className='course-content'>
                <h3 className='course-caption'>{course.caption}</h3>
                <p>{course.text}</p>
                </div>
                 
                 <NavLink to={`demand-course-detail/${course.id}`} className='enroll-btn'>Enroll Now</NavLink>
        </div>
        )
    })
  return (
    <div>
      <h3>Top On-Demand Courses</h3>
      <h4>Taught by successful, experienced leaders</h4>
      <div className='courses-wrapper'>
        
        {displayDemandCourses}
      </div>
    </div>
  )
}
