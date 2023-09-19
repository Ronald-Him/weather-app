import './weatherStyle.scss';
function Weather(){
    return(
        // 
        <div className='text-gray-300 md:flex max-w-[1170px] mx-auto rounded-md mt-[4.5rem] overflow-hidder bg-[#323544]'>
            <div className='w-[37%]'>
                <div className='p-[0.625rem] flex justify-between'>
                    <h3>Monday</h3>
                    <h3>6 Oct</h3>
                </div>
                <div className='px-[1.25rem] py-[1.875rem]'>
                    <h2 className='text-[1.125rem]'>Phnom Penh</h2>
                    <div className='flex'>
                        <h1 className='text-[5.625rem] mr-[1.875rem] font-bold text-white'>20&deg;C</h1>
                        <img src="/src/assets/icons/icon-1.svg" alt="" width='90px' />
                    </div>
                    <div className='flex'>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-umberella.png" alt="" />
                            <span className='ml-[0.5rem]'>20%</span>
                        </div>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-wind.png" alt="" />
                            <span className='ml-[0.5rem]'>18km/h</span>
                        </div>
                        <div className='flex mr-[1.25rem]'>
                            <img src="/src/assets/icon-compass.png" alt="" />
                            <span className='ml-[0.5rem]'>East</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[63%]'></div>
        </div>
    )
}
export default Weather;