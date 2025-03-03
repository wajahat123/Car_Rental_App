import React from 'react'
import PriceSlider from './PriceSlider'

const SideBar = () => {
  return (
    <div className='w-full bg-surface ring-1 ring-primary rounded-sm '>
        <h2 className='text-sm font-semibold text-primary'>Price</h2>
     <PriceSlider/>
        <h2 className='text-sm font-semibold text-primary mt-4'>Popular Brands</h2>
        <ul className='list-disc pl-4'>
          <li>Honda</li>
          <li>Toyota</li>
          <li>Ford</li>
          <li>BMW</li>
        </ul>
  
    </div>
  )
}

export default SideBar