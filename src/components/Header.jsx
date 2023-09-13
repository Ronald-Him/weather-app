// import React from 'react';

import { Fragment } from "react";

const Header = () => {

    let Links = [
        {name: 'Home', link: '/'},
        {name: 'News', link: '/'},
        {name: 'Live cameras', link: '/'},
        {name: 'Photos', link: '/'},
        {name: 'Contacts', link: '/'},
    ]

    return (
        <Fragment>
        <div className='shadow-md w-full fixed top-0 left-0 bg-[#1e202b]'>
            <div className='md:px-40 py-12 px-20 md:flex justify-between items-center'>
                <div className="flex cursor-pointer items-center gap-4 ">
                    <img src="/src/assets/logo@2x.png" alt="logo" className=" w-16  " />
                    <div className="flex flex-col">
                        <span className="text-slate-100 text-l font-bold">Company name</span>
                        <span className="text-gray-300 text-xs">tagline goes here</span>
                    </div>
                </div>
                <ul className="md:flex pl-9 md:pl-0 gap-4">
                {
                    Links.map((link, index) => (
                        <li key={index} className="text-slate-100 my-7 md:my-0 md:ml-8 hover:text-[#009ad8] py-1 px-5 border-[]  ">
                            <a href="/">{link.name}</a>
                        </li>))
                }
            </ul>
            </div>

            
        </div>
        </Fragment>
    );
};

export default Header;