import React from 'react';
import { useRouter } from 'next/router';

interface SidebarItemProps {
    name: string;
    href: string;
    Icon: React.ElementType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({name, href, Icon}) => {
    const router = useRouter();

    return (
        <div className='flex flex-row items-center justify-start cursor-pointer p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 w-full'>
            <Icon size={24} className='text-white mr-4'/>
            <p 
                onClick={() => router.push(href)}
                className='text-white text-lg font-medium transition-colors duration-200'>
                {name}
            </p>
        </div>
    )
}

export default SidebarItem;