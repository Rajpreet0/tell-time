import useCurrentUser from '@/hooks/useCurrentUser';
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';

// Function to get Date/Time Information
const getDate = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();

    // Display the current Day
    const day = currentDate.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayNames = days[day];

    
    return `${dayNames} - ${month}/${date}/${year}: `;
}


const HeroDashboard = () => {

    // Load User Information
    const {data: user} = useCurrentUser();

    // Timing Values
    const [currentDate, setCurrentDate] = useState(getDate());
    const [clockValue, setClockValue] = useState(new Date());
    const [weekStatus, setWeekStatus] = useState('0%');

    useEffect(() => {
        // Set Interval for the Clock 
        const interval = setInterval(() => setClockValue(new Date()), 1000);
        
        const dayOfWeek = new Date().getDay();
        let progress = 0;

        // Calculate if in Working Day 
        if(dayOfWeek >= 1 && dayOfWeek <= 5){
            progress = (dayOfWeek*20);
        }

        // Set Caluclated Value in the StatusBar
        setWeekStatus(`${progress}%`);

        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div className='bg-gray-200 rounded-md shadow-xl p-4 w-full h-[3/4] flex flex-row items-center justify-around'>
        <div>
            <h1 className='text-4xl font-semibold tracking-wider '>{user?.name}</h1>
            <p className='mt-2 italic text-gray-500'>{currentDate}</p>
            <div className='w-full mt-4 bg-gray-300 rounded-full h-2.5'>
                <div className='bg-green-500 h-2.5 rounded-full' style={{width: weekStatus}}></div>
            </div>
        </div>
        <Clock value={clockValue}/>
    </div>
  )
}

export default HeroDashboard