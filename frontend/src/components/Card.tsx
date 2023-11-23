'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ReservationModal from './Modal/ReservationModal';
import getUserProfile from '@/libs/getUserProfile';
import Location from './Location';
import Link from 'next/link';

export default function Card(
    { name
        ,operatingHours,address,province,postalcode,tel, picture,token,sid,location
    }: { name:string, token:string, sid:string
        ,operatingHours:string,address:string,province:string,postalcode:string,tel:string, picture:string, location:string
      }
    ) {
        const [open, setOpen] = useState(false)
    return (
        <>
        <ReservationModal sid={sid}token={token} open={open} setOpen={setOpen}/>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-auto">
      <div className="p-1 bg-sky-200">
      </div>
      <div className="pt-8 pb-2 px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
        <div className='w-full h-40 relative mb-3'>
            <Image
                    src={picture}
                    alt='hospitalPicture'
                    
                    objectFit='cover'
                    className='rounded-lg'
                    fill={true}
                />
        </div>
        <Link  className='text-sky-700' href={`/${location}`}>Location</Link>
        
        <p className="text-xl font-bold text-gray-800">Operating Hour</p>
        <p className="text-lg font-medium text-gray-800 mb-6">{operatingHours}</p>
        <ul className="text-sm text-gray-600 mb-6">
          <li className="mb-1 flex items-center">
            
            Address: {address}
          </li>
          <li className="mb-1 flex items-center">
            
            Postalcode: {postalcode}
          </li>
          <li className="mb-1 flex items-center">
        
            province: {province}
          </li>
          <li className="mb-1 flex items-center">

            tel: {tel}
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button
            onClick={()=>setOpen(!open)}
          className="w-full bg-sky-600 text-white rounded-full px-4 py-2 hover:bg-sky-950 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
          Reservation
        </button>
      </div>
    </div>
    </>
    );
}
