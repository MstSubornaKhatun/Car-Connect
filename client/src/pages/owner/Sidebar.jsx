import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState(null);

  const updateImage = () => {
    if (image) {
      user.image = URL.createObjectURL(image);
      setImage(null);
    }
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-start pt-8 max-w-14 md:max-w-60 w-full border-r border-gray-200 text-sm">

      {/* Profile Section */}
     
      <div className="group relative w-full flex flex-col items-center">

        
        <label htmlFor="image" className="relative cursor-pointer">

          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt="profile"
            className="h-12 md:h-16 w-12 md:w-16 rounded-full object-cover"
          />

          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) setImage(e.target.files[0]);
            }}
          />

       
          <div className="absolute inset-0 bg-black/20 rounded-full hidden group-hover:flex items-center justify-center">
            <img src={assets.edit_icon} alt="edit" className="w-4" />
          </div>
        </label>

      
        {image && (
          <button
            type="button"
            onClick={updateImage}
            className="absolute -top-8 right-0 cursor-pointer flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded"
          >
            Save
            <img src={assets.check_icon} width={12} alt="save" />
          </button>
        )}

        {/* Name */}
        <p className="mt-2 text-base max-md:hidden font-medium">
          {user?.name}
        </p>
      </div>

      {/* Menu Section */}
      <div className="w-full mt-8">
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-3 w-full py-3 pl-4 ${
                isActive ? "bg-primary/10 text-primary" : "text-gray-600"
              }`}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt={link.name}
              />

              <span className="max-md:hidden">{link.name}</span>

              {/* Active blue bar */}
              <div
                className={`${
                  isActive ? "bg-primary" : ""
                } w-1.5 h-8 rounded-l absolute right-0`}
              ></div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;