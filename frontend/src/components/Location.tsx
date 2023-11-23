import React from 'react'

export default function Location({link}:{link:string}) {
  return (
        <iframe src="https://maps.google.com/maps?q=%E0%B8%AB%E0%B8%AD%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" className='w-[660px] h-[400px]'></iframe>
        // <iframe src={link} scrolling="no" className='w-[660px] h-[400px]'></iframe>
  )
}
