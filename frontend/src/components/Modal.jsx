import React, { useContext } from "react";
import { FaGoogle,FaFacebookF,FaGithub  } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import { AuthContext } from "../contexts/AuthProvider";

function Modal() {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const {signUpWithGmail} = useContext(AuthContext);

  const onSubmit = data => console.log(data);

  const handleLogin = ()=>{
    signUpWithGmail()
    .then((res) => {
      const user = res.user 
      alert('Login Successfull!')
    }).catch((err) => console.log(err))
  }


  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
            <h3 className="font-bold text-lg">Please Login!</h3>
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
              <input type="submit" value="Login" className="btn bg-green text-white" />
            </div>
            {/* close button */}
            <button 
            html="my-modal-5"
            onClick={()=>document.getElementById('my_modal_5').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
            ✕
            </button>
            <p className="text-center m-2">Don't have an account? <Link to='/signup' className="text-blue-600 underline ml-1">Signup Now</Link></p>
          </form>
          {/* social media icon for sign in*/}
          <div className="text-center space-x-3 mb-5">
            <button onClick={handleLogin} className="btn btn-circle hover:bg-green hover:text-white"><FaGoogle/></button>
            <button className="btn btn-circle hover:bg-green hover:text-white"><FaFacebookF /></button>
            <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub/></button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
