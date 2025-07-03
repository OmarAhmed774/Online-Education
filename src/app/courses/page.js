import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold">Online Courses on Design and Development</h2>
      <h5 className="text-muted mb-4 mt-4">Web Design Fundamentals</h5>
      {/* Course 1 */}
      <div className="d-flex justify-content-between mb-4">
        <p className="text-muted text" style={{ fontSize: "13px" }}>
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. <br /> Develop the skills to create
          visually appealing and user-friendly websites.
        </p>
        <button class="btn btn-dark">View Course</button>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-4.png"}
            width={350}
            height={200}
            alt="course 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-5.png"}
            width={350}
            height={200}
            alt="course 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-6.png"}
            width={350}
            height={200}
            alt="course 3"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <span className="badge bg-light text-dark border">4 Weeks</span>
          <span className="badge bg-light text-dark border">Beginner</span>
        </div>
        <div className="text-muted">By John Smith</div>
      </div>

      <div className="row text-center bg-light py-4 rounded">
        <div className="col">
          <h4>01</h4>
          <p className="mb-0">Introduction to HTML</p>
        </div>
        <div className="col">
          <h4>02</h4>
          <p className="mb-0">Styling with CSS</p>
        </div>
        <div className="col">
          <h4>03</h4>
          <p className="mb-0">Intro to Responsive Design</p>
        </div>
        <div className="col">
          <h4>04</h4>
          <p className="mb-0">Design Principles</p>
        </div>
        <div className="col">
          <h4>05</h4>
          <p className="mb-0">Building a Basic Website</p>
        </div>
      </div>
      {/* Course 2 */}
      <h5 className="text-muted mb-4 mt-4">UI/UX Design</h5>
      <div className="d-flex justify-content-between mb-4">
        <p className="text-muted text">
          Master the art of creating intuitive user interfaces (UI) and
          enhancing user experiences (UX). <br />
          Learn design principles, wireframing, prototyping, and usability
          testing techniques.
        </p>
        <button class="btn btn-dark">View Course</button>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-7.png"}
            width={350}
            height={200}
            alt="course 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-8.png"}
            width={350}
            height={200}
            alt="course 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-9.png"}
            width={350}
            height={200}
            alt="course 3"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <span className="badge bg-light text-dark border">6 Weeks</span>
          <span className="badge bg-light text-dark border">Intermediate</span>
        </div>
        <div className="text-muted">By Emily Johnson</div>
      </div>

      <div className="row text-center bg-light py-4 rounded">
        <div className="col">
          <h4>01</h4>
          <p className="mb-0">Introduction to UI/UX Design</p>
        </div>
        <div className="col">
          <h4>02</h4>
          <p className="mb-0">User Research and Personas</p>
        </div>
        <div className="col">
          <h4>03</h4>
          <p className="mb-0">Wireframing and Prototyping</p>
        </div>
        <div className="col">
          <h4>04</h4>
          <p className="mb-0">Visual Design and Branding</p>
        </div>
        <div className="col">
          <h4>05</h4>
          <p className="mb-0">Usability Testing and Iteration</p>
        </div>
      </div>
      {/* Course 3 */}
      <h5 className="text-muted mb-4 mt-4"> Mobile App Development </h5>
      <div className="d-flex justify-content-between mb-4">
        <p className="text-muted text">
          Dive into the world of mobile app development. Learn to build native
          iOS and Android applications using industry-leading frameworks like
          Swift and Kotlin.
        </p>
        <button class="btn btn-dark">View Course</button>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-10.png"}
            width={350}
            height={200}
            alt="course 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-11.png"}
            width={350}
            height={200}
            alt="course 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-12.png"}
            width={350}
            height={200}
            alt="course 3"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <span className="badge bg-light text-dark border">8 Weeks</span>
          <span className="badge bg-light text-dark border">Intermediate</span>
        </div>
        <div className="text-muted">By David Brown</div>
      </div>

      <div className="row text-center bg-light py-4 rounded">
        <div className="col">
          <h4>01</h4>
          <p className="mb-0">Introduction to Mobile App Development</p>
        </div>
        <div className="col">
          <h4>02</h4>
          <p className="mb-0">Fundamentals of Swift Programming (iOS)</p>
        </div>
        <div className="col">
          <h4>03</h4>
          <p className="mb-0">Fundamentals of Kotlin Programming (Android)</p>
        </div>
        <div className="col">
          <h4>04</h4>
          <p className="mb-0">Building User Interfaces</p>
        </div>
        <div className="col">
          <h4>05</h4>
          <p className="mb-0">App Deployment and Testing</p>
        </div>
      </div>
      {/* Course 4 */}
      <h5 className="text-muted mb-4 mt-4">Graphic Design for Beginners</h5>
      <div className="d-flex justify-content-between mb-4">
        <p className="text-muted text">
          Discover the fundamentals of graphic design, including typography,
          color theory, layout design, and image manipulation techniques. <br />
          Create visually stunning designs for print and digital media.
        </p>
        <button class="btn btn-dark">View Course</button>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-13.png"}
            width={350}
            height={200}
            alt="course 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-14.png"}
            width={350}
            height={200}
            alt="course 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-15.png"}
            width={350}
            height={200}
            alt="course 3"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <span className="badge bg-light text-dark border">12 Weeks</span>
          <span className="badge bg-light text-dark border">Beginner</span>
        </div>
        <div className="text-muted">By Sarh Thompson</div>
      </div>

      <div className="row text-center bg-light py-4 rounded">
        <div className="col">
          <h4>01</h4>
          <p className="mb-0">Introduction to Graphic Design</p>
        </div>
        <div className="col">
          <h4>02</h4>
          <p className="mb-0">Typography and Color Theory</p>
        </div>
        <div className="col">
          <h4>03</h4>
          <p className="mb-0">Layout Design and Composition</p>
        </div>
        <div className="col">
          <h4>04</h4>
          <p className="mb-0">Image Editing and Manipulation</p>
        </div>
        <div className="col">
          <h4>05</h4>
          <p className="mb-0">Designing for Print and Digital Media</p>
        </div>
      </div>
      {/* Course 5 */}
      <h5 className="text-muted mb-4 mt-4">Front-End Web Development</h5>
      <div className="d-flex justify-content-between mb-4">
        <p className="text-muted text">
          Become proficient in front-end web development. Learn HTML, CSS,
          JavaScript, and popular frameworks like Bootstrap and React. Build
          interactive and responsive websites.
        </p>
        <button class="btn btn-dark">View Course</button>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-16.png"}
            width={350}
            height={200}
            alt="course 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-17.png"}
            width={350}
            height={200}
            alt="course 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <Image
            src={"/course-18.png"}
            width={350}
            height={200}
            alt="course 3"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <span className="badge bg-light text-dark border">10 Weeks</span>
          <span className="badge bg-light text-dark border">Intermediate</span>
        </div>
        <div className="text-muted">By Michael Adams</div>
      </div>

      <div className="row text-center bg-light py-4 rounded">
        <div className="col">
          <h4>01</h4>
          <p className="mb-0">HTML Fundamentals</p>
        </div>
        <div className="col">
          <h4>02</h4>
          <p className="mb-0">CSS Styling and Layouts</p>
        </div>
        <div className="col">
          <h4>03</h4>
          <p className="mb-0">JavaScript Basics</p>
        </div>
        <div className="col">
          <h4>04</h4>
          <p className="mb-0">Building Responsive Websites</p>
        </div>
        <div className="col">
          <h4>05</h4>
          <p className="mb-0">Introduction to Bootstrap and React</p>
        </div>
      </div>
    </div>
  );
}
