import React from 'react';
import { FaEnvelope,  FaFacebookF, FaFilePdf, FaGithub, FaGraduationCap, FaLinkedinIn, FaPhone, FaSearchLocation } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import './about.css'

const About = () => {
    
    return (
        <div id='aboutpage' className='font-mono'> 
            <div className='p-8'>
            <div className='section-title relative'>
                <p className='text-3xl font-semibold text-blue-600 title'>About</p>
            </div>
            <div className='pt-4 font-mono'>
                <h1>I'm a learner, a tech lover. I like to explore new technologies. Furthermore, I love to pass my free time by coding or problem solving. I always focus on getting the highest output from my work.</h1>
            </div>
            <div className='pt-4 mt-6 lg:flex gap-14 font-mono'>
                <div className='w-full lg:w-2/3'>
                    <h1 className='text-blue-600 font-bold font-mono text-2xl'>MERN Stack Engineer</h1>
                    <p>I'm a native MERN stack developer. I also like to work with Arduino, Matlab.</p>
                    <ul className='mt-10 font-mono'>
                        <li><p className='flex items-center'><FaGraduationCap className='text-blue-800 text-5xl mr-2'/> Studing Electrical & Electronic Engineering at Chittagong University of Engineering & Technology</p></li>
                        <li><p className='flex items-center'><FaPhone className='text-blue-800 lg:text-3xl mr-4 mt-2'/> +8801816244741</p></li>
                        <li><p className='flex items-center'><FaEnvelope className='text-blue-800 lg:text-3xl mr-4 mt-2'/>samshul2001@gmail.com</p></li>
                        <li><p className='flex items-center'><FaSearchLocation className='text-blue-800 lg:text-3xl mr-4 mt-2'/>Chittagong, Bangladesh</p></li>
                    </ul>
                </div>
                <div className='flex justify-center mt-5 lg:mt-0'>
                    <img className='h-56 rounded-full' src="https://i.ibb.co/QCCwtp9/2020-03-07-at-4-17-09-PM.jpg" alt="" />
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-4 p-4 mb-4">
                <span className=" hover:bg-blue-800 hover:text-white border-4 border-[#71797E] rounded-full text-blue-900 text-3xl p-2"><a href='https://www.linkedin.com/in/shakileeecuet/' target='_blank'><FaLinkedinIn /></a></span>
                <span className=" hover:bg-blue-800 hover:text-white border-4 border-[#71797E] rounded-full text-blue-900 text-3xl p-2"><a href='https://github.com/Samshuleeecuet' target='_blank'><FaGithub/></a></span>
                <span className=" hover:bg-blue-800 hover:text-white border-4 border-[#71797E] rounded-full text-blue-900 text-3xl p-2"><a href='https://www.facebook.com/Shakil.EEE.CUET' target='_blank'><FaFacebookF/></a></span>
                <span className=" hover:bg-blue-800 hover:text-white border-4 border-[#71797E] rounded-full text-blue-900 text-3xl p-2"><a href="mailto:samshul2001@gmail.com" target="_blank"><FaEnvelope/></a></span>
            </div>
            </div>
            <div className='bg-[#f5f8fd] p-8'>
            <div className='about-title relative'>
                <p className='text-3xl font-semibold text-blue-600 title'>Skills</p>
            </div>
            <div>
            <div className='mt-10 pb-10'>
                <div>
                <div className='flex justify-between'>
                <p>ReactJS</p>
                <span>95%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'95%'}}>95%</div>
                </div>
                </div>
                <div>
                <div className='flex justify-between mt-2'>
                <p>ExpressJS</p>
                <span>80%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'80%'}}>80%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>MongoDB</p>
                <span>85%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'85%'}}>85%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>REST API</p>
                <span>90%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'90%'}}>90%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>NodeJS</p>
                <span>60%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'60%'}}>60%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>Tailwind</p>
                <span>95%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'95%'}}>95%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>Bootsrap</p>
                <span>80%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'80%'}}>80%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>PHP</p>
                <span>65%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'65%'}}>65%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>MySQL</p>
                <span>60%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'60%'}}>60%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>MATLAB</p>
                <span>70%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'70%'}}>70%</div>
                </div>
                </div>
                <div>
                <div className='flex mt-2 justify-between'>
                <p>ARDUINO</p>
                <span>75%</span>
                </div>
                <div className='w-full bg-[#dce8f8]'>
                <div className="bg-[#149ddd] text-xs font-medium text-white text-center p-0.5 leading-none" style={{width:'75%'}}>75%</div>
                </div>
                </div>


            </div>
            </div>
            </div>

        </div>
    );
};

export default About;