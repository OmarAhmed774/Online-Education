import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "./login.css";
export default function page() {
  return (
    <div className="login-box text-center">
      <h2 className="login-title mb-2">Login</h2>
      <p className="text-muted mb-4">
        Welcome back! Please log in to access your account.
      </p>

      <form>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="mb-2 text-start">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your Password"
            required
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-decoration-none small">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="btn btn-black w-100 mb-3">
          Login
        </button>

        <div className="text-muted mb-3">OR</div>

        <button
          type="button"
          className="btn google-btn w-100 d-flex align-items-center justify-content-center mb-3"
        >
          <FontAwesomeIcon icon={faGoogle} className="google-logo" />
          Login with Google
        </button>
        <p className="small">
          Don&apos;t have an account?
          <Link href="/register" className=" ms-2 text-decoration-none">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
