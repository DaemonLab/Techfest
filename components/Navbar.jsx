import React, {useState} from 'react';
import Link from "next/link";
import Button from './Button';

const links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Sponsors", link: "#sponsors" },
  ];

function Navbar() {

  const registerHandler = ()=>{
    console.log("C")
    alert("Clicked")
  }
  return (
    <>
      <div className="w-full top-0 left-0 colo opacity-100 z-50">
        <div className="md:flex items-center justify-between colo py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <span className="text-3xl text-cyan-900 mr-1">
              <ion-icon name="logo-wechat" className="kk"></ion-icon>
              <h1 className="inline ii text-white">Techfest</h1>
            </span>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static z-0 colo md:z-50 z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in"
              }`}
          >
            {links.map((link) => (
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-white hover:text-gray-400 duration-500 font-robotoCondensed" href={link.link}> {link.name}</Link>
              </li>
            ))}
            <div onClick={registerHandler} className="ml-5">
              <Button value={`Register`}></Button>
            </div>
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar