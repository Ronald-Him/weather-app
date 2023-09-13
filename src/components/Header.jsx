// import React from 'react';

import { Fragment } from "react";

const Header = () => {



    return (
        <Fragment>
        <div className='shadow-md w-full bg-[#1e202b]'>
            <div className=' md:px-40 py-10 px-7'>
                <div className="flex cursor-pointer items-center gap-4 ">
                    <img src="/src/assets/logo@2x.png" alt="logo" className=" w-16  " />
                    <div className="flex flex-col">
                        <span className="text-slate-100 text-l font-bold">Company name</span>
                        <span className="text-gray-300 text-xs">tagline goes here</span>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Header;