import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    
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
        onSubmit:(values)=>{

            const users = JSON.parse(localStorage.getItem('registeredUsers'));
            console.log(users);
            
            const foundUser = users.find((user)=>user.email === values.email && user.password === values.password);

            console.log(values);
            if(foundUser)
            navigate('/levels')
        else
        console.log('email is not found');
        
          },
          validateOnMount: true,
      })

      
  const handleSubmit=(e) =>{
    e.preventDefault();
    formik.handleSubmit(e)
  }
    
    return (
        <>
            <form onSubmit={handleSubmit} className=' relative bg-[#0492C2] container md:w-1/3 lg:w-1/4 m-auto my-16 flex px-4 py-16  flex-col h-[550px]   rounded-md' >

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
                        <div className='text-white font-semibold mt-2'>
                            *{formik.errors.password}
                        </div>
                    ) : ('')}
                </div>


                <button
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
                className='bg-white text-[#0492C2] rounded-md px-2 py-1 w-1/2 mx-auto font-semibold'  > Login</button>

          <button 
         
           className='text-left'><i className="fa-solid fa-arrow-left text-2xl absolute bottom-4 left-2 ml-4  mt-6 font-bold  text-white"></i></button>
       
            </form>
        </>
    )
}
