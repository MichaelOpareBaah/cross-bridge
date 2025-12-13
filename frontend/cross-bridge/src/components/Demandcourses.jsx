import React, { useEffect } from "react";
import { demandCoursesData } from "../data/Data";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Demandcourses() {
  useEffect(() => {
    AOS.init();
  }, []);
  const displayDemandCourses = demandCoursesData.map((course) => {
    return (
      <div className="course " data-aos="zoom-in" key={course.id}>
        <div>
          <img src={course.img} alt="" className="course-img" />
        </div>
        <div className="course-content">
          <h3 className="course-caption ">{course.caption}</h3>
          <p className="text-justify">{course.text}</p>
        </div>

        <NavLink
          to={`demand-course-detail/${course.id}`}
          className="enroll-btn"
        >
          Enroll Now
        </NavLink>
      </div>
    );
  });
  return (
    <div>
      <h3>Top On-Demand Courses</h3>
      <h4>Taught by successful, experienced leaders</h4>
      <div className="courses-wrapper">{displayDemandCourses}</div>
    </div>
  );
}
