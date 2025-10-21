"use client"
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button";
import InputFields from '@/components/forms/InputFields';



import FooterLink from "@/components/forms/FooterLink";

const page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues : {

      email : '',
      password : '',
}
  })

  const onSubmit: SubmitHandler<SignInFormData> = (data) => async (data : SignInFormData)  => {
    try {
      console.log(data)
    }catch (error) {
console.error(error)
    }
  }
  return (
    <>
    <h1 className="form-title">Log In Your Account </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

        <InputFields
            name="email"
            label="Email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
            validation={{ required: 'Email name is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
            disabled={isSubmitting}
            type="email"

        />

        <InputFields
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            register={register}
            error={errors.password}
            validation={{ required: 'Password is required', minLength: 8 }}
        />



        <Button type="submit" className="w-full mt-5 yellow-btn" disabled={isSubmitting}>
    {isSubmitting ? 'Logging...' : 'Log In'}
</Button>
        <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
      </form>
    </>
  )
}

export default page
 