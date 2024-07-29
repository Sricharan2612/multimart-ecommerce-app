import React, { useState } from 'react';
//Images
import login from '../assets/images/login.gif';
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <section className='flex justify-evenly  items-center gap-5 px-10 lg:px-20 h-[90vh]'>
                <div className='md:w-auto xl:w-[40%] hidden md:block'>
                    <img src={login} alt="signUpImage" className='w-[100%]' />
                </div>
                <div className='shrink-0 w-full sm:w-[320px] lg:w-[380px] xl:w-[450px]  px-6 sm:px-10 pt-5 pb-10 sm:pt-12 sm:pb-16 rounded-md  shadow-[4px_4px_7px__1px#b1afaf,-4px_-4px_7px_#b1afaf] bg-[#081A36] text-white'>
                    <h2 className='text-3xl lg:text-4xl font-[600] mb-5 md:mb-8'>LogIn</h2>
                    <form action="" >
                        <div className='border border-[#b1afaf] rounded mb-3'>
                            <input
                                type="email"
                                placeholder='example@gmail.com'
                                className='w-[100%] px-3 py-2 outline-none'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='border border-[#b1afaf] rounded mb-6'>
                            <input
                                type="password"
                                placeholder='Password'
                                className='w-[100%] px-3 py-2 outline-none'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className='bg-white text-[#081B31] px-4 py-3 border-0 rounded cursor-pointer active:scale-[0.95] duration-100 w-[100%] font-[600]'>Log In</button>
                    </form>
                    <p className='text-sm mt-4 font-[400]'>
                        Don't have an account?
                        <Link to='/signup' className='hover:underline font-semibold'>
                            <span className='ms-1'>SignUp</span>
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Login;
