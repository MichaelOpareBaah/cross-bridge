import React from 'react'
import Hero from '../components/Hero'
import Demandcourses from '../components/Demandcourses'
import sectionImg from '../assets/hero.png'
import adImg from '../assets/sectionImg.png'
import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews'


export default function Home() {
  return (
   <div >
    <Hero/>
    <div className='container'>
      <div>
        <h1>CrossBridge Leadership Institute</h1>
        <p>CLIGhana and our affiliates is a lifelong entity, headquartered in Ghana with a
                global reach. Devoted to understanding the links among learning, researching, training, and
                helping formulate policy on issues that affect the security and sustenance of life. 
                Established by a group of academic, clinical management and resilience risk
                leadership professionals.Dynamic multidisciplinary team and combines the innovation and energy of a
                start-up with the expertise and professional network of the most experienced
                professionals.The combined experience of our pool of professionals are unparalleled.
                Aimed at providing effective but low-cost learning, training exposure and
                certification to professionals at their pace without compromising their workload.
            </p>
        </div>
        <Demandcourses />
        <Link className='enroll-btn'>Load more...</Link>
        <div className='section'>
            <div className='section-item'>
                <img src={sectionImg} alt=''/>
            </div>
            <div className='section-item'>
                <h2>Why Train withUs?</h2>
                <p> CrossBridge Leadership Institute, its subsidiaries and affiliate entities have
                    developed a curriculum resource in direct response to the observed lack
                    of initial and on the job comprehensive training to enable clients work
                    without apprehension.
                </p>
                <p>
                    The programme and modules are what any client-entity needs as the
                    converging learning and training backbone to offset the imbalance in our
                    fluid environment.
                </p>
                <p>
                    Each programme is tailored to fit the environmental and operational
                    conditions of our client-entities.
                </p>
            </div>
            
        </div>
        
        <div>
            <img className='ad-section' src={adImg} alt=''/>
        </div>
        <Reviews />
    </div>
     
   </div>
  )
}
