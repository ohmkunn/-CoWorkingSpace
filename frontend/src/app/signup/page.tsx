'use client'
import userRegister from '@/libs/userRegister'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import React, { useState } from 'react'

export default function page() {
    const router = useRouter()
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userTel, setUserTel] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const handleSignupClick = () => {
        if (userName !== "" && userEmail !== "" && userTel !== "" && userPassword !== "") {
            userRegister(userName, userEmail, userTel, "user", userPassword)
            .then(() => {
            router.push('/api/auth/signin');
        })
            .catch((error) => {
            // Check if the error contains validation messages
            if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
                const validationErrors = error.response.data.error.message;
                alert(validationErrors);
            } else if(userPassword.length < 6){
                // If it's not a validation error, alert a generic message
                alert("password must be longer than 5")
            } else {
                alert("An error occurred during registration.");
            }
        });
} else {
    alert("Please fill in all the required fields.");
}
      };
      
  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-md shadow-md text-black w-full">
                    <h1 className="mb-8 text-4xl font-semibold   text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        onChange={(data)=>setUserName(data.target.value)}
                        placeholder="Full Name" />
                    <input 
                        type="tel"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="tel"
                        onChange={(data)=>setUserTel(data.target.value)}
                        placeholder="telephone number" />
                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={(data)=>setUserEmail(data.target.value)}
                        placeholder="Email" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={(data)=>setUserPassword(data.target.value)}
                        placeholder="Password" />

                    
                    <button
                        onClick={()=>{ handleSignupClick()}}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-900 focus:outline-none my-1"
                    >Create Account</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account ?  
                    <a className="no-underline text-blue-700" href="/api/auth/signin"> Log in</a>.
                </div>
            </div>
        </div>
  )
}
