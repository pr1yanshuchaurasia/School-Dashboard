import React, { useEffect, useState } from "react";
import API from "../api";
import SchoolCard from "../components/SchoolCard";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    API.get("/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Schools List</h2>
      <div className="row g-4">
        {schools.map((school) => (
          <div className="col-md-4" key={school.id}>
            <SchoolCard school={school} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowSchools;
