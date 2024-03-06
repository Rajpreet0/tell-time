import React from 'react'

const auth = () => {
  return (
    <div className="relative h-full bg-[url('/images/auth-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black bg-opacity-40 w-full h-full'>
            <nav className='px-12 py-5'>
                <img src='/images/logo.png' alt='logo' className='h-12'></img>
            </nav>
            <div className='flex justify-center'>
                <div className='bg-sec_bg bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        Login
                    </h2>
                    <div className='flex flex-col gap-4'>
                        
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default auth