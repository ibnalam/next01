
import Button from '@/app/components/Button'
import Image from 'next/image'
import fb from '@/public/images/fb.png'
import React from 'react'

const mission = () => {
  return (
   <main>
    <div>Mission Page </div>
    <div className=''>
    <Image src={fb} alt="fb image"/>
    </div>
    <div className='mt-5'>
      <Button/>
    </div>
   </main>
  )
}

export default mission