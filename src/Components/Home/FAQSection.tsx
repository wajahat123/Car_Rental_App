import { H_Two } from '@/Utils/Typography'
import React from 'react'
import FAQs from "@/Utils/FAQs.json"
import FAQuestions from '../Generals/FAQ'
const FAQSection = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto pb-8 md:pb-16'>
        <H_Two className='text-center  text-primary mb-6 uppercase ' text='Frequently Asked Questions'/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 '>
{
    FAQs.map((faq, index) => (
     <FAQuestions question={faq.question} answer={faq.answer} key={index}/>
    ))
 
}
        </div>
    </div>
  )
}

export default FAQSection