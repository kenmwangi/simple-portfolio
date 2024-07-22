import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./lib/validations";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { sendEmailVerification } from "./lib/mail";

export default {
  providers: [
    Google,
    Credentials({
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials);

        if (!success) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: data.email,
          },
        });

        if (!user || !user.password) {
          throw new Error(`User '${data.email}' not registered`);
        }

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // Verification email
        if (!user.emailVerified) {
          const verifyTokenExists = await prisma.verificationToken.findFirst({
            where: {
              identifier: user.email,
            },
          });

          // if token exists

          if (verifyTokenExists?.identifier) {
            await prisma.verificationToken.delete({
              where: {
                identifier: user.email,
              },
            });
          }

          const token = nanoid();

          await prisma.verificationToken.create({
            data: {
              identifier: user.email,
              token,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            },
          });

          await sendEmailVerification(user.email, token);

          throw new Error("Please check sent verification email");
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
