'use client'
import { H_Two } from '@/Utils/Typography'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2';

const Contact = () => {
const [phone, setPhone] = useState("");

  return (
    <div
    className="relative bg-cover bg-center text-white py-8 md:py-16  "
    style={{ backgroundImage: "url('/assets/images/car6.webp')" }} 
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
       <H_Two className="text-center text-primary  mb-6 uppercase   " text="get in touch"/>
       <form className='flex'>
<div>
    <input required type="text" name="name" id="name" min={2} max={30} placeholder='Name'/>
    <input required type="email" name="email" id="email" placeholder='Email Address' />
    <div className='flex '>
    <PhoneInput
                country={"us"} // Default country
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{ width: "100%", padding: "10px" }}
            />
    <input required type="number" min={0} max={30} name="phone" id="phone" placeholder='Phone Number'/>
    </div>
</div>
<div>
  <input type="text" name='subject' id='subject' placeholder='Subject' max={300} />
  <textarea required name='message' id='message' placeholder='Message'  ></textarea>
</div>
       </form>
            
</div></div>
  )
}

export default Contact