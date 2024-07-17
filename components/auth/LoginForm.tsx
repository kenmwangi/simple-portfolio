"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import { loginSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginAction } from "@/actions/auth-action";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import SocialButton from "./SocialButton";
import Image from "next/image";

interface LoginFormProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

export default function LoginForm({
  isVerified,
  OAuthAccountNotLinked,
}: LoginFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError(null);
    startTransition(async () => {
      const res = await loginAction(values);
      if (res.error) {
        setError(res.error);
      } else {
        router.push("/dashboard");
      }
      console.log(res);
    });
  }
  return (
    <section className="flex items-center flex-col">
      {isVerified && (
        <p className="px-4 py-3 rounded-md text-center font-semibold bg-green-50 text-teal-600 my-5 pb-3 text-sm border-b border-neutral-100">
          Email verified, you can now login
        </p>
      )}

      {OAuthAccountNotLinked && (
        <p className="text-center text-rose-500 mb-5 text-sm">
          To confirm your identity, sign in with the same account you used
          originally.
        </p>
      )}

      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="yourdomain@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center my-2">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline underline-offset-1"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <FormMessage className="text-sm">{error}</FormMessage>}

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Please wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              <p className="text-center text-sm">Or</p>
            </form>
          </Form>
          <SocialButton provider="google">
            Sign in with
            <Image
              height={16}
              width={16}
              alt="Google"
              src="/assets/google.svg"
              className=""
            />
          </SocialButton>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
