import * as z from 'zod'

export const SignupSchema = z.object({
    fullName:z.string().min(3,"name should be 3 characters"),
    email:z.email(),
    password:z.string().min(6,'minimum 6 characters should needed')
})