import React from "react";

export default function Hero() {
  return (
    <section className="section hero-section">
      <div className="container text-center">
        <h1 className="display-5 fw-bold">
          Unlock Your Potential with Expert-Led Courses
        </h1>
        <p className="lead mt-3">
          Explore a wide range of courses designed to help you achieve your
          personal and professional goals.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <input
            type="text"
            className="form-control w-50 me-2"
            placeholder="Search for courses"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </section>
  );
}
