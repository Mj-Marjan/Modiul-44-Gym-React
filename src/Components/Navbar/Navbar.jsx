import React, { useState } from "react";
import Links from "./Links";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <Links key={route.id} route={route}></Links>
  ));
  return (
    <div>
      <nav className="flex justify-between">
        <span className=" text-black flex gap-6" onClick={() => setOpen(!open)}>
          <ul
            className={`md:hidden absolute
               ${open ? "top-9" : "-top-36"}
               bg-amber-200 ml-5 duration-1000`}
          >
            {links}
          </ul>

          {open ? (
            <IoClose className="md:hidden text-3xl" />
          ) : (
            <TiThMenu className="md:hidden text-3xl" />
          )}

          <h3 className="ml-7">My Navbar</h3>

        </span>
        <ul className="md:flex hidden">{links}</ul>
        <h3>Sign in</h3>
      </nav>
      {/* {
                navigationData.map(route => <i className='mr-10'>
                    <a href={route.path}>{route.name}</a>
                </i>)
            } */}
    </div>
  );
};

export default Navbar;
