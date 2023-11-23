import React from 'react'
import Location from '@/components/Location'

export default function page({params}:{params:{location:string}}) {
  return (
    <div className='m-5'>
        <h1 className='text-3xl font-bold text-gray-800 mt-6 mb-16 text-left'> Location</h1>
        <Location link={params.location}/>
        </div>
  ) 
}
