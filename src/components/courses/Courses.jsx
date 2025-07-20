import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "Introduction to Programming",
      description:
        "Learn the basics of coding with Python and build your first application.",
      image: "/course-1.jpg",
    },
    {
      title: "Business Strategy Fundamentals",
      description:
        "Master essential business strategy concepts and frameworks.",
      image: "/course-2.jpg",
    },
    {
      title: "Design Thinking for Innovation",
      description:
        "Develop innovative solutions using design thinking methodologies.",
      image: "/course-3.jpg",
    },
  ];
  return (
    <section className="py-5 bg-light-2 section courses-section">
      <div className="container">
        <h2 className="fw-bold mb-4">Featured Courses</h2>
        <div className="row g-4 mt-3">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <Image
                  src={course.image}
                  className="card-img-top"
                  width={400}
                  height={250}
                  alt={course.title}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <p className="card-text text-muted">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="fw-bold text-center my-5">Ready to Start Learning ?</h2>
        <div className="text-center">
          <Link href="/courses" className="btn btn-primary  px-3 py-3">
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
