import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <footer className="pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">EduHub</h4>
            <p className=" small">
              Empowering your learning journey with high-quality courses and
              expert instructors.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className=" mb-3">Explore</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" style={{ color: "var(--light)" }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/" style={{ color: "var(--light)" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} EduHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
