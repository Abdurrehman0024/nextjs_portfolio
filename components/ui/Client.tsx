import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import { testimonials } from '@/data'

const Client = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Happy words from 
            <span className='text-purple'> Satsified Customers</span>
        </h1>
          <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 '></div>  
          <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"/>   
         
    </div>

  )
}

export default Client