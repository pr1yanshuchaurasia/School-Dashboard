import React from "react";

function SchoolCard({ school }) {
  return (
    <div className="card shadow-sm">
      <img src={`http://localhost:5000/uploads/schoolImages/${school.image}`} 
           className="card-img-top" alt={school.name} height="200" />
      <div className="card-body">
        <h5 className="card-title">{school.name}</h5>
        <p className="card-text">{school.address}, {school.city}</p>
      </div>
    </div>
  );
}

export default SchoolCard;
