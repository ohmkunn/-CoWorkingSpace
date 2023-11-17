import React, { useReducer } from 'react'
import Card from './Card'
import Link from 'next/link'

export default async function hospitalCatalog({hospitalJson}: {hospitalJson: Object}) {
    const hospitalJsonReady = await hospitalJson
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

    return (
    <>
    Explore {hospitalJson.count} 
    <div className='hospitalcatalog' style={{margin:"20px", display:"flex",
        flexDirection:"row", alignContent:"space-around",
        justifyContent: "space-around", flexWrap:"wrap", padding:"10px"}}>
        {
            hospitalJsonReady.data.map((hosItem:Object)=>(
                <Link key={hosItem.id} href={`/hospital/${hosItem.id}`} className='w-1/5 h-[400px] rounded-lg shadow-lg bg-white'>
                    <Card Name={hosItem.name} imgSrc={hosItem.picture} />
                </Link>
            ))
        }
    </div>
    </>
  )
}