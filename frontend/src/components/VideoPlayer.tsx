'use client'
import useWindowListener from '@/hooks/useWindowListener'
import React, { useEffect, useRef } from 'react'

export default function VideoPlayer(
    {vdoSrc, isPlaying}: {vdoSrc:string, isPlaying:boolean}) {
        const vdoRef = useRef<HTMLVideoElement>(null)
        
        // useWindowListener('contextmenu',(e)=> e.preventDefault())
        
        useEffect(()=>{
            // alert('width is ' + vdoRef.current?.videoWidth)
            if(isPlaying){

                vdoRef.current?.play()
            } else {

                vdoRef.current?.pause()
            }
        },[isPlaying])

    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} muted loop controls />
    )
}
