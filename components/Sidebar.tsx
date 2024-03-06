import React from 'react'
import SidebarItem from './SidebarItem'
import { MdDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className='z-10 h-full bg-[#112936] drop-shadow-xl lg:w-[15%] flex flex-col'>
        <div className='w-full p-8 flex flex-row items-center justify-center'>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-10 h-10 ring-2 ring-white '></div>
            <p className='text-white font-semibold font-xl pl-4'>Username</p>
        </div>
        <hr/>
        <div className='flex flex-col justify-between flex-grow'>
            <div className='flex flex-col  gap-4 w-full mt-6 items-center justify-center p-4'>
                <SidebarItem href='/' name='Dashboard' Icon={MdDashboard}/>
                <SidebarItem href='/applications' name='Applications' Icon={IoDocumentText}/>
                <SidebarItem href='/calendar' name='Calendar' Icon={FaCalendarAlt}/>
            </div>
            <div className=' w-full p-4'>
                <SidebarItem href='/auth' name='Logout' Icon={CiLogout}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar