import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import React from 'react'
import { dbConnect } from "@/db/dbConnect"
import Coworkingspace from '@/db/models/Coworkingspace';
import { redirect } from 'next/navigation';

export default async function AddCoWorkingSpaceForm() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)

    const addCoworkingspace = async (AddCoWorkingSpaceForm:FormData) => {
        "use server"

        const name = AddCoWorkingSpaceForm.get("name");
        const address = AddCoWorkingSpaceForm.get("address");
        const location = AddCoWorkingSpaceForm.get("location");
        const operatinghours = AddCoWorkingSpaceForm.get("operatinghours");
        const province = AddCoWorkingSpaceForm.get("province");
        const postalcode = AddCoWorkingSpaceForm.get("postalcode");
        const tel = AddCoWorkingSpaceForm.get("tel");
        const picture = AddCoWorkingSpaceForm.get("picture");

        try {
            await dbConnect()
            const coworkingspace = await Coworkingspace.create({
                name: name,
                address: address, // Add the address field
                location: location, // Add the location field
                operatingHours: operatinghours, // Add the operatinghours field
                province: province, // Add the province field
                postalcode: postalcode, // Add the postalcode field
                tel: tel, // Add the tel field
                picture: picture, // Add the picture field
            });
        } catch (error) {
            console.log(error)
        }
        // revalidateTag("hospitals")
        redirect("/")
    }
    return (
        <div className='bg-slate-100 m-5 p-5'>
                {
                    (profile.data.role=="admin")?
                    <form action={addCoworkingspace}>
    <div className="text-x1 text-blue-700">Add Co-working Space</div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="name">
            ชื่อสถานที่ (name)
        </label>
        <input type="text" required id="name" name="name" placeholder="ชื่อสถานที่" 
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="address">
            ที่อยู่ (address)
        </label>
        <input type="text" required id="address" name="address" placeholder="ที่อยู่"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="location">
            ตำแหน่ง (location)
        </label>
        <input type="text" required id="location" name="location" placeholder="ตำแหน่ง"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="operatinghours">
            เวลาเปิดทำการ (operatinghours)
        </label>
        <input type="text" required id="operatinghours" name="operatinghours" placeholder="เวลาเปิดทำการ"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="province">
            จังหวัด (province)
        </label>
        <input type="text" required id="province" name="province" placeholder="จังหวัด"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="postalcode">
            รหัสไปรษณีย์ (postalcode)
        </label>
        <input type="text" required id="postalcode" name="postalcode" placeholder="รหัสไปรษณีย์"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="tel">
            หมายเลขโทรศัพท์ (tel)
        </label>
        <input type="text" required id="tel" name="tel" placeholder="หมายเลขโทรศัพท์"
            className="block w-3/6 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="picture">
            URL รูปภาพสถานที่ (picture)
        </label>
        <input type="url" required id="picture" name="picture" placeholder="URL รูปภาพสถานที่"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'>
        Add New Co-working Space
    </button>
    </form>

                    :null
                }
        </div>
    )
}
