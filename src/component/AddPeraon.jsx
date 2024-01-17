import React, { useContext } from 'react'
import Button from './Button'
import DataForm from './DataForm'
import DisplayData from './DisplayData'
import { Data } from './DataContext'
import { nanoid } from 'nanoid'

export default function AddPeraon({add,changeadd}) {

  const ctx = useContext(Data);
  return (
    <div className='flex flex-col gap-5 pt-5'>
      <section className=" flex flex-col items-center gap-2">
      <table className='w-11/12 '>
    <thead className='border w-full bg-[#4472C4] text-[#fff] '>
        <tr>
            <th className='border-r border-l  w-3/12 py-[6px]'>Name</th>
            <th className='border-r w-1/12'>Date of Birth</th>
            <th className='border-r w-2/12'>Aadhar Number</th>
            <th className='border-r w-2/12'>Mobile Number</th>
            <th className='border-r w-1/12'>Age</th>
            <th className='border-r w-2/12'>Actions</th>
        </tr>
    </thead>
    <tbody>
    {ctx.data.length>0?ctx.data.map((item)=>{
      const id =nanoid()
      return <DisplayData key={id} item={item} id={id}/>
    }):<tr><td colSpan={6} className=' text-center text-4xl font-semibold'>No Data Found</td></tr>}
    </tbody>
</table>


        {add?<DataForm changeadd = {changeadd}></DataForm>:null}
      </section>
      
    </div>
  )
}
