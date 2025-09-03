import React from "react";
import { useForm } from "react-hook-form";
import API from "../api";

function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append("image", data.image[0]);

    try {
      await API.post("/schools/add", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("School added successfully!");
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" {...register("name", { required: true })} />
          {errors.name && <p className="text-danger">Name is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email_id && <p className="text-danger">Valid email is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Address</label>
          <input className="form-control" {...register("address", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label">City</label>
          <input className="form-control" {...register("city", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label">State</label>
          <input className="form-control" {...register("state", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Contact</label>
          <input type="number" className="form-control" {...register("contact", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Image</label>
          <input type="file" className="form-control" {...register("image", { required: true })} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add School</button>
        </div>
      </form>
    </div>
  );
}

export default AddSchool;
