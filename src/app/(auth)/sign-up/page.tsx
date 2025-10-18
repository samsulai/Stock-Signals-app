"use client"
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button";
import InputFields from '@/components/forms/InputFields';
import SelectField from '@/components/forms/SelectField';
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
const page = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues : {
            fullName : '',
            email : '',
            password : '',
            country : 'US',
            investmentGoals : 'Growth',
            riskTolerance : 'Medium',
            preferredIndustry : 'Technology',
        },  mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<SignUpFormData> = (data) => async (data : SignUpFormData)  => {
        try {
            console.log(data)
        }catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputFields
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    type="text"
                    validation={{ required: 'Full name is required', minLength: 2 }}
                    disabled={isSubmitting}

                />
                <InputFields
                    name="email"
                    label="Enter your email"
                    placeholder="johndoe@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email name is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
                    disabled={isSubmitting}
                    type="email"

                />

                <InputFields
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />
                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />
                <Button type="submit" className="w-full mt-5 yellow-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
                </Button>
                <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />
            </form>
        </>
    )
}

export default page
