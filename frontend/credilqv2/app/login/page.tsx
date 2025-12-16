"use client"

import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-primary font-bold text-lg">
            ← Back to credilq
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Log in to your credilq account</p>
        </div>

        <LoginForm />

        <p className="text-center text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary font-semibold hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}
