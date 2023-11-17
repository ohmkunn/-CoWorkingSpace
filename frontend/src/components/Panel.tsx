// 'use client'
import React, { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';
import getCoworkingspaces from '@/libs/getCoworkingspaces';

export default async function Panel() {

    // mockdata
    // const mockHospital = [{hid:"001", name:'Chulalongkorn Hospital', image:'/chula.jpg'},
    //     {hid:"002",name:'Rajavithi Hospital', image:'/rajavithi.jpg'},
    //     {hid:"003",name:'Thammasat University Hospital' ,image:'/thammasat.jpg'}]

    // const compareReducer = (ratingList: Map<string, number>, action: { type: string, Name: string, Rating?: number }) => {
    //     switch (action.type) {
    //         case 'add': {
    //             const newRatingList = new Map(ratingList);
    //             const ratingToAdd = action.Rating !== undefined ? action.Rating : 0; // Set the default rating to 0
    //             newRatingList.set(action.Name, ratingToAdd);
    //             return newRatingList;
    //         }
    //         case 'remove': {
    //             const newRatingList = new Map(ratingList);
    //             newRatingList.delete(action.Name);
    //             return newRatingList;
    //         }
    //         default:
    //             return ratingList;
    //     }
    // };
    

    // const [raitingList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>());

    // const handleDelete = (Name: string) => {
    //     dispatchCompare({ type: 'remove', Name });
    // };

    // const handleRatingClick = (Name: string) => {
    //     // Call the handleDelete function when a rating is clicked
    //     handleDelete(Name);
    // };

    const coworkingSpaces = await getCoworkingspaces()

    return (
        
        <div className="bg-gray-100 min-h-screen py-2 flex items-center justify-center w-full p-0 flex-col">
            <h1 className='text-5xl font-extrabold text-gray-800 mb-6 text-left'>Browsing Your Space.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coworkingSpaces.data.map((spaceItem:Object)=>(
            <Card name={spaceItem.name}
                address={spaceItem.address}
                operatingHours={spaceItem.operatingHours}
                postalcode={spaceItem.postalcode}
                picture={spaceItem.picture}
                province={spaceItem.province}
                tel={spaceItem.tel}
                key={spaceItem.name}
            />
        ))}
            {/* <Card name={"spaceItem.name"}/>
            <Card name={"spaceItem.name"}/>
            <Card name={"spaceItem.name"}/> */}
            </div>
        </div>
    );
}
