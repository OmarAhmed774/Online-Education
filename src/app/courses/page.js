import React from "react";
import Image from "next/image";
export default function page() {
  const courses = [
    {
      title: "Web Design Fundamentals",
      description: `Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create
          visually appealing anpngser-friendly websites.`,
      image: "/course-4.png",
    },
    {
      title: "UI/UX Design",
      description: ` Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).
      Learn design principles, wireframing, prototyping, and usability testing techniques`,
      image: "/course-5.png",
    },
    {
      title: "Graphic Design for Beginners",
      description: `Discover the fundamentals of graphic design, including typography,
          color theory, layout design, and image manipulation techniques.
          Create visually stunning designs for print and digital media.`,
      image: "/course-6.png",
    },
    {
      title: "Front-End Web Development",
      description: ` Become proficient in front-end web development. Learn HTML, CSS,
          JavaScript, and popular frameworks like Bootstrap and React. Build
          interactive and responsive websites.`,
      image: "/course-7.png",
    },
    {
      title: "Front-End Web Development",
      description: ` Become proficient in front-end web development. Learn HTML, CSS,
          JavaScript, and popular frameworks like Bootstrap and React. Build
          interactive and responsive websites.`,
      image: "/course-8.png",
    },
    {
      title: "Front-End Web Development",
      description: ` Become proficient in front-end web development. Learn HTML, CSS,
          JavaScript, and popular frameworks like Bootstrap and React. Build
          interactive and responsive websites.`,
      image: "/course-9.png",
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
      </div>
    </section>
  );
}
