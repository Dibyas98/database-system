import React, { useContext, useRef, useState } from 'react'
import { Data } from './DataContext'
import DisplayRetrive from './DisplayRetrive';

export default function Retrive() {
    const ctx = useContext(Data);
    const search =useRef()
    const [searchUser,setuser] =useState(false)
    const handelSearch=()=>{
        const searchData = ctx.data.filter((item)=>{
            return (item.AadharNo == search.current.value || item.MobileNo === search.current.value)
        })
      //  console.log(searchData[0]);
        setuser(searchData[0])
        
    }
  return (
    <div className='flex flex-col gap-6 p-5 gap-5'>
      <div className='flex gap-5'><input type="number" className='px-2 border-2 border-[#000] w-4/12 rounded'ref={search}/>
    <button className='button-7 w-20' onClick={handelSearch}>Find</button></div>
    {searchUser?<DisplayRetrive item={searchUser}></DisplayRetrive>:<h1 className='text-4xl text-center font-bold'>No Data Found</h1>}
    </div>
  )
}
