import React from "react";

// export const Course = (data) => {
export const Course = ({ title, desc, image }) => {
  return (
    <>
      <div className="col-md-4 mb-2">
        <div class="card">
          <img src={image} className="card-img-top" alt={title} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
