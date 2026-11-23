"use client";
import { LoginForm } from '@/components/login-form'
import { Spinner } from '@/components/ui/spinner'
import { authClient } from '@/lib/auth-client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const SignInContent = () => {
    const {data , isPending} = authClient.useSession()
  const router = useRouter()
  const redirect = useSearchParams().get("redirect")
  const callbackPath = redirect && /^\/device\?user_code=[A-Z0-9]{8}$/.test(redirect) ? redirect : "/"
  
  useEffect(() => {
    if (!isPending && (data?.session || data?.user)) {
      router.push(callbackPath)
    }
  }, [callbackPath, data, isPending, router])

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner />
      </div>
    )
  }

  if (data?.session || data?.user) {
    return null
  }
    
  
  return (
    <>
    <LoginForm callbackPath={callbackPath} />
    </>
  )
}

export default function Page() {
  return (
    <Suspense>
      <SignInContent />
    </Suspense>
  )
}
