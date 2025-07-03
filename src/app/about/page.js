import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCrown,
  faMasksTheater,
  faBolt,
  faBook,
  faSuitcase,
  faPuzzlePiece,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">About Online Education</h2>

      <h4 className="fw-bold">Achievements</h4>
      <p className="text-muted mb-5">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <FontAwesomeIcon
            icon={faCrown}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Trusted by Thousands</h5>
          <p className="text-muted">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faAward}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Award-Winning Courses</h5>
          <p className="text-muted">
            Our courses have received recognition and accolades in the industry
            for quality, content, and teaching methodologies.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faMasksTheater}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Positive Student Feedback</h5>
          <p className="text-muted">
            We take pride in the positive feedback we receive from our students,
            who appreciate the value and relevance of our materials.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faBolt}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Industry Partnerships</h5>
          <p className="text-muted">
            We have established strong partnerships with industry leaders,
            ensuring access to the latest tools and trends.
          </p>
        </div>
      </div>

      <h4 className="fw-bold">Our Goals</h4>
      <p className="text-muted mb-5">
        At SkillBridge, our goal is to empower individuals from all backgrounds
        to thrive in the world of design and development. We believe that
        education should be accessible and transformative, enabling learners to
        pursue their passions and make a meaningful impact. Through our
        carefully crafted courses
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <FontAwesomeIcon
            icon={faSuitcase}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Provide Practical Skills</h5>
          <p className="text-muted">
            We focus on delivering practical, industry-relevant skills to equip
            learners with real knowledge and tools.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faBook}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Foster Creative Problem-Solving</h5>
          <p className="text-muted">
            We encourage design thinking and innovation to tackle real-world
            challenges with confidence.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faPuzzlePiece}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">
            Promote Collaboration and Community
          </h5>
          <p className="text-muted">
            Our platform supports inclusive learning where learners can connect,
            share insights, and grow together.
          </p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="icon mb-3"
            style={{ width: "20px", height: "20px" }}
          />
          <h5 className="mt-2 fw-semibold">Stay Ahead of the Curve</h5>
          <p className="text-muted">
            We keep course content up to date with the latest industry trends to
            provide students with modern knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
