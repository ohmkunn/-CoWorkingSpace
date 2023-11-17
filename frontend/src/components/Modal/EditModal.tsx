'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import updateCoworkingspace from '@/libs/updateCoworkingspace'
import { redirect } from 'next/dist/server/api-utils'

export default function EditModal({name
    ,operatingHours,address,province,postalcode,tel, picture,sid,token,open,setOpen}:{name:string, operatingHours:string,address:string,province:string,postalcode:string,tel:string, picture:string,sid:string,token:string,open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const cancelButtonRef = useRef(null)
    const [Name,setName] = useState(name)
    const [OperatingHours,setOperatingHours] = useState(operatingHours)
    const [Address,setAddress] = useState(address)
    const [Province,setProvince] = useState(province)
    const [Postalcode,setPostalcode] = useState(postalcode)
    const [Tel,setTel] = useState(tel)
    const [Picture,setPicture] = useState(picture)
    const update = () => {
        updateCoworkingspace(
            token,
            sid,
            Name,
            Address,
            OperatingHours,
            Province,
            Postalcode,
            Tel,
            Picture)
        setOpen(!open)
    }
    
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="mt-3 text-xl font-bold leading-6 text-gray-900">
                        Update your Space detail
                      </Dialog.Title>
                      <div className="mt-4">
                        {/* form */}
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Name</label>
                        <input className="mt-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            />
                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">address</label>
                        <input className="my-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            />
                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">operatingHours</label>
                        <input className="my-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={OperatingHours}
                            onChange={(e) => setOperatingHours(e.target.value)}
                            type="text"
                            />
                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">province</label>
                        <input className="my-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Province}
                            onChange={(e) => setProvince(e.target.value)}
                            type="text"
                            />
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">postalcode</label>
                        <input className="my-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Postalcode}
                            onChange={(e) => setPostalcode(e.target.value)}
                            type="text"
                            />
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">tel</label>
                        <input className="my-1 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Tel}
                            onChange={(e) => setTel(e.target.value)}
                            type="text"
                            />
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">picture</label>
                        <input className="my-1 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                            placeholder="0" 
                            required
                            value={Picture}
                            onChange={(e) => setPicture(e.target.value)}
                            type="text"
                            />
                        
                      </div>
                    </div>
                  </div>
                </div>
                
{/* //   "name": "string",
//   "address": "string",
//   "operatingHours": "string",
//   "province": "string",
//   "postalcode": "string",
//   "tel": "string",
//   "picture": "string" */}

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-900 sm:ml-3 sm:w-auto"
                    onClick={() => update()}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
