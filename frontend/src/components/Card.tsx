import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating, Typography } from '@mui/material';

export default function Card({ Name, imgSrc, onCompare, Ratinglist }: { Name: string, imgSrc: string, onCompare?: Function,Ratinglist: Map<string, number>  }) {
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
        <InteractiveCard>
            <div className='w-full h-[60%] relative rounded-t-lg'>
                <Image
                    src={imgSrc}
                    alt='hospitalPicture'
                    fill={true}
                    objectFit='cover'
                    className='rounded-t-lg'
                />
            </div>
            <div className='w-full h-[25%] p-[10px]'>
                <h3 className='font-semibold'>{Name}</h3>
                <p>click for more detail.</p>
            </div>
            {/* <div className='px-4'>
                <Typography component="legend">Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    precision={0.5}
                    onChange={(e, newValue) => {handleRatingChange(newValue)}}
                    onClick={(e) => {e.stopPropagation()}}
                />
            </div> */}
        </InteractiveCard>
    );
}
