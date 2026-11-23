"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card , CardContent } from "./ui/card";
import { authClient } from "@/lib/auth-client";


export const LoginForm = ({ callbackPath }: { callbackPath: string }) => {

    return (
  <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center px-6 py-10">
    <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40">

      <div className="grid min-h-[650px] md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">

          {/* Brand */}
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-lg shadow-md shadow-indigo-200">
              C
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Crux <span className="text-indigo-600">CLI</span>
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Connect to
              <span className="block text-indigo-600">
                Crux CLI.
              </span>
            </h1>

            <p className="max-w-md text-base leading-7 text-slate-500">
              Authenticate your account to securely connect
              your device and get started with your workflow.
            </p>
          </div>

          {/* Auth section */}
          <div className="mt-10 space-y-5">

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  {/* Use your icon here */}
                  <span className="text-lg">⌘</span>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Device authorization
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Link your device to your account
                    through a secure authentication flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Added Github Auth Button */}
						<Button
              variant="outline"
              className="w-full h-12 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 font-medium flex items-center justify-center gap-2"
              type="button"
              onClick={() => authClient.signIn.social({
                  provider: "github",
                  callbackURL: new URL(callbackPath, window.location.origin).href,
                })
              }
            >
              <Image
                src="/github.svg"
                alt="Github"
                height={16}
                width={16}
                className="size-4 dark:invert"
             />
            Continue With Github
          </Button>
        </div>

          {/* Security footer */}
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <span className="text-indigo-500">✓</span>
            Secure device authorization
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 py-10">

          {/* Decorative background */}
          <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="absolute bottom-[-100px] left-[-80px] h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

          {/* Illustration */}
          <div className="relative z-10 w-full max-w-[500px]">
            <Image
              src="/login.svg"
              alt="Crux CLI device authentication"
              width={900}
              height={900}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(79,70,229,0.12)]"
            />
          </div>

        </div>

      </div>
    </div>
  </div>
);
};