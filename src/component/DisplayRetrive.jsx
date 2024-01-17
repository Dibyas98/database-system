import React from 'react'

export default function DisplayRetrive({item}) {
  console.log(item);
  return (
    <div className='border border-[#000] px-5'>
      <p>Name:- <span className='capitalize'>{item.Name}</span></p>
      <p>Dob:- {item.Dob}</p>
      <p>Aadhar Number:- {item.AadarNo}</p>
      <p>Mobile Number:- {item.MobileNo}</p>
      <p>Age:- {item.Age}</p>
    </div>
  )
}
