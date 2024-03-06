import Input from '@/components/Input'
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'

const auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((current) => current === 'login' ? 'register' : 'login');
    }, []);

    const router = useRouter();

    const redirect = () => {
        router.push('/');
    }

  return (
    <div className="relative h-full bg-[url('/images/auth-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black bg-opacity-30 w-full h-full'>
            <nav className='px-12 py-5'>
                <img src='/images/logo.png' alt='logo' className='h-12'></img>
            </nav>
            <div className='flex justify-center'>
                <div className='bg-sec_bg bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        {variant === 'login' ? 'Login' : 'Register'}
                    </h2>
                    <div className='flex flex-col gap-4'>
                       {variant === 'register' && ( 
                            <Input
                                label='Username'
                                onChange={(e: any) => setUsername(e.target.value)}
                                id='username'
                                value={username}
                            />
                        )}
                        <Input
                            label="Email"
                            onChange={(e: any) => setEmail(e.target.value)}
                            id='name'
                            value={email}
                        />
                        <Input
                            label="Password"
                            onChange={(e: any) => setPassword(e.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button onClick={redirect} type='submit' className='bg-bg py-3 text-white rounded-md w-full mt-10 hover:bg-bg-darker transition'>
                        {variant === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                    <p  onClick={toggleVariant} className='text-neutral-700 mt-12'>
                        {variant === 'login' ? 'New here?' : 'Already have an Account?'} 
                        <span className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant === 'login' ? 'Create an Account' : 'Login'}
                        </span> 
                    </p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default auth