import useCurrentUser from '@/hooks/useCurrentUser';
import useWorkedTimes from '@/hooks/useWorkedTimes';
import React, { useEffect, useState } from 'react'

const TimeComponentDashboard = () => {

    const [progress, setProgress] = useState(0);
    const percentage = 88;

    const {data: workedTimes = []} = useWorkedTimes();

    const formatDuration = (minutes: any) => {
      const hours = Math.floor(minutes/60);
      const remainingMinutes = minutes % 60;

      return `${hours}h ${remainingMinutes}min`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (progress < percentage) {
            setProgress(progress + 1);
          }
        }, 20); // Adjust speed of progress
    
        return () => clearInterval(interval);
      }, [progress, percentage]);

      const totalDuration = workedTimes.reduce((acc: any, curr: any) => acc + curr.duration, 0);


    //TODO: Connection with DB get the percentage worked & calculate the percentage of the contract working hours in a week 
  return (
    <div className='mt-2 p-4 w-[40%] rounded-md shadow-xl bg-gray-200'>
       <p className='text-gray-800'>Weekly Houre Rate</p> 
        <div className='relative mt-2'>
                <div className='w-48 h-48 mx-auto'>
                    <svg className="w-full h-full" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                        <circle className='stroke-current text-gray-300' strokeWidth="8" fill='transparent' r="52" cx="60" cy="60"></circle>
                        <circle
                            className='stroke-current text-green-500'
                            strokeWidth="8"
                            fill='transparent'
                            r="52"
                            cx="60"
                            cy="60"
                            style={{
                                strokeDasharray: `${Math.PI * 2 * 52}`,
                                strokeDashoffset: `${(100 - progress) / 100 * Math.PI * 2 * 52}`,
                            }}
                        />
                        <text x="50%" y="50%" textAnchor='middle'  dominantBaseline="middle" className="text-lg font-semibold text-gray-700">
                            {formatDuration(totalDuration)}
                        </text>
                    </svg>
                </div>
        </div>
    </div>
  )
}

export default TimeComponentDashboard