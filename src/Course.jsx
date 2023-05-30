import React from "react";

// export const Course = (data) => {
export const Course = ({ title, desc, image }) => {
  return (
    <>
      <div className="">
        <h3>{title}</h3>
        <img src={image} alt="" />
        <p>{desc}</p>
      </div>
    </>
  );
};
