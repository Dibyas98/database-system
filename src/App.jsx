import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './component/Main'
import { Data } from './component/DataContext'

function App() {
  const [data,setData] = useState(()=>{
    const storeData = localStorage.getItem('data');
    return storeData?JSON.parse(storeData):[];
  });

  return (
    <>
    <Data.Provider value={{data,setData}}>
      <Main></Main>
      </Data.Provider>
    </>
  )
}

export default App
