import { authOptions } from '../../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';
import React from 'react'
import { dbConnect } from "@/db/dbConnect"
import Booking from '@/db/models/Hospital';

export default async function DashboardPage() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt) ;

    const addHospital = async (addHospitalForm:FormData) => {
        "use server"
        const name = addHospitalForm.get("name");
        const address = addHospitalForm.get("address");
        const district = addHospitalForm.get("district");
        const province = addHospitalForm.get("province");
        const postalcode = addHospitalForm.get("postalcode");
        const tel = addHospitalForm.get("tel");
        const picture = addHospitalForm.get("picture");

        try {
            await dbConnect()
            const booking = await Booking.create({
                name: name,
                address: address, // Add the address field
                district: district, // Add the district field
                province: province, // Add the province field
                postalcode: postalcode, // Add the postalcode field
                tel: tel, // Add the tel field
                picture: picture, // Add the picture field
            });
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <main>
            <div className='bg-slate-100 m-5 p-5'>
            <div className='text-2xl font-bold'>User Profile</div>
                <table className='table-auto border-separate border-spacing-3'>
                    <tbody>
                    <tr>
                        <td className='font-semibold'>Name</td><td>{profile.data.name}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Email</td><td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Tel</td><td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td className='font-semibold'>Member Since</td><td>{createdAt.toString()}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
        </main>
    )
}