import React, { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';
import getCoworkingspaces from '@/libs/getCoworkingspaces';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Panel() {

    const coworkingSpaces = await getCoworkingspaces()
    const session = await getServerSession(authOptions)
    
    return (
        
        <div className="bg-gray-100 min-h-screen py-2 flex items-center justify-center w-full p-0 flex-col">
            <h1 className='text-5xl font-extrabold text-gray-800 mb-6 text-left'>Browsing Your Space.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        { (session?.user.token != null)?coworkingSpaces.data.map((spaceItem:Object)=>(
            <Card name={spaceItem.name}
                address={spaceItem.address}
                operatingHours={spaceItem.operatingHours}
                postalcode={spaceItem.postalcode}
                picture={spaceItem.picture}
                province={spaceItem.province}
                tel={spaceItem.tel}
                key={spaceItem.name}
                token={session?.user.token}
                sid={spaceItem._id}
            />
        )):null}
            {/* <Card name={"spaceItem.name"}/>
            <Card name={"spaceItem.name"}/>
            <Card name={"spaceItem.name"}/> */}
            </div>
        </div>
    );
}
