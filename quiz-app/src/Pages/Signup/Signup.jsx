import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Signup() {

  const navigate = useNavigate();
  const phoneRegex = /^(?:\+?(\d{1,3}))?[-.●]?((\(\d{1,4}\))|\d{1,4})[-.●]?\d{1,4}[-.●]?\d{1,9}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;


  const validationSchema = Yup.object({
    name: Yup.string().required('name is required').min(3, 'Name should consist of 3 characters at least.').max(8, 'Name should consist of 8 characters at most.'),
    email: Yup.string().required('email is required ').email('email is not valid'),
    phone: Yup.string().required('phone is required ').matches(phoneRegex, 'phone is not valid'),
    password: Yup.string().required('password is required').matches(passwordRegex, 'password should start with uppercase letter followed by combination of letters and numbers between 8 and 15'),
    repassword: Yup.string().required('repassword is required').oneOf([Yup.ref('password')], "repassword should be the same as password")

  })


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      repassword: '',
    },
    validationSchema,
    onSubmit:(values)=>{
      console.log(values);
      navigate('/login')
    },
    validateOnMount: true,
  })

  const handleSubmit=(e) =>{
    e.preventDefault();
    formik.handleSubmit(e)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='border relative bg-[#601A40] border-gray-500 container md:w-1/3 lg:w-1/4 m-auto my-16 flex px-4 flex-col h-[550px]  py-16 rounded-md' >
        <div>
          <input
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3 '
            type="text" placeholder='Enter your name' />

          {formik.errors.name && formik.touched.name ? (
            <div className='text-red-600 font-semibold mt-2'>
              *{formik.errors.name}
            </div>
          ) : ('')}

        </div>
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
        name='phone'
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3' type='tel' placeholder='Enter your phone' />
        {formik.errors.phone && formik.touched.phone? (
          <div className='text-red-600 font-semibold mt-2'>
            *{formik.errors.phone}
          </div>
        ):('')}
       </div>

     <div>
     <input
     name='password'
     value={formik.values.password}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3' type='password' placeholder='Enter password' />
     {formik.errors.password && formik.touched.password? (
      <div className='text-red-600 font-semibold mt-2'> 
      *{formik.errors.password}
      </div>
     ):('')}
     </div>

        <div>
        <input
        name='repassword'
        value={formik.values.repassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className='border border-gray-300 px-2 py-1 w-full rounded-md mb-3' type='password' placeholder='Enter repassword' />
        {formik.errors.repassword && formik.touched.repassword? (
          <div  className='text-red-600 font-semibold mt-2'>
            *{formik.errors.repassword}
             </div>
        ):('')}
        </div>

        <button type='submit' className='bg-white text-[#601A40] font-bold mt-4 rounded-md px-2 py-1 w-1/2 mx-auto' 
        disabled={!formik.isValid || formik.isSubmitting}
      > Sign Up</button>
       <button 
           onClick={()=>navigate('/startpage')}
           className='text-left'><i className="fa-solid fa-arrow-left text-2xl  ml-4 absolute bottom-4 left-2 mt-6 font-bold  text-white"></i></button>
   
      </form>
    </>
  )
}
