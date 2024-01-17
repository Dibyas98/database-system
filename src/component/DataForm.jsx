import React, { useContext, useEffect, useRef, useState } from 'react'
import { Data, Dia } from './DataContext';
import AlreadyExit from './AlreadyExit';

export default function DataForm({ changeadd }) {
  const ctx = useContext(Data)
  const nameRef = useRef(),
    dateRef = useRef(),
    aadharRef = useRef(),
    mobilRef = useRef();


  const ctxdia = useContext(Dia)



  const handelSubmt = (e) => {
    e.preventDefault();
  
    if (ctx.data.some((ele) => ele.AadharNo === aadharRef.current.value || ele.MobileNo === mobilRef.current.value)) {
      ctxdia.setdia(!ctxdia.dia)
    } else {
      let newData = {
        Name: nameRef.current.value,
        Dob: dateRef.current.value,
        AadharNo: aadharRef.current.value,
        MobileNo: mobilRef.current.value,
        Age: new Date().getFullYear() - dateRef.current.value.split('-')[0],
      };
      
      const updateData = [...ctx.data, newData];
      ctx.setData((prev) => [...prev, newData]);
      localStorage.setItem('data', JSON.stringify(updateData));
  
      changeadd('save');
    }
  };
  
  

  return (
    <div className='w-11/12 flex flex-col items-center bg-[#4472C4] text-[#fff] py-2 gap-2'>
      <p className=' text-l font-semibold '>Fill Below form for New entry</p>
      <form className='text-[#000] w-full flex gap-2 pl-10 ' onSubmit={handelSubmt}>
        <input type="text" placeholder='Name' className='w-3/12 pl-3' ref={nameRef} required/>
        <input type="date" name="" id="" className=' px-3' ref={dateRef} required/>
        <input type="number" name="" placeholder='Aadhar Number' id="" required min={100000000000} max={999999999999} className='w-2/12 pl-3' ref={aadharRef} />
        <input type="number" name="" placeholder='Mobile Number' id="" className='w-2/12 pl-3' ref={mobilRef} required min={1000000000} max={9999999999}/>
        <input type="text" disabled className='w-1/12 pl-3' value={0}/>
        <button className='w-2/12 bg-[#fff] ' >Save</button>
      </form>
      
    </div>
  )
}
