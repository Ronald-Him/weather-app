function Dummy(){
    return(
        <div className='text-[0.875rem] text-gray-300 bg-third md:flex font-roboto max-w-[1170px] mx-auto rounded-md mt-[4.5rem] overflow-hidden'>
        <div className='today-forecast w-[37%] ' >
            <div className='head-forecast p-[0.625rem] flex justify-between '>
                <h3>Monday</h3>
                <h3>6 Oct</h3>
            </div>
            <div className='body-forecast px-[1.25rem] py-[1.875rem]'>
                <h2 className='text-[1.125rem]' >{data.name}</h2>
                <div className='flex'>
                    <h1 className='text-[5.625rem] mr-[1.875rem] font-bold text-white' >{temp}&deg;C</h1>
                    <img src="images/icons/icon-1.svg" alt="" width='90px' />
                </div>
                <div className='flex'>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-umberella.png" alt="" />
                        <span className='ml-[0.5rem]'>{data?.main?.humidity}%</span>
                    </div>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-wind.png" alt="" />
                        <span  className='ml-[0.5rem]'>{data?.wind?.speed}km/h</span>
                    </div>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-compass.png" alt="" />
                        <span  className='ml-[0.5rem]'>East</span>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[63%] grid grid-cols-6 even'>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center '>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px' className='ml-[1.3rem] mb-[1.25rem]' />
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center'>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px'className='ml-[1.3rem] mb-[1.25rem]'/>
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center'>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px' className='ml-[1.3rem] mb-[1.25rem]'/>
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center'>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px'className='ml-[1.3rem] mb-[1.25rem]'/>
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center'>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px'className='ml-[1.3rem] mb-[1.25rem]'/>
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
            <div className='forecast'>
                <div className='p-[0.625rem] text-center'>
                    <span>Tuesday</span>
                </div>
                <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                    <img src="images/icons/icon-2.svg" alt="" width='48px'className='ml-[1.3rem] mb-[1.25rem]'/>
                    <h3 className='text-[1.5rem] text-white font-bold' >23&deg;C</h3>
                    <small className='text-[1rem]' >18&deg;</small>
                </div>  
            </div>
        </div>
        </div>
    )
}

export default Dummy;