import React from 'react'
import hero from '../assets/sectionImg.png'


export default function AboutUs() {
   const styles={
    width:'100%',
    height:'350px',
    objectFit:'cover',
    objectPosition:'center',
    marginBottom:'40px'
   }
  return (
    <div>
          <div>
             <img src={hero} alt='' style={styles}/>
          </div>
          <div className='container'>
            <h1>About Us</h1>
             <div className='about-us-text'>
               <p>CLIGhana and our affiliates is a lifelong entity, headquartered in Ghana with a
              global reach. Devoted to understanding the links among learning, researching, training, and 
              helping formulate policy on issues that affect the security and sustenance of life. 
              Established by a group of academic, clinical management and resilience risk
              leadership professionals.</p>
              <p>
                Dynamic multidisciplinary team and combines the innovation and energy of a
                start-up with the expertise and professional network of the most experienced
                professionals. The combined experience of our pool of professionals are unparalleled.
                Aimed at providing effective but low-cost learning, training exposure and
                certification to professionals at their pace without compromising their workload.
              </p>
             </div>
              <div className='concepts'>
                <div className='concept-item'>
                  <h2>Our Vision</h2>
                  <p>To be the preferred lifelong learning, research, investigations and consulting
                      entity in Ghana and beyond</p>
                </div>
                <div className='concept-item'>
                     <h2>Our Mission</h2>
                  <p>To deliver client-focused solutions in learning, research and
                      investigations, training and consulting</p>
                </div>
                <div className='concept-item'>
                     <h2>Our Objective</h2>
                  <p>To improve human development to satisfy client expectation</p>
                </div>
              </div>
              <h2>Why Train with Us?</h2>
              <div className='train-with-us-items'>
                <ul>
                  <li>A renowned institute with cutting edge experience headquartered in Ghana.</li>
                  <li>Learn - think outside the box with experts and innovators across the globe.</li>
                  <li>Acquire practical strategies, methodologies and know-how, in an
                      international atmosphere and develop your live network.</li>
                  <li>A mix of interactive in-person and ICT or remote-based presentations and
                      practical workshops without compromising job-schedule.</li> 
                  <li>Receive an internationally-compliant training certificate and join our global
                      family of alumni.</li>
                  <li>Applies introductory module of Human Resource Development framework.</li>
                  <li>Applies instructional design approach in accordance with the ‘ADDIE’ Process.</li>
                </ul>
              </div>
          </div>
          
    </div>
  )
}
