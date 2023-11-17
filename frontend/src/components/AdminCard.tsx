'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ReservationModal from './Modal/ReservationModal';
import getUserProfile from '@/libs/getUserProfile';
import EditModal from './Modal/EditModal';
import DeleteModal from './Modal/DeleteModal';

export default function AdminCard(
    { name
        ,operatingHours,address,province,postalcode,tel, picture,token,sid
    }: { name:string, token:string, sid:string
        ,operatingHours:string,address:string,province:string,postalcode:string,tel:string, picture:string
      }
    ) {
        const [open, setOpen] = useState(false)
        const [openEdit, setOpenEdit] = useState(false)
        const [openDelete, setOpenDelete] = useState(false)
    return (
        <>
        <ReservationModal sid={sid}token={token} open={open} setOpen={setOpen}/>
        <EditModal 
        name={name}
        address={address}
        operatingHours={operatingHours}
        postalcode={postalcode}
        picture={picture}
        province={province}
        tel={tel}
        sid={sid}token={token} open={openEdit} setOpen={setOpenEdit}/>
        <DeleteModal sid={sid}token={token} open={openDelete} setOpen={setOpenDelete}/>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-96">
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
        
        <p className="text-xl font-bold text-gray-800">Operating Hour</p>
        <p className="text-lg font-medium text-gray-800 mb-6">{operatingHours}</p>
        <ul className="text-sm text-gray-600 mb-1">
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
          className="w-full bg-sky-600 text-white rounded-md px-4 py-2 mb-2 hover:bg-sky-800 focus:outline-none focus:shadow-outline-purple active:bg-sky-950">
          Reservation
        </button>
        <div className='flex justify-center gap-5'>
        <button
            onClick={()=>setOpenEdit(!openEdit)}
          className="w-2/5 bg-amber-600 text-white rounded-md px-4 py-2 hover:bg-amber-800 focus:outline-none focus:shadow-outline-purple active:bg-amber-950">
          Edit
        </button>
        <button
            onClick={()=>setOpenDelete(!openDelete)}
          className="w-2/5 bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-800 focus:outline-none focus:shadow-outline-purple active:bg-red-950">
          Delete
        </button></div>
      </div>
    </div>
    </>
    );
}
