
import generateDate from './utils/calendar';
import cn from "./cn"
import dayjs from 'dayjs';
import { useState } from 'react';
import { months } from './utils/calendar';
import {GrFormNext,GrFormPrevious} from "react-icons/gr"; 



function App() {
  const days = ["S","M","T","W","T","F","S"]
  const currentDay = dayjs();
  const [today,setToday] = useState(currentDay);
  const [selectedDate,setSelectedDate] = useState(currentDay)

  return (
    <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center'>
    <div className='w-96 h-96'>
   <div className='flex items-center justify-between gap-10'>
   <h1>{months[today.month()]},{today.year()}</h1>
   <div className='flex items-center gap-5' >
   <GrFormPrevious className='w-5 h-5 cursor-pointer ' onClick={
    ()=>{
      setToday(today.month(today.month()-1))
    }
   }/>
    <h1 className='cursor-pointer' onClick={()=>{
      setToday(currentDay)
    }}>Today</h1>
    <GrFormNext className='w-5 h-5 cursor-pointer' onClick={
    ()=>{
      setToday(today.month(today.month()+1))
    } } />
   </div>
   </div>
    <div className='w-full grid grid-cols-7 text-gray-500'> 
    {days.map((day,index)=>{
      return <div className='h-14 grid place-content-center' key={index}>
        <h1>{day}</h1>
      </div>
     })}
     </div>
    <div className=' w-full  grid grid-cols-7'> 
    {generateDate(today.month(),today.year()).map(({date,currentMonth,today},index)=>{
      return <div className='h-14 border-t grid place-content-center text-sm' key={index}>
        <h1 className={cn(currentMonth?"":"text-gray-400",
        today?" bg-red-600  text-white":"",
        "h-10 w-10 grid place-content-center transition-all cursor-pointer  rounded-full text-grey-50 hover:bg-black hover:text-white",
        selectedDate.toDate().toDateString()===date.toDate().toDateString()?"bg-black text-white":"") }
        onClick={()=>{
          setSelectedDate(date)
        }}
        > {date.date()}</h1>
      </div>
     })}
     </div>
    </div>
    <div className='h-96 px-5 w-96'>
      <h1 className="font-semibold">
        Schedule for {selectedDate.toDate().toDateString()}
      </h1>
      <p>No Meetings Today</p>
    </div>
    </div>
  )
}

export default App
