"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStairs } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import ThemeToggle from "../ThemeToggle";
export default function Header() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <header className="shadow-sm pt-3 pb-2">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <FontAwesomeIcon icon={faStairs} className="me-2" />
            EduHub
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/courses">
                  Courses
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " href="/login">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/role-selection" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
