'use client'
import React, { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';

export default function Panel() {

    // mockdata
    const mockHospital = [{hid:"001", name:'Chulalongkorn Hospital', image:'/chula.jpg'},
        {hid:"002",name:'Rajavithi Hospital', image:'/rajavithi.jpg'},
        {hid:"003",name:'Thammasat University Hospital' ,image:'/thammasat.jpg'}]

    const compareReducer = (ratingList: Map<string, number>, action: { type: string, Name: string, Rating?: number }) => {
        switch (action.type) {
            case 'add': {
                const newRatingList = new Map(ratingList);
                const ratingToAdd = action.Rating !== undefined ? action.Rating : 0; // Set the default rating to 0
                newRatingList.set(action.Name, ratingToAdd);
                return newRatingList;
            }
            case 'remove': {
                const newRatingList = new Map(ratingList);
                newRatingList.delete(action.Name);
                return newRatingList;
            }
            default:
                return ratingList;
        }
    };
    

    const [raitingList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>());

    const handleDelete = (Name: string) => {
        dispatchCompare({ type: 'remove', Name });
    };

    const handleRatingClick = (Name: string) => {
        // Call the handleDelete function when a rating is clicked
        handleDelete(Name);
    };

    return (
        <div>
            <div style={{
                margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap"
            }}>
                {mockHospital.map((hosItem)=>(
                    <Link href={`/hospital/${hosItem.hid}`} className='w-1/5 h-[400px] rounded-lg shadow-lg bg-white'>
                    <Card key={hosItem.hid} Name={hosItem.name} imgSrc={hosItem.image} onCompare={(Name: string, Rating: number) => dispatchCompare({ type: 'add', Name, Rating })} Ratinglist={raitingList} />
                    </Link>
                ))}
            </div>
            <div className='w-full'>
                Rating List {raitingList.size}
            </div>
            {Array.from(raitingList).map(([Name, Rating]) => (
                <div className='ml-32 mb-1' key={Name} onClick={(e) => {handleRatingClick(Name); }}>
                    {Name}: {Rating}
                </div>
            ))}
        </div>
    );
}
