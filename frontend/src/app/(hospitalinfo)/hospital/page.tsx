import Panel from '@/components/Panel'
import getHospitals from '@/libs/getHospitals'
import React from 'react'
import {Suspense} from 'react'
import HospitalCatalog from '../../../components/HospitalCatalog';
import { LinearProgress } from '@mui/material';
import AddHospitalForm from '@/components/AddHospitalForm';

export default function page() {
  const hospitals = getHospitals()
  if(hospitals){
    console.log(hospitals)
  }
  
  return (
    <main className='p-5'>
        <h1 className='text-center text-xl font-medium'>Select something unless you will die</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog hospitalJson={hospitals} />
        <AddHospitalForm/>
        </Suspense>
    </main>
  )
}
