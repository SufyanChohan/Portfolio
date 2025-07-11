import React from "react";
import "../Styles/timeline.css"; // Custom styles for the glowing effect
import { div } from "framer-motion/client";
const edu =[
    {
    title: "INTERMEDIATE",
    institute: "Government Degree Boys College",
    location: "Karachi, Pakistan",
    },
]
const education = [

  {
    title: "MATRICULATION",
    institute: "Anjum Secondary School",
    location: "Karachi, Pakistan",
  },
  {
    title: "MERN Stack",
    institute: "Expertizo University",
    location: "Karachi, Pakistan",
  },
];

export default function EducationTimeline() {
  return (
    <div className="container py-5 bg-dark text-white">
  <h2 className="text-center text-success fw-bold mb-5" style={{ fontSize: "2.5rem" }}>
    Education <span className="text-white">/</span> Courses
  </h2>

  <div className="row position-relative timeline">
    {/* Left Side (Courses / edu) */}
    <div className="col-md-6 text-end pe-md-4">
      {edu.map((item, index) => (
        <div key={index} className="mb-5 position-relative timeline-item-left">
          <div className="timeline-dot bg-success shadow"></div>
          <h5 className="fw-bold">{item.title}</h5>
          <p className="mb-0">{item.institute}</p>
          <p className="mb-0">{item.location}</p>
        </div>
      ))}
    </div>

    {/* Center Line */}
    <div className="col-md-0 d-none d-md-block position-absolute top-0 start-50 translate-middle-x h-100 timeline-border"></div>

    {/* Right Side (Education / education) */}
    <div className="col-md-6 ps-md-4">
      {education.map((item, index) => (
        <div key={index} className="mb-5 position-relative timeline-item-right">
          <div className="timeline-dot bg-success shadow"></div>
          <h5 className="fw-bold">{item.title}</h5>
          <p className="mb-0">{item.institute}</p>
          <p className="mb-0">{item.location}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
