import Image from 'next/image'
import React from 'react'
import getHospital from '@/libs/getHospital';

export default async function page({params}: {params: {hid: string}}) {
  
  const hospitalDetail = await getHospital(params.hid)

  // mock Data for Demonstration
  const mockHosRepo = new Map()
  mockHosRepo.set("001",{name:'Chulalongkorn Hospital', image:'/chula.jpg'})
  mockHosRepo.set("002",{name:'Rajavithi Hospital', image:'/rajavithi.jpg'})
  mockHosRepo.set("003",{name:'Thammasat University Hospital' ,image:'/thammasat.jpg'})

  return (
    <main className='text-center p-5'>
        <h1 className='text-center text-xl font-bold'>{hospitalDetail.data.name}</h1>
    <div className='flex flex-row my-5'>
      <Image src={hospitalDetail.data.picture} alt="Hos picture"
      width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
    <div className='text-md mx-5 text-left'>
    <div className='m-1 font-semibold'>Hospital Detail</div>
    <div className='m-1'>Name: {hospitalDetail.data.name}</div>
    <div className='m-1'>Address: {hospitalDetail.data.address}</div>
    <div className='m-1'>District: {hospitalDetail.data.district}</div>
    <div className='m-1'>Province: {hospitalDetail.data.province}</div>
    <div className='m-1'>Postalcode: {hospitalDetail.data.postalcode}</div>
    <div className='m-1'>Tel: {hospitalDetail.data.tel}</div>
    </div></div>
    </main>
  )
}
