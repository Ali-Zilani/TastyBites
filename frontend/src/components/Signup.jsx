import React from "react";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center mt-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create a account</h3>
          <div className="form-control">
            {/* email input */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("eamil")}
            />
          </div>
          {/* password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-1">
                Forgot password?
              </a>
            </label>
          </div>
          {/* error text */}

          {/* Login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signin"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center m-2">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-blue-600 underline ml-1"
            >Login</button>
            <Modal/>
          </p>
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
            <Link to='/'>✕</Link>
         </button>
        </form>
        {/* social media icon for signin */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
