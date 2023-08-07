import React from 'react';
import './../About/about.css'
import { saveAs } from 'file-saver';
import {FaFilePdf} from 'react-icons/fa';


const Resume = () => {
    const handleDownload = () => {
        // Fetch the PDF file from the server or use a local file
        const fileUrl = '/Resume-of-Samshul-Islam.pdf';
      
        // Fetch the file using an AJAX request or any method of your choice
        fetch(fileUrl)
          .then((response) => response.blob())
          .then((blob) => {
            // Save the file using FileSaver.js
            saveAs(blob, 'Resume-of-Samshul-Islam.pdf');
          })
          .catch((error) => {
            console.error('Error occurred while downloading the PDF:', error);
          });
      };
    return (
        <div id='resumepage'>
            <div className='p-8'>
                <div className='section-title relative'>
                    <p className='text-3xl font-semibold text-blue-600 title'>Resume</p>
                </div>
                <div className='mt-10'>
                    <p>As I'm alive and I've something to show you which may represent myself to you in a well, organized way. Please Click Here to download my resume in PDF Format</p>
                    <p onClick={handleDownload} className='btn mt-4 btn-outline'><FaFilePdf/> Download Resume</p>
                </div>
                <div className='lg:flex'>
                    <div className='lg:w-1/2'>
                    <div className='mt-10'>
                    <p className='text-red-700 font-semibold text-3xl pb-4 border-b-2'>Education</p>
                </div>
                <div className='resume-item mt-4'>
                    <h4 className='uppercase font-semibold text-2xl mb-2'>Electrical & Electronic Engineering</h4>
                    <span className='box-border pl-3 pr-3 pt-1 pb-1 bg-[#a7c7f3]'>2019 - Present</span>
                    <p className='mt-2'>
                        <em>Chittagong University of Engineering & Technology(CUET)</em>
                    </p>
                    <p className='mt-2 text-gray-500'>
                    I love to do Innovative things so I choose Engineering and I love to work in Electronics and Power. It is so satisfying to see that Electronics understanding you
                    </p>
                </div>
                <div className='resume-item'>
                    <h4 className='uppercase font-semibold text-2xl mb-2'>HSC MAJOR (SCIENCE, GPA 5.00)</h4>
                    <span className='box-border pl-3 pr-3 pt-1 pb-1 bg-[#a7c7f3]'>2017 - 2019</span>
                    <p className='mt-2'>
                        <em>Hamdard Public College</em>
                    </p>
                </div>
                <div className='resume-item'>
                    <h4 className='uppercase font-semibold text-2xl mb-2'>SSC MAJOR (SCIENCE, GPA 5.00)</h4>
                    <span className='box-border pl-3 pr-3 pt-1 pb-1 bg-[#a7c7f3]'>2015 - 2017</span>
                    <p className='mt-2'>
                        <em>Feni Central High School</em>
                    </p>
                </div>
                    </div>

                    <div className='lg:w-1/2 lg:ml-10'>
                        <div className='mt-10'>
                        <p className='text-red-700 font-semibold text-3xl pb-4 border-b-2'>Language</p>
                        </div>
                        <div className='resume-item mt-2'>
                            <h4 className='uppercase font-semibold text-2xl mb-2'>Bengali</h4>
                            <p className='mt-2'>
                                Native Speaker
                            </p>
                        </div>
                        <div className='resume-item'>
                            <h4 className='uppercase font-semibold text-2xl mb-2'>English</h4>
                            <p className='mt-2'>
                                Comportable
                            </p>
                        </div>
                        <div className='resume-item'>
                            <h4 className='uppercase font-semibold text-2xl mb-2'>Hindi</h4>
                            <p className='mt-2'>
                                Conversational
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Resume;