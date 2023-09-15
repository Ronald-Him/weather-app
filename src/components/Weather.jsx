import './weatherStyle.scss';
function Weather(){
    return(
        <div className="forecast-table">
            <div className="container mx-auto px-32">
                <div className="w-full bg-[#323544] table table-fixed truncate rounded-xl mt-[50px]">
                    <div className="today table-cell align-top">
                        <div className="float-left float-right">
                            <div className=''>Monday</div>
                            <div className=''>6 Oct</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='location'>New York</div>
                            <div className='degree'>
                                <div className='num'>23<sup>o</sup>C</div>
                                <div className='forecast-icon'>
                                    <img src="/src/assets/icons/icon-1.svg" alt="" className='w-32 h-32'/>
                                </div>
                            </div>
                            <span><img src="/src/assets/icon-umberella.png" alt="" />20%</span>
                            <span><img src="/src/assets/icon-wind.png" alt="" />18km/h</span>
                            <span><img src="/src/assets/icon-umberella.png" alt="" />East</span>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                    <div className='forecast'>
                        <div className='header'>
                            <div className=''>Tuesday</div>
                        </div>
                        <div className='forecast-content'>
                            <div className='forecast-icon'>
                                <img src="/src/assets/icons/icon-3.svg" alt="" />
                            </div>
                            <div className="degree">23<sup>o</sup>C</div>
							<small>18<sup>o</sup></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;