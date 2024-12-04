import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  async function submitData(data) {
    try {
      console.log(data);
    await axios.post("http://localhost:3000/BlogData", data);
      setSubmittedData(data);
      alert("Data has been added successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  }

  return (
    <div className="container mx-2 my-5 p-4  justify-center">
      <h2 className="text-info">Blog Information</h2>
      <form method="post" onSubmit={handleSubmit(submitData)}>
        <div className="border border-solid-black p-5 rounded-5 ">
        <div className="col">
          <div className="form-outline mb-4">
            <label className="form-label">Blog Title</label>
            <input
              type="text"
              className="form-control"
              {...register("Title", {
                required: "Enter Blog Title",
                minLength: {
                  value: 3,
                  message: "At least 3 characters required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 characters allowed",
                },
              })}
            />
            <span className="text-danger">{errors.Title?.message}</span>
          </div>
        </div>

        <div className="col">
          <div className="form-outline mb-4">
            <label className="form-label">Blog Author</label>
            <input
              type="text"
              className="form-control"
              {...register("Author", {
                required: "Enter Blog Author Name",
                minLength: {
                  value: 3,
                  message: "At least 3 characters required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 characters allowed",
                },
              })}
            />
            <span className="text-danger">{errors.Author?.message}</span>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Blog Category</label>
          <input
            type="text"
            className="form-control"
            {...register("Category", {
              required: "Enter Blog Category",
              minLength: {
                value: 3,
                message: "At least 3 characters required",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 characters allowed",
              },
            })}
          />
          <span className="text-danger">{errors.Category?.message}</span>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Blog Image (URL)</label>
          <input
            type="text"
            className="form-control"
            {...register("Image", {
              required: "Enter Blog Image URL",
              minLength: {
                value: 10,
                message: "At least 10 characters required",
              },
              maxLength: {
                value: 50,
                message: "Maximum 50 characters allowed",
              },
            })}
          />
          <span className="text-danger">{errors.Image?.message}</span>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Blog Description</label>
          <textarea
            className="form-control"
            rows="4"
            {...register("Description", {
              required: "Enter Blog Description",
              minLength: {
                value: 10,
                message: "At least 10 characters required",
              },
              maxLength: {
                value: 100,
                message: "Maximum 100 characters allowed",
              },
            })}
          ></textarea>
          <span className="text-danger">{errors.Description?.message}</span>
        </div>

        <button type="submit" className="btn btn-warning btn-block mb-4">
          Submit
        </button></div>
      </form>
    </div>
  );
}

export default Form;
