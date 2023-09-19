import { Fragment } from "react"
import './home.css'
import Weather from "../components/Weather";
function Home(){
    return (
        <Fragment>
            <div className="img-Background"></div>
            <Weather/>
            <div className='bg-[#1e202b]'>
            <div className='container mx-auto px-32 pt-[50px] bg-[#1e202b]'>
                <h2 className='text-white text-3xl mb-[30px]'>Live Camera </h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-6'>
                        <div className=''>
                            <figure className='mb-[20px] cursor-pointer'>
                                <img src="/src/assets/live-camera-1.jpg" alt="" className='rounded-lg block h-auto w-full max-w-full'/>
                                {/* <img src="/src/assets/play-button.png" alt="" className="absolute m-auto"/> */}
                                
                            </figure>
                            <h3 className='text-white'>New York</h3>
                            <small className='text-slate-500'>8 oct, 8:00AM</small>
                        </div>
                        <div className=''>
                            <figure className='mb-[20px] cursor-pointer'><img src="/src/assets/live-camera-2.jpg" alt="" className='rounded-lg block h-auto w-full max-w-full'/></figure>
                            <h3 className='text-white'>Los Angeles</h3>
                            <small className='text-slate-500'>8 oct, 8:00AM</small>
                        </div>
                        <div className=''>
                            <figure className='mb-[20px] cursor-pointer'><img src="/src/assets/live-camera-3.jpg" alt="" className='rounded-lg block h-auto w-full max-w-full'/></figure>
                            <h3 className='text-white'>Chicago</h3>
                            <small className='text-slate-500'>8 oct, 8:00AM</small>
                        </div>
                        <div className=''>
                            <figure className='mb-[20px] cursor-pointer'><img src="/src/assets/live-camera-4.jpg" alt="" className='rounded-lg block h-auto w-full max-w-full'/></figure>
                            <h3 className='text-white'>London</h3>
                            <small className='text-slate-500'>8 oct, 8:00AM</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home;