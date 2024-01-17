import React, { useContext, useState } from 'react';
import { Dia } from './DataContext';

export default function AlreadyExit() {
    const ctxdia= useContext(Dia)
    const handelDone=()=>{
      ctxdia.setdia(!ctxdia.dia)
    }
  return (
    <>
    {ctxdia.dia?<div className='fixed w-full h-screen flex  justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0,0.5)' }}>
      <div className='w-3/12 bg-[#fff] flex flex-col items-center gap-3 p-5 rounded'>
      <p className='text-2xl'>Already Exist This Data</p>
        <button className='button-7' onClick={handelDone}>Done</button>
      </div>
    </div>:null}
    </>
  );
}
