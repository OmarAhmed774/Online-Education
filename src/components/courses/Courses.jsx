import React from "react";
import Image from "next/image";
import "./courses.css";
import Link from "next/link";
export default function Courses() {
  return (
    <section className="courses-section section">
      <div className="container">
        <p className="header-p">Explore Programe</p>
        <h2 className="header">Our Most Popular class</h2>
        <p className="header-p">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
        <div className="courses pt-4">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <Image
                  src="/course-1.png"
                  alt="Course 1"
                  width={400}
                  height={250}
                  className="card-img-top img-fluid rounded-top"
                />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Design</span>
                  <h5 className="card-title">Figma UI UX Design</h5>
                  <p className="card-text text-muted">
                    Use Figma to get a job in UI/UX design. User Interface, User
                    Experience design.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">👤 Jesse Cooper</small>
                    <strong>$17.84</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <Image
                  src="/course-2.png"
                  alt="Course 2"
                  width={400}
                  height={250}
                  className="img-fluid rounded-top card-img-top"
                />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Design</span>
                  <h5 className="card-title">Learn With Shoaib</h5>
                  <p className="card-text text-muted">
                    Design Web Sites and Mobile Apps that Your Users Love and
                    Return to Again.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">👤 Jenny Wilson</small>
                    <strong>$8.99</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <Image
                  src="/course-3.png"
                  alt="Course 3"
                  width={400}
                  height={250}
                  className="img-fluid rounded-topcard-img-top"
                />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Design</span>
                  <h5 className="card-title">Building User Interface..</h5>
                  <p className="card-text text-muted">
                    Learn how to apply User Experience (UX) principles to your
                    website designs.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">👤 Esther Howard</small>
                    <strong>$17.84</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link href="/courses" className="btn btn-dark">
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
