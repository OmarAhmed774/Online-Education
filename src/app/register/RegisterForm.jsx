"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (role !== "student" && role !== "teacher") {
      setIsValid(false);
      router.push("/role-selection");
    }
  }, [role, router]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="text-center mb-4">
          Register as {role === "student" ? "Student" : "Teacher"}
        </h3>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name :
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          {role === "teacher" && (
            <div className="mb-3">
              <label className="form-label" htmlFor="Specialization">
                Specialization :
              </label>
              <input type="text" className="form-control" id="Specialization" />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email :
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Password">
              Password :
            </label>
            <input type="password" className="form-control" id="Password" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Repeat-Password">
              Repeat Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="Repeat-Password"
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Register :
          </button>
        </form>
      </div>
    </div>
  );
}
