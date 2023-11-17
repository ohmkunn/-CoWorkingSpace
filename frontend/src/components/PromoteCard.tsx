'use client'
import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true)
    return (
    <div className='ml-10 w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row '>
        <VideoPlayer isPlaying={playing} vdoSrc='video/getvaccine.mp4' />
        <div className='m-3 font-extrabold font-sans'>
          Get your vaccine today.
          <button className='pause-button mt-2 font-extralight block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm'
          onClick={()=> setPlaying(!playing)}> {playing? 'Pause':'Play'}</button>
        </div>
    </div>
  )
}
