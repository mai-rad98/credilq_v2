"use client"

import Link from "next/link"
import { SignupForm } from "@/components/auth/signup-form"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-primary font-bold text-lg">
            ← Back to credilq
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Start Your Free Account</h1>
          <p className="text-muted-foreground">
            Join thousands of business owners managing their finances with credilq
          </p>
        </div>

        <SignupForm />

        <p className="text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  )
}
