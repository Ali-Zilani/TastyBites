import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";


function Profile({user}) {
    //console.log({user})
    const {photoURL:userImageURL} = {user} ;
    const {logout} = useContext(AuthContext);
    const handleLogout = () => {
      logout()
      .then(()=>{
        alert("Logout Successful!")
      }).catch((err)=>{
 
      })
    }
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full ">
             {
              userImageURL ? <img src={userImageURL} alt="profile image"/> :  <img
              alt="Tailwind CSS Navbar component"
              className="item-center w-4 h-4 rounded-full"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg" />
             }
             </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

            {/* Sidebar content here */}
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
