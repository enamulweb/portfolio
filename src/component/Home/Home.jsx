import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './home.css'
import './../About/about.css'
import { saveAs } from 'file-saver';
import {FaFilePdf} from 'react-icons/fa';

const Home = () => {
  const handleDownload = () => {
    // Fetch the PDF file from the server or use a local file
    const fileUrl = '/public/My Resume.pdf';
  
    // Fetch the file using an AJAX request or any method of your choice
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Save the file using FileSaver.js
        saveAs(blob, 'My Resume.pdf');
      })
      .catch((error) => {
        console.error('Error occurred while downloading the PDF:', error);
      });
  };
    return (
        <div id='homepage' className='min-h-screen flex flex-col justify-center items-center -mt-2 -ml-2'>
            <p className='text-3xl lg:text-5xl font-bold text-white font-mono'>Md Enamul </p><br/>
            <p className=' lg:text-3xl text-white font-mono'>I'm <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'an Electrical & Electronics Engineering Student.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'MERN Stack Developer.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{fontStyle:'bold',textDecoration:'underline', display: 'inline-block', marginBottom:'15px', textDecorationColor:'blue' }}
      repeat={Infinity}
    /></p>
    <p onClick={handleDownload} className='btn mt-4 btn-outline'><FaFilePdf/> Download Resume</p>
        </div>
    );
};

export default Home;