"use client"
import deleteReservation from '@/libs/deleteReservation';
import getReservations from '@/libs/getReservations';
import getUserProfile from '@/libs/getUserProfile';
import updateReservation from '@/libs/updateReservation';
import React, { useEffect, useState } from "react";
export default function ReservationPanel({session}:{session:any}) {
    const [reservations, setReservations] = useState<any>()
    const [profile,setProfiles] = useState<any>(null)
    async function Dataloading() {
        await new Promise((resolve) => setTimeout(resolve,500))
        if(session && session.user.token) {
            const r = await getReservations(session?.user.token)
            setReservations(r)
            var p = await getUserProfile(session.user.token)
            setProfiles(p)
        }
    }
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [reservationId, setReservationId] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [numOfRooms, setNumOfRooms] = useState(0);

    const handleEditClick = (index: number) => {
      setEditIndex(index);
    };
    const handleNumOfRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
    
        if (value >= 1 && value <= 3) {
          setNumOfRooms(value);
          
        }
    }
    const handleSaveClick = ({reservationId, bookingDate, numOfRooms}:{reservationId: string, bookingDate: string, numOfRooms: Number}) => {
      // console.log(bookingDate)
      updateReservation(session.user.token, reservationId, new Date(bookingDate), numOfRooms)
      setEditIndex(null);
      Dataloading()
    };
    const handleDeleteClick = (reservationId: string) => {
        deleteReservation(session.user.token,reservationId)
        Dataloading()
      };
    const handleCancel = () => {
        setEditIndex(null);
      };
  
    useEffect(() => {
        Dataloading()
      }, []);

    if(reservations != null && reservations.count == 0){
      return(
        <div className="m-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-4xl">
        <div className="mb-4">
            <h1 className="text-grey-darkest text-2xl font-bold">My Reservation</h1>
            <h3 className='m-4'>no reservations found</h3>
        </div></div></div></div>
      )
    }
      else if(profile && profile.data.role == "admin" && reservations != null){
  return (
    <div className="m-4">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-4xl">
        <div className="mb-4">
            <h1 className="text-grey-darkest text-2xl font-bold">My Reservation</h1>
        </div>
        <div>
        {reservations.data.map((resItem: Object, index: number) => (
          <div key={index} className="flex mb-4 items-center">
            {editIndex === index ? (
              <div className='bg-slate-200 py-3 px-6 rounded-md'>
                
                <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Room</label>
                <input
                  type="number"
                //   value={resItem.numOfRooms}
                required
                  onChange={(e) => handleNumOfRoomsChange(e)}
                  value={numOfRooms}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-3"
                />
                <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                <input
                  type="date"
                  required
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-3"
                />
                <button
                  onClick={()=>{handleSaveClick({reservationId,bookingDate,numOfRooms})}}
                  className="bg-white flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-white flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-red-500 mx-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="w-full text-grey-darkest grid grid-cols-4 justify-between">
                  {/* Display reservation data */}
                  <p className='text-center text-lg font-medium text-gray-800'>{resItem.coworkingspace.name}</p>
                            <p className='text-center text-lg'>{resItem.numOfRooms} room</p>
                            <p className='text-center text-lg'>{(new Date(resItem.bookingDate)).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</p>
                            <p className=' text-lg'>{resItem.user.name}</p>
                </div>
                <button
                  onClick={() => {setNumOfRooms(resItem.numOfRooms) ; setReservationId(resItem._id); handleEditClick(index)}}
                  className="text-lg flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-700"
                >
                  Edit
                </button>
                <button 
                onClick={() => handleDeleteClick(resItem._id)}
                className="text-lg flex-shrink-0 p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
                {/* ... Other buttons ... */}
              </>
            )}
          </div>
        ))}
        </div>
    </div>
</div>
        </div>
  )} else if(profile && profile.data.role == "user" && reservations != null) {
    return (
        <div className="m-4">
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-4xl">
            <div className="mb-4">
                <h1 className="text-grey-darkest text-2xl font-bold">My Reservation</h1>

            </div>
            <div>
            {reservations.data.map((resItem: Object, index: number) => (
          <div key={index} className="flex mb-4 items-center">
            {editIndex === index ? (
              <div className='bg-slate-200 py-3 px-6 rounded-md'>
                
                <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Room</label>
                <input
                  type="number"
                  required
                  onChange={(e) => setNumOfRooms(e.target.valueAsNumber)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-3"
                />
                <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date</label>
                <input
                  type="date"
                  required
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-3"
                />
                <button
                  onClick={()=>{handleSaveClick({reservationId,bookingDate,numOfRooms})}}
                  className="bg-white flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-white flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-red-500 mx-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="w-full text-grey-darkest grid grid-cols-3 justify-between">
                  {/* Display reservation data */}
                  <p className='text-center text-lg font-medium text-gray-800'>{resItem.coworkingspace.name}</p>
                            <p className='text-center text-lg'>{resItem.numOfRooms} room</p>
                            <p className='text-center text-lg'>{(new Date(resItem.bookingDate)).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</p>
                </div>
                <button
                  onClick={() => {setNumOfRooms(resItem.numOfRooms) ; setReservationId(resItem._id); handleEditClick(index)}}
                  className="text-lg flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-700"
                >
                  Edit
                </button>
                <button 
                onClick={() => handleDeleteClick(resItem._id)}
                className="text-lg flex-shrink-0 p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
                {/* ... Other buttons ... */}
              </>
            )}
          </div>
        ))}
            </div>
        </div>
    </div>
            </div>
      )
  }
}
