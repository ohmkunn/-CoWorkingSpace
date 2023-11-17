'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { BookingItem } from '../../interfaces'
import { addBooking } from '../redux/features/bookSlice'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs , { Dayjs } from 'dayjs';

export default function Form() {
    const dispatch = useDispatch<AppDispatch>();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [citizenId, setCitizenId] = useState("");
    const [bookedHospital, setBookedHospital] = useState("");
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null);

    const makeBooking = () => {
        console.log("yes1")
        if (firstname && lastname && citizenId && bookedHospital && bookingDate) {
            const date = dayjs(bookingDate).format("YYYY/MM/DD")
            const item:BookingItem = {
                firstName: firstname,
                lastName: lastname,
                citizenId: citizenId,
                bookedHospital: bookedHospital,
                bookingDate: date,
            };
            console.log(item)
            // Dispatch the action to add the booking
            dispatch(addBooking(item));
        }
    };

    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-slate-700   rounded-md shadow-md dark:bg-gray-800 mt-5">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Booking</h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">First Name</label>
                            <input
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                id="firstname"
                                type="text"
                                    
                            />
                        </div>
                        <div>
                            <label className="text-white">Last Name</label>
                            <input
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                id="lastname"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Citizen ID</label>
                            <input
                                value={citizenId}
                                onChange={(e) => setCitizenId(e.target.value)}
                                id="ID"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Hospital Selection</label>
                            <select
                                value={bookedHospital}
                                onChange={(e) => setBookedHospital(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option>Chulalongkorn Hospital</option>
                                <option>Rajavithi Hospital</option>
                                <option>Thammasat University Hospital</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white">Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={bookingDate}
                                onChange={(date) => setBookingDate(date)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            /></LocalizationProvider>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            onClick={makeBooking}
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
