'use client'
import { H_Two } from '@/Utils/Typography'
import { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
const Contact = () => {
    const [phone, setPhone] = useState("");

    return (
        <div
            className="relative bg-cover bg-center py-8 md:py-16"
            style={{ backgroundImage: "url('/assets/images/car6.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-background bg-opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
                <H_Two className="text-center text-primary mb-6 uppercase" text="get in touch" />
                <form >
                  <div  className='flex w-full flex-col md:flex-row gap-4'>

    <div className='space-y-4'>
        <input 
            required 
            type="text" 
            name="name" 
            id="name" 
            min={2} 
            max={30} 
            placeholder='Name'  
            className='min-w-[300px] max-w-[470px] w-full p-3 rounded-md bg-background text-white placeholder-gray-400 
            focus:outline-none ring-1 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg'
        />
        
        <input 
            required 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email Address' 
            className='min-w-[300px] max-w-[470px] w-full  p-3 rounded-md bg-background text-white placeholder-gray-400 
            focus:outline-none ring-1 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg'
        />

        {/* ✅ Improved Phone Input Styling */}
        <div className='min-w-[300px] max-w-[470px] w-full  flex justify-center items-center p-3 rounded-md bg-background ring-1 ring-primary focus-within:ring-royal-blue transition-all duration-200 shadow-lg'>
        <PhoneInput
    defaultCountry="ua"
    value={phone}
    onChange={(phone) => setPhone(phone)}
    className="mx-auto w-full text-white bg-background placeholder-gray-400 focus:outline-none"
/>

        </div>

        <input 
            type="text" 
            name='subject' 
            id='subject' 
            placeholder='Subject' 
            max={300}    
            className="min-w-[300px] max-w-[470px] w-full  p-3 rounded-md bg-background text-white placeholder-gray-400 
            focus:outline-none ring-1 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg"
        />
    </div>

    <div>
        <textarea 
            required 
            name='message' 
            id='message' 
            placeholder='Message'    
            className="min-w-[300px] max-w-[470px] w-full  p-3 h-[265px] rounded-md bg-background text-white placeholder-gray-400 
            focus:outline-none ring-1 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg"
        ></textarea>
    </div></div>
    <button className= " mt-6 w-full px-4 py-4 uppercase font-bold bg-primary text-surface rounded-md ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
    >
      Submit
    </button>
</form>


            </div>
        </div>
    )
}

export default Contact;
