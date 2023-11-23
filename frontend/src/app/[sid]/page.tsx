import React from 'react';
import Location from '@/components/Location';
import getCoworkingspace from '@/libs/getCoworkingspace';

export default async function page({ params }: { params: { sid: string } }) {
  const spaceDetail = await getCoworkingspace(params.sid);
  // console.log(spaceDetail.sid)
  const mockdata = [
    { sid: "655732010ccf82d786003114", location: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwdB8bCqZ4jARIYrlMM4kf5M&key=AIzaSyDSKp1a7vwtKOcZWR7ESYAVqWRXrM86u1o" },
    { sid: "655731490ccf82d78600310f", location: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiYKvNTWZ4jARFx2fwtZVa78&key=AIzaSyDSKp1a7vwtKOcZWR7ESYAVqWRXrM86u1o"}
    ,{ sid: "6557201dea9cb0d9e2a141c2", location: "https://www.google.com/maps/embed/v1/place?q=C%20asean%20Samyan%20CO-OP%2C%20Rama%20IV%20Road%2C%20Wang%20Mai%2C%20Pathum%20Wan%2C%20Bangkok%2C%20Thailand&key=AIzaSyDSKp1a7vwtKOcZWR7ESYAVqWRXrM86u1o"},
    {sid: "655efcc06b8f9b4224e53c3e", location: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt6JvEyuZ4jARfmco0LoB-F4&key=AIzaSyDSKp1a7vwtKOcZWR7ESYAVqWRXrM86u1o"}
    // Add more entries as needed
  ];

  // Find the matching entry in mockdata based on spaceDetail.name
  const matchedLocation = mockdata.find(entry => entry.sid === params.sid);

  return (
    <div className='m-5'>
      <h1 className='text-3xl font-bold text-gray-800 mt-6 mb-16 text-left'>Location of {spaceDetail.data.name}</h1>
      {matchedLocation ? (
        <Location link={
          // matchedLocation.location
          spaceDetail.data.location
        } />
      ) : (
        <p>No matching location found for {spaceDetail.data.name}</p>
      )}
    </div>
  );
}
