import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "white",
];

const LayoutExample = () => {
  return (
    <div className="container p-4">
      <h1 className="mb-4">ตัวอย่างสีตัวอักษร Bootstrap + Lorem Ipsum</h1>
      {colors.map((clr) => (
        <p key={clr} className={`text-${clr} bg-${clr === "light" ? "dark" : ""} p-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. {/* Emmet: p>lorem10 */}
          <span className={`fw-bold`}>{`.text-${clr}`}</span>
        </p>
      ))}
      <h2 className="mt-4"></h2>
      <h1 className="text-danger" style={{ fontSize: 30 }}>
      </h1>
    </div>
  );
};

export default LayoutExample;