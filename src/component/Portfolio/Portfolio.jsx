import React, { useState } from 'react';
import './../About/about.css';
import { FaGithub, FaLink, FaPlus } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';
const Portfolio = () => {
    const [isFlipped,setisFlipped] = useState(false)
     const handleClick=(e)=> {
        e.preventDefault();
        setisFlipped(!isFlipped)
      }
    return (
        <div id='portfoliopage' className='bg-[#f5f8fd] p-8 font-mono'>
            <div className='section-title relative'>
                    <p className='text-3xl font-semibold text-blue-600 title'>Portfolio</p>
            </div>
            <div className='mt-10'>
                <p>I have done some projects in this years. These projects may represent my working Skills.</p>
            </div>
            <div className='lg:flex gap-4'>
   
               <div className='mt-10 font-mono'>
                    <div className='w-80 text-center border border-gray-300'>
                        <div className='h-10 border-b-2 border-gray-400 flex justify-center items-center bg-[#e8dfdfe9]'>
                            <p>Language Center</p>
                        </div>
                        <div className='relative project-card'>
                        <div className='h-92 p-4 '>
                            <img  className='h-[600px] w-full' src="./languagecenter-webpage.png" alt="" />
                        </div>
                        <div className='project-card-border absolute w-full bottom-4'>
                            <div className='h-12 flex'>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://github.com/enamulweb/languageCentre" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white'/></a>
                                </div>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://languagecenter-33d13.web.app/" target="_blank" rel="noopener noreferrer"><FaLink className='text-white'/></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 font-mono'>
                    <div className='w-80 text-center border border-gray-300'>
                        <div className='h-10 border-b-2 border-gray-400 flex justify-center items-center bg-[#e8dfdfe9]'>
                            <p>Learn With Toys</p>
                        </div>
                        <div className='relative project-card'>
                        <div className='p-4 '>
                            <img className='h-[600px] w-full' src="./learn-with-toys-web-app.png" alt="" />
                        </div>
                        <div className='project-card-border absolute w-full bottom-4'>
                            <div className='h-12 flex'>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://github.com/enamulweb/toyMarket" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white'/></a>
                                </div>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://learn-with-toys.web.app/" target="_blank" rel="noopener noreferrer"><FaLink className='text-white'/></a>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className='mt-10 font-mono'>
                    <div className='w-80 text-center border border-gray-300'>
                        <div className='h-10 border-b-2 border-gray-400 flex justify-center items-center bg-[#e8dfdfe9]'>
                            <p>SPI Printer</p>
                        </div>
                        <div className='relative project-card'>
                        <div className='p-4 '>
                            <img className='h-[600px] w-full' src="./spiprinter.png" alt="" />
                        </div>
                        <div className='project-card-border absolute w-full bottom-4'>
                            <div className='h-12 flex'>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://github.com/enamulweb/printInfo" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white'/></a>
                                </div>
                                <div className='bg-[#20a8c1] h-full w-1/2 flex justify-center items-center border-r-2'>
                                    <a href="https://printinfo-846d5.web.app/" target="_blank" rel="noopener noreferrer"><FaLink className='text-white'/></a>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;