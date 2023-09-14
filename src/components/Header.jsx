// import React from 'react';

import { Fragment } from "react";
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {

    let Links = [
        {name: 'Home', link: '/'},
        {name: 'News', link: '/'},
        {name: 'Live Cameras', link: '/'},
        {name: 'Photos', link: '/'},
        {name: 'Contacts', link: '/'},
    ]

    let [isOpen, setisOpen] = useState(false);

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

                <div onClick={()=> setisOpen(!isOpen)} className="text-slate-100 w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {
                        isOpen ? <XMarkIcon/> : <Bars3Icon/>
                    }
                    
                </div>
                    

                <ul className={`md:flex pl-9 md:pl-0 gap-4 md:items-center md:pb-0 pb-12 absolute md:static bg-[#1e202b] md:z-auto z-[1] left-0 w-full md:w-auto transistion-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} `}>
                {
                    Links.map((link, index) => (
                        <li key={index} className="text-slate-100 button button-hover cursor-pointer">
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