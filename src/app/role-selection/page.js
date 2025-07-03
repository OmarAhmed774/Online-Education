"use client";

import { useRouter } from "next/navigation";

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleSelect = (role) => {
    router.push(`/register?role=${role}`);
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div
        className="card p-5 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Select Account Type</h2>
        <button
          onClick={() => handleSelect("student")}
          className="btn btn-primary mb-3 w-100"
        >
          Student
        </button>
        <button
          onClick={() => handleSelect("teacher")}
          className="btn btn-secondary w-100"
        >
          Teacher
        </button>
      </div>
    </div>
  );
}
