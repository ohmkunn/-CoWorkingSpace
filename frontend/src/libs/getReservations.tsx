import React from 'react'

export default async function getReservations(token: string) {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))

    const response = await fetch("http://localhost:5000/api/v1/bookings",{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can adjust this header based on your API requirements
          },
    })
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspaces")
    }
    return await response.json()
}
