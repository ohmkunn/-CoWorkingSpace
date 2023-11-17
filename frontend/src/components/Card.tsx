import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
// import { Rating, Typography } from '@mui/material';

export default function Card(
    { name
        ,operatingHours,address,province,postalcode,tel, picture
    }: { name:string
        ,operatingHours:string,address:string,province:string,postalcode:string,tel:string, picture:string
      }
    ) {
    // const [ratingValue, setRatingValue] = useState<number>(0); // Initialize with your desired default value
    
    // const handleRatingChange = (newValue: number | null) => {
    //     if (newValue !== null) {
    //         setRatingValue(newValue);
    //         if(onCompare){
    //             onCompare(Name, newValue); // Pass both the Name and the new rating value to the parent
    //         }
    //     }
    // };

    // useEffect(() => {
    //     if(!Ratinglist.has(Name)){
    //         setRatingValue(0); // Reset the rating to 0 when the component mounts or when the Name prop changes
    //     }
    // }, [Ratinglist]);

    return (
        // <InteractiveCard>
            // <div className='w-full h-[60%] relative rounded-t-lg'>
            //     <Image
            //         src={imgSrc}
            //         alt='hospitalPicture'
            //         fill={true}
            //         objectFit='cover'
            //         className='rounded-t-lg'
            //     />
            // </div>
        //     <div className='w-full h-[25%] p-[10px]'>
        //         <h3 className='font-semibold'>{Name}</h3>
        //         <p>click for more detail.</p>
        //     </div>
        //     {/* <div className='px-4'>
        //         <Typography component="legend">Rating</Typography>
        //         <Rating
        //             name="simple-controlled"
        //             value={ratingValue}
        //             precision={0.5}
        //             onChange={(e, newValue) => {handleRatingChange(newValue)}}
        //             onClick={(e) => {e.stopPropagation()}}
        //         />
        //     </div> */}
        // </InteractiveCard>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-80">
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
        
        <p className="text-3xl font-bold text-gray-800 mb-6">{operatingHours}</p>
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
          className="w-full bg-sky-600 text-white rounded-full px-4 py-2 hover:bg-sky-950 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
          Reservation
        </button>
      </div>
    </div>
    );
}
