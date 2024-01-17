import React, { useState } from 'react'
import Button from './Button'
import AddPeraon from './AddPeraon'
import Retrive from './Retrive';
import AlreadyExit from './AlreadyExit';
import { Dia } from './DataContext';

export default function Main() {
    const [add,setadd] = useState(false);
    const handelAdd = (arg)=>{
        switch (arg){
            case 'add':
                return setadd(true);
            case 'save':
                return setadd(false)
        }
    }
    const [sectio,setsection]=useState('Add New Person');
    const handleSection=(arg)=>{
        console.log(arg);
        setsection(arg)
    }
    const [dia,setdia] = useState(false)
    return (
        <Dia.Provider value={{dia,setdia}}>
        <section className='h-screen flex flex-col items-center '>
            <div className=' flex gap-10 pl-16 py-5 w-full'>
                <Button text={'Add New Person'} show={handleSection}></Button>
                <Button text={'Retrieve Infromation'} show={handleSection}></Button>
            </div>
            <div className='border w-11/12 h-3/4 border-[#000] relative '>
            <p className='border w-2/12 text-l font-semibold text-center py-4 border-b-[#000] border-r-[#000]'>{sectio}</p>
                {sectio === 'Add New Person'?<>
                <AddPeraon add={add} changeadd = {handelAdd}></AddPeraon><button onClick={()=>{handelAdd('add')}} className='border w-28 bg-[#4472C4] text-[#fff] absolute  bottom-10 right-10'>Add</button></>:<Retrive></Retrive>}
            </div>
            <AlreadyExit></AlreadyExit>
        </section>
        </Dia.Provider>
    )
}
