import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-container-section position-relative">
      <div className="hero-image-wrapper">
        <Image
          src="/circle.png"
          alt="background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
          priority
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="hero-text-center text-center">
            <h2 className="hero-header p-3">
              Quality education is a key to your future success
            </h2>
            <p className="hero-p p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/courses">
              <button className="btn btn-dark m-2 text-white">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
