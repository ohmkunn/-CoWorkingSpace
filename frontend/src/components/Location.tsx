import React from 'react'

export default function Location({link}:{link:string}) {
  return (
        // <iframe src="https://maps.google.com/maps?q=starbuck%20samyarn&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" className='w-[660px] h-[400px]'></iframe>
        // <iframe src={`https:/maps.google.com/maps?q=${link}`} className='w-[660px] h-[400px]'></iframe>
        // <iframe src={`${link}`} className='w-[660px] h-[400px]'></iframe>
        <iframe width="600" height="450" loading="lazy" src={link}></iframe>
        
  )
}
