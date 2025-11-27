import React from 'react'
import hero from '../assets/sectionImg.png'
import { allCoursesData } from '../data/Data.jsx'
import { NavLink } from 'react-router-dom'

export default function Courses() {
  const styles={
    width:'100%',
    height:'350px',
    objectFit:'cover',
    objectPosition:'center',
    marginBottom:'40px'
   }
    const displayCourses=allCoursesData.map(course=>{
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
      <div>
        <img src={hero} alt='' style={styles}/>
      </div>
       <div className='courses-wrapper'>
        {displayCourses}
       </div>
      
      
    </div>
  )
}
