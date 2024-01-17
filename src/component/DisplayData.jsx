import React, { useContext } from 'react'
import { Data } from './DataContext'

export default function DisplayData({item,id}) {
  const ctx = useContext(Data)
  const handelDelete = (id)=>{
    console.log(id);
    const updatedata = ctx.data.filter((ele)=>{
      return ele.AadharNo !== id;
    })
    ctx.setData(updatedata)
    localStorage.setItem('data',JSON.stringify(updatedata))
  }
  return (
    
        <tr className='border border-[#000]'>
            <td className='border-r border-l border-[#000] w-3/12 py-[6px] text-center capitalize'>{item.Name}</td>
            <td className='border-r  border-[#000] w-1/12 text-center '>{item.Dob}</td>
            <td className='border-r border-[#000] w-2/12 text-center'>{item.AadharNo}</td>
            <td className='border-r border-[#000] w-2/12 text-center'>{item.MobileNo}</td>
            <td className='border-r border-[#000] w-1/12 text-center '>{item.Age}</td>
            <td className='border-r border-[#000] w-2/12 text-center '><button className='hover:underline hover:text-[#4472C4]' onClick={()=>{handelDelete(item.AadharNo)}}>delete</button></td>
        </tr>
    
  )
}
