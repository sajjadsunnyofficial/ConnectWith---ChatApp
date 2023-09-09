import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/Ai';

const Register = () => {
    // input value pass
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._]+@(gmail\.com|yahoo\.com|hotmail\.com)$/;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('')
    }
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('')
    }
    // input error
    const [emailError, setEmailError] = useState('')
    const [fullNameError, setFullNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = () => {
        if (!email) {
            setEmailError('Enter your E-mail to signup');
        } else if (isValidEmail(email)) {
            console.log('valid');
        } else {
            console.log('invalid');
            setEmailError('Please Enter your valid E-mail');
        }

        if (!fullName) {
            setFullNameError('Please Enter your Full Name');
        }

        if (!password) {
            setPasswordError('Please Enter your Password');
        }
    }

    // password visible on click
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <>
            <section className='h-screen sm:h-auto md:h-screen flex'>
                <div className="w-full sm:w-[60%] md:w-[55%] h-full flex justify-center xl:justify-end items-center sm:py-8 md:p-0">
                    <div className="xl:mr-[130px] px-3 md:px-5 lg:px-0">
                        <h2 className='font-nunito text-center lg:text-start md:w-full text-3xl md:text-[34px] font-bold text-headColor mx-auto md:mx-0'>Get started with easily register</h2>
                        <p className='font-nunito text-xl text-center lg:text-start font-regular text-black opacity-50 mb-2 md:mb-0 md:mt-2 mt-2 md:mt-[13px]'>Free register and you can enjoy it</p>
                        <form className='w-full lg:w-[398px]'>
                            <div className="relative">
                                {
                                    emailError &&
                                    <div className=" absolute bottom-full left-1/2 translate-x-[-50%] translate-y-[-15px]">
                                        <h5 className="emailError error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:left-2/4 after:translate-x-[-50%] after:border-8 after:border-solid select-none">{emailError}</h5>
                                    </div>
                                }
                                <div className='relative mt-12 md:mt-[55px]'>
                                    <input onChange={handleEmail} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${emailError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='Email' type="email" placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor  absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] cursor-text duration-300 select-none ${emailError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="Email">Email Address</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    fullNameError &&
                                    <div className=" absolute bottom-full left-1/2 translate-x-[-50%] translate-y-[-15px]">
                                        <h5 className="error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:left-2/4 after:translate-x-[-50%] after:border-8 after:border-solid select-none">{fullNameError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-[60px]">
                                    <input onChange={handleFullName} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-2 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor capitalize focus:opacity-70 ${fullNameError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='name' type="text" placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] duration-300 cursor-text select-none ${fullNameError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="name">Full Name</label>
                                </div>
                            </div>

                            <div className="relative">
                                {
                                    passwordError &&
                                    <div className=" absolute bottom-full left-1/2 translate-x-[-50%] translate-y-[-15px]">
                                        <h5 className="error py-1 px-3 bg-errorBg whitespace-nowrap font-nunito text-sm md:text-base font-semibold rounded text-white after:content-[''] after:absolute after:top-full after:left-2/4 after:translate-x-[-50%] after:border-8 after:border-solid select-none">{passwordError}</h5>
                                    </div>
                                }
                                <div className="relative mt-12 md:mt-[60px]">
                                    <input onChange={handlePassword} className={`input py-3 md:py-6 pl-7 md:pl-12 pr-14 w-full border-2 rounded-[8.6px] focus:outline-none font-nunito text-xl font-medium md:font-semibold text-headColor focus:opacity-70 ${passwordError ? 'border-red-600 focus:border-headColor' : 'border-headColor opacity-30'}`} id='password' type={passwordVisible ? 'text' : 'password'} value={password} placeholder='' />
                                    <label className={`label font-nunito text-xl font-medium md:font-semibold text-labelColor absolute top-1/2 left-0 translate-x-[28px] md:translate-x-[52px] translate-y-[-50%] duration-300 cursor-text select-none ${passwordError ? 'text-red-600 opacity-1000' : 'opacity-30 '}`} htmlFor="password">Password</label>

                                    <div onClick={togglePasswordVisiblity} className={`text-3xl p-2 absolute right-4 top-1/2 translate-y-[-50%] opacity-30 cursor-pointer duration-200 ${passwordVisible ? 'text-themeColor opacity-90' : 'text-black'}`}>{passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
                                </div>
                            </div>

                            <button onClick={handleSubmit} className='py-5 w-full font-nunito text-xl text-white font-semibold text-center bg-themeColor border-2 border-solid border-themeColor rounded-[86px] hover:bg-white hover:text-themeColor duration-300 mt-[42px] mb-[25px]' type="button">Sign up</button>
                            <div>
                                <p className='font-openSans text-sm font-regular text-[#03014C] text-center'>Already  have an account ? <a className='font-bold text-[#EA6C00]' href="#">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="w-full sm:w-[40%] md:w-[45%] bg-registerBanner bg-no-repeat bg-cover bg-center hidden sm:block"></div>
            </section >
        </>
    )
}

export default Register