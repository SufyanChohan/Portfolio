import React from "react";
import "../Styles/timeline.css"; 
import { motion } from "framer-motion";

const edu =[
   {
    title: "MATRICULATION",
    institute: "The Eden Foundation School",
    location: "Karachi, Pakistan",
  },  
  {
    title: "INTERMEDIATE",
    institute: "Government Degree Boys College",
    location: "Karachi, Pakistan",
    },
    
]
const education = [

 
  {
    title: "MERN Stack",
    institute: "BMJ Digital Education",
    location: "Karachi, Pakistan",
  },
];

export default function EducationTimeline() {
  return (
    <div className="bg-dark">
    <div className="container py-5 bg-dark text-white">
  <h2 className="text-center fw-bold mb-5 pt-5 heading" >
    Education <span className="">/</span> Courses
  </h2>

  <div className="row position-relative timeline">
    {/* Left Side (Courses / edu) */}
    <div className="col-md-6 text-end pe-md-4">
      {edu.map((item, index) => (
        <motion.div key={index} className="mb-5 position-relative timeline-item-left"
        initial={{ x: -100, opacity: 0 }}  
      whileInView={{ x: 0, opacity: 1 }}  
      exit={{ x: -100, opacity: 0 }}     
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: 0.2 }}>
          <div className="timeline-dot bg-success shadow"></div>
          <h5 className="fw-bold">{item.title}</h5>
          <p className="mb-0">{item.institute}</p>
          <p className="mb-0">{item.location}</p>
        </motion.div>
      ))}
    </div>

    {/* Center Line */}
    <div className="col-md-0 d-none d-md-block position-absolute top-0 start-50 translate-middle-x h-100 timeline-border"></div>

    {/* Right Side (Education / education) */}
    <div className="col-md-6 ps-md-4">
      {education.map((item, index) => (
        <motion.div key={index} className="mb-5 position-relative timeline-item-right mt-5"
        initial={{ x: 100, opacity: 0 }}  
      whileInView={{ x: 0, opacity: 1 }}  
      exit={{ x: -100, opacity: 0 }}     
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: 0.2 }}>
          <div className="timeline-dot bg-success shadow"></div>
          <h5 className="fw-bold">{item.title}</h5>
          <p className="mb-0">{item.institute}</p>
          <p className="mb-0">{item.location}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</div>
  );
}
