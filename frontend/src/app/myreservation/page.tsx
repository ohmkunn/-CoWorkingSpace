"use client"
import React from "react";
import { AppDispatch, useAppSelector } from "@/redux/store"; // Update with the correct path
import { BookingItem } from '../../../interfaces';
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function DisplayData() {
    // Use useSelector to access the part of the state you want
    const dispatch =  useDispatch<AppDispatch>();
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const hasData = bookItems.length !== 0;
    return (
        <div className="m-4">
            <h2 className="font-extrabold">Booked Items</h2>
            {hasData ? (
                bookItems.map((Item) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={Item.firstName}>
                    <div className="text-xl">Firstname: {Item.firstName}</div>
                    <div className="text-xl">Lastname: {Item.lastName}</div>
                    <div className="text-xl">CitizenId: {Item.citizenId}</div>
                    <div className="text-xl">Booked Hospital: {Item.bookedHospital}</div>
                    <div className="text-xl">Booking Date: {Item.bookingDate}</div>
                    <button  onClick={()=> dispatch(removeBooking(Item))} 
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                        Remove booking
                    </button>
                </div>
                    ))
                ) : (
                <p>No Vaccine Booking</p>
            )}

        </div>
    );
}
