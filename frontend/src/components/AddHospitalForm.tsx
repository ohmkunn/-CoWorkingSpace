import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import React from 'react'
import { dbConnect } from "@/db/dbConnect"
import Hospital from '@/db/models/Hospital';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function AddHospitalForm() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
  
    const profile = await getUserProfile(session.user.token)

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
            const hospital = await Hospital.create({
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
        revalidateTag("hospitals")
        redirect("/hospital")
    }
    return (
        <div className='bg-slate-100 m-5 p-5'>
                {
                    (profile.data.role=="admin")?
                    <form action={addHospital}>
    <div className="text-x1 text-blue-700">Add Hospital</div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="name">
            ชื่อโรงพยาบาล (name)
        </label>
        <input type="text" required id="name" name="name" placeholder="ชื่อโรงพยาบาล"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="address">
            ที่อยู่ ถนน (address)
        </label>
        <input type="text" required id="address" name="address" placeholder="ที่อยู่ ถนน"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <div className="my-4">
        <label className="block text-gray-700" htmlFor="district">
            เขต/อำเภอ (district)
        </label>
        <input type="text" required id="district" name="district" placeholder="เขต/อำเภอ"
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
            URL รูปภาพโรงพยาบาล (picture)
        </label>
        <input type="url" required id="picture" name="picture" placeholder="URL รูปภาพโรงพยาบาล"
            className="block w-3/6  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
    </div>
    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'>
        Add New Hospital
    </button>
    </form>

                    :null
                }
        </div>
    )
}
