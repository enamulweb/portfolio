import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './../About/about.css';
import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_71q30ag', 'template_631fiyp', form.current, 'RCsf52RH3YRdR5JSR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contactpage' className='font-mono p-8'>
            <div className='section-title relative'>
                <p className='text-3xl font-semibold text-blue-600 title'>Contact</p>
            </div>
            <div className='mt-10'>
                <p>Feel free to contact with me. I'm ready to work in your projects</p>
            </div>
            <div className='mt-10 bg-gray-200 p-4 shadow-slate-50'>
                <div className='flex items-center gap-4 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaSearchLocation  className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Location:</p>
                        <p className='font-thin'>Room No. 325, Shaheed Mohammad Shah Hall, CUET</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-2 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaEnvelope className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Email:</p>
                        <p className='font-thin'>enamul9401y@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-2 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaPhoneAlt className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Call:</p>
                        <p className='font-thin'>+8801794019401</p>
                    </div>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8593.14788962041!2d91.97553487462757!3d22.459205437155436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2z4Kaa4Kaf4KeN4Kaf4KaX4KeN4Kaw4Ka-4KauIOCmquCnjeCmsOCmleCnjOCmtuCmsiDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCnnyAo4Kaa4KeB4Kef4KeH4KafKQ!5e0!3m2!1sbn!2sbd!4v1687024745160!5m2!1sbn!2sbd"  className='w-full h-96 mt-10' style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            <div>
            <p className='text-center text-5xl font-mono m-10 font-bold'>Contact Me</p>
            <form ref={form} className='p-4 border-2 rounded-lg border-white  mx-auto font-mono w-80 lg:w-96' onSubmit={sendEmail}>
            <label className='text-lg text-white'>Name</label>
            <br/>
            <input type="text" placeholder='Name' className='rounded w-full h-8 border-2 border-rose-600 mb-4 focus:border-rose-600 placeholder:pl-2' name="user_name" />
            <br/>
            <label className='text-lg text-white'>Email</label>
            <br/>
            <input type="email" placeholder='Email' className='rounded w-full h-8 border-2 border-rose-600 mb-4 focus:border-rose-600 placeholder:pl-2' name="user_email" />
            <br/>
            <label className='text-lg text-white'>Message</label>
            <br/>
            <textarea name="message" placeholder='Your Message' className='rounded w-full h-32 border-2 border-rose-600 mb-4 focus:border-rose-600 placeholder:pl-2' />
            <br/>
            <input type="submit" className='btn btn-error text-white' value="Send" />
            </form>
        </div>
            </div>
            
        </div>
    );
};

export default Contact;