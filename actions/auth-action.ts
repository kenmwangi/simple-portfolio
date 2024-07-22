"use server"
import bcrypt from 'bcryptjs';
import prisma from "@/lib/prisma";
import { signIn } from "@/auth";
import { loginSchema, registerSchema } from "@/lib/validations";
import { AuthError } from "next-auth";
import { z } from "zod"
export const loginAction = async (values: z.infer<typeof loginSchema>) => {
    try {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        return { success: true }
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
        }
        return { error: "error 500" }
    }
}

export const registerAction = async (values: z.infer<typeof registerSchema>) => {
    try {
        const { data, success } = registerSchema.safeParse(values);
        if (!success) {
            return { error: "Invalid data" }
        }
        // Verify if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (user) {
            return {
                error: "User already exists"
            }
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(data.password, 10);
        // create a user
        await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: hashedPassword,
            }
        })

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        return { success: true }
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
        }
        return { error: "error 500" }

    }
}