import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

export default function Login() {
      const [error, setError] = useState(null);
      const navigate = useNavigate();
      const phoneRegex = /^(?:\+?(\d{1,3}))?[-.●]?((\(\d{1,4}\))|\d{1,4})[-.●]?\d{1,4}[-.●]?\d{1,9}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    
    
      const validationSchema = Yup.object({
        email: Yup.string().required('email is required ').email('email is not valid'),
        password: Yup.string().required('password is required').matches(passwordRegex, 'password should start with uppercase letter followed by combination of letters and numbers between 8 and 15'),
      
      })
    
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema,
      })
    
    return (
        <>
            <form className='border  bg-[#601A35] border-gray-500 container w-1/3 mx-auto flex px-4 flex-col h-[550px]  py-8 rounded-md' >

                <div>
                    <input
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3' type='email' placeholder='Enter your email' />

                    {formik.errors.email && formik.touched.email ? (
                        <div className='text-red-600 font-semibold mt-2'>
                            *{formik.errors.email}
                        </div>
                    ) : ('')}
                </div>


                <div>
                    <input
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3' type='password' placeholder='Enter password' />
                    {formik.errors.password && formik.touched.password ? (
                        <div className='text-red-600 font-semibold mt-2'>
                            *{formik.errors.password}
                        </div>
                    ) : ('')}
                </div>


                <button className='bg-white text-purple-800 rounded-md px-2 py-1 w-1/2 mx-auto' onClick={() => { navigate('/question') }}> Login</button>
            </form>
        </>
    )
}
