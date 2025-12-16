"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Building2 } from "lucide-react"

const businessTypes = [
  { id: "retail", label: "Retail Store", description: "Product sales & inventory" },
  { id: "service", label: "Service Business", description: "Consulting & professional services" },
  { id: "ecommerce", label: "E-commerce", description: "Online sales & marketplace" },
  { id: "manufacturing", label: "Manufacturing", description: "Production & wholesale" },
  { id: "restaurant", label: "Restaurant & Food", description: "Dining & catering services" },
  { id: "freelance", label: "Freelance/Sole Proprietor", description: "Independent contractor" },
  { id: "nonprofit", label: "Non-Profit", description: "Community & charitable" },
  { id: "other", label: "Other", description: "Different business type" },
]

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"details" | "business">("details")
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedBusinessTypes: [] as string[],
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleBusinessType = (typeId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedBusinessTypes: prev.selectedBusinessTypes.includes(typeId)
        ? prev.selectedBusinessTypes.filter((id) => id !== typeId)
        : [...prev.selectedBusinessTypes, typeId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === "details") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match")
        return
      }
      setStep("business")
      return
    }

    if (formData.selectedBusinessTypes.length === 0) {
      alert("Please select at least one business type")
      return
    }

    setIsLoading(true)
    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Signup completed with:", formData)
    setIsLoading(false)
  }

  return (
    <Card className="bg-card border border-border p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === "details" ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-foreground">
                Business Name
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Your Business Name"
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Next: Select Business Type
            </Button>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">What describes your business?</h2>
              <p className="text-sm text-muted-foreground mb-6">Select all that apply</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => toggleBusinessType(type.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.selectedBusinessTypes.includes(type.id)
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-border/80"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={formData.selectedBusinessTypes.includes(type.id)}
                      onChange={() => {}} // Handled by div click
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{type.label}</div>
                      <div className="text-sm text-muted-foreground">{type.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-border bg-transparent"
                onClick={() => setStep("details")}
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </>
        )}
      </form>
    </Card>
  )
}
