import React from 'react'

export default function page() {
  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-md shadow-md text-black w-full">
                    <h1 className="mb-8 text-4xl font-semibold   text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />
                    <input 
                        type="tel"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="tel"
                        placeholder="telephone number" />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-900 focus:outline-none my-1"
                    >Create Account</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account ?  
                    <a className="no-underline text-blue-700" href="../login/"> Log in</a>.
                </div>
            </div>
        </div>
  )
}
