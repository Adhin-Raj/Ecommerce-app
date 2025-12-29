import * as z from 'zod'

export const SignupSchema = z.object({
    firstName:z.string().min(3,"name should be atleast 3 characters"),
    lastName:z.string().min(1,'last name should be atleast 1 character'),
    email:z.email(),
    password:z.string().min(6,'minimum 6 characters should needed')
})