import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please sign in instead.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign up is not enabled.';
    case 'permission-denied':
    case 'PERMISSION_DENIED':
      return 'Unable to create account. Please try again.';
    default:
      return 'An error occurred. Please try again.';
  }
};

const Signup = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {signUp} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try{
            await signUp(email, password)
            navigate('/')
        }catch (error){
            console.log(error)
            setError(getErrorMessage(error.code))
        }
        setLoading(false)
    }

  return (
    <>
    <div className='w-full h-full'></div>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/7540883d-de7a-4a69-8cc6-c3885d3a2b0b/IN-en-20230522-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
    <div className='max-w-[320px] mx-auto py-16'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' />
            <button disabled={loading} className='bg-red-600 py-3 my-6 rounded font-bold disabled:opacity-50'>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
            <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need Help?</p>
            </div>
            <p className='py-8'><span className='text-gray-600'>
                Already Subscribed to netflix? 
            </span>{' '} 
            <Link to='/login'>Sign In</Link>
            </p>
        </form>
    </div>
    </div>
    </div>
    </div>
    </>

  )
}

export default Signup