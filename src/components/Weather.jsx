import './weatherStyle.scss';
import SearchBar from './SearchBar';
import { Fragment } from 'react';
function Weather(){
    return(
        <Fragment> 
        <SearchBar/>
        <div className='text-gray-300 md:flex max-w-[1170px] max-h-[300px] mx-auto rounded-lg mt-[4.5rem] overflow-hidden bg-[#323544]'>
            <div className='w-[37%]'>
                <div className='p-[0.625rem] flex justify-between bg-[#2d303d]'>
                    <h3>Monday</h3>
                    <h3>6 Oct</h3>
                </div>
                <div className='px-[1.25rem] py-[1.875rem]'>
                    <h2 className='text-[1.125rem] location'>Phnom Penh</h2>
                    <div className='flex'>
                        <h1 className='text-[5.625rem] mr-[1.875rem] font-bold text-white'>20&deg;C</h1>
                        <img src="/src/assets/icons/icon-1.svg" alt="" width='90px' />
                    </div>
                    <div className='flex'>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-umberella.png" alt="" />
                            <span className='ml-[0.5rem] humidity-percentage'>20%</span>
                        </div>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-wind.png" alt="" />
                            <span className='ml-[0.5rem] wind-speed'>18km/h</span>
                        </div>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-compass.png" alt="" />
                            <span className='ml-[0.5rem]'>East</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[63%] grid grid-cols-6'>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#222530]'>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[100%] flex flex-col text-center bg-[#262936]'>
                        <img src="/src/assets/icons/icon-2.svg" alt="" width='90px'/>
                        <h3 className='text-[1.8rem] text-white font-bold mt-2'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#2d303d]'>
                        <span>Wednesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[2.37rem] flex flex-col text-center'>
                        <img src="/src/assets/icons/icon-3.svg" alt="" width='90px' />
                        <h3 className='text-[1.8rem] text-white font-bold mt-7'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#222530]'>
                        <span>Thursday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[100%] flex flex-col text-center bg-[#262936]'>
                        <img src="/src/assets/icons/icon-4.svg" alt="" width='90px' />
                        <h3 className='text-[1.8rem] text-white font-bold mt-4'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#2d303d]'>
                        <span>Friday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[2.37rem] flex flex-col text-center'>
                        <img src="/src/assets/icons/icon-5.svg" alt="" width='90px' />
                        <h3 className='text-[1.8rem] text-white font-bold mt-9'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#222530]'>
                        <span>Saturday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[100%] flex flex-col text-center bg-[#262936]'>
                        <img src="/src/assets/icons/icon-6.svg" alt="" width='90px' />
                        <h3 className='text-[1.8rem] text-white font-bold mt-[2.40rem]'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
                <div className=''>
                    <div className='p-[0.625rem] text-center bg-[#2d303d]'>
                        <span>Sunday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[2.37rem] flex flex-col text-center'>
                        <img src="/src/assets/icons/icon-1.svg" alt="" width='90px' />
                        <h3 className='text-[1.8rem] text-white font-bold mt-[2rem]'>23&deg;C</h3>
                        <small className='text-[1rem]'>18&deg;C</small>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default Weather;