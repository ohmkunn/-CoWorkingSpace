import React from 'react'

export default async function updateCoworkingspace(token: string, coworkingspaceId: string, 
    name?: string, address?: string, operatingHours?: string, province?: string, postalcode?: string,
    tel?: string, picture?: string) {

//add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve,5000))
    const requestBody: Record<string, any> = {};

    if (name) requestBody.name = name;
    if (address) requestBody.address = address;
    if (operatingHours) requestBody.operatingHours = operatingHours;
    if (province) requestBody.province = province;
    if (postalcode) requestBody.postalcode = postalcode;
    if (tel) requestBody.tel = tel;
    if (picture) requestBody.picture = picture;

    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${coworkingspaceId}`,{
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can adjust this header based on your API requirements
          },
        body: JSON.stringify(requestBody)
    })
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspaces")
    } 
    return await response.json()
}
