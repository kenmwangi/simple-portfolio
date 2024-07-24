"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";
import { registerSchema } from "@/lib/validations";
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
import { loginAction, registerAction } from "@/actions/auth-action";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import SocialButton from "./SocialButton";
import Image from "next/image";

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null);
    startTransition(async () => {
      const res = await registerAction(values);
      if (res.error) {
        setError(res.error);
      } else {
        router.push("/login");
      }
      console.log(res);
    });
  }
  return (
    <Card className="w-full sm:w-96 relative z-10">
      <CardHeader className="space-y-1">
        <h1 className="text-2xl leading-relaxed font-medium">
          Get started with Ken Mwangi
        </h1>
        <CardDescription className="mt-2 text-stone-400 flex items-center gap-2">
          Already have an account?
          <Link
            href="/login"
            className="hover:underline transition-all text-primary"
          >
            Sign in
          </Link>
        </CardDescription>

        <div className="grid grid-cols-1 gap-2">
          <SocialButton provider="google">
            <Image
              height={16}
              width={16}
              alt="Google"
              src="/assets/google.svg"
              className=""
            />
            Google
          </SocialButton>
          <div className="text-sm mt-3 text-stone-400 text-center">
            or using email and password
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John doe"
                      {...field}
                      className="placeholder:text-stone-400 placeholder:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="yourdomain@example.com"
                      {...field}
                      className="placeholder:text-stone-400 placeholder:text-xs"
                    />
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
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Password"
                      {...field}
                      type="password"
                      className="placeholder:text-stone-400 placeholder:text-xs"
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
                "Register"
              )}
            </Button>
          </form>
        </Form>

        <p className="mt-2 text-stone-300 text-[13px]">
          By signing up, you agree to the{" "}
          <Link
            href="#"
            className="hover:underline inline-flex font-medium !text-stone-400"
          >
            Terms & conditions
          </Link>
          <span className="ml-0.5">and</span>
          <Link
            href="#"
            className="hover:underline inline-flex font-medium !text-stone-400"
          >
            Privacy policy
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
