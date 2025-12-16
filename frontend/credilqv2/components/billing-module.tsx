"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SubscriptionPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  billing: "monthly" | "annual"
}

interface Invoice {
  id: string
  date: string
  amount: number
  status: "paid" | "pending" | "failed"
  plan: string
  dueDate: string
}

export function BillingModule() {
  const [currentPlan] = useState<string>("professional")
  const [subscriptionInvoices, setSubscriptionInvoices] = useState<Invoice[]>([
    {
      id: "INV-001",
      date: "2024-11-15",
      amount: 49.99,
      status: "paid",
      plan: "Professional",
      dueDate: "2024-11-15",
    },
    {
      id: "INV-002",
      date: "2024-10-15",
      amount: 49.99,
      status: "paid",
      plan: "Professional",
      dueDate: "2024-10-15",
    },
    {
      id: "INV-003",
      date: "2024-12-15",
      amount: 49.99,
      status: "pending",
      plan: "Professional",
      dueDate: "2024-12-20",
    },
  ])

  const plans: SubscriptionPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: 0,
      description: "Perfect for getting started",
      billing: "monthly",
      features: ["Up to 3 payment trackers", "Basic credit assessment", "Monthly reports", "Community support"],
    },
    {
      id: "professional",
      name: "Professional",
      price: 49.99,
      description: "Best for growing businesses",
      billing: "monthly",
      features: [
        "Unlimited payment trackers",
        "Advanced credit assessment",
        "Weekly reports",
        "Priority support",
        "Custom invoices",
        "API access",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 199.99,
      description: "For large-scale operations",
      billing: "monthly",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "24/7 phone support",
      ],
    },
  ]

  const handleUpgrade = (planId: string) => {
    console.log("[v0] Upgrade plan:", planId)
  }

  const handleDowngrade = () => {
    console.log("[v0] Downgrade plan")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-500/10 text-green-700"
      case "pending":
        return "bg-yellow-500/10 text-yellow-700"
      case "failed":
        return "bg-red-500/10 text-red-700"
      default:
        return "bg-gray-500/10 text-gray-700"
    }
  }

  return (
    <div className="space-y-8">
      {/* Current Plan Overview */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Billing & Subscription</h1>
        <p className="text-muted-foreground">Manage your subscription plan and view billing history</p>
      </div>

      {/* Subscription Plans */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isCurrentPlan = currentPlan === plan.id
            return (
              <Card key={plan.id} className={isCurrentPlan ? "border-primary border-2" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground">{plan.name}</CardTitle>
                    {isCurrentPlan && <Badge className="bg-primary">Current Plan</Badge>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 space-y-2">
                    {isCurrentPlan ? (
                      <Button disabled className="w-full">
                        Current Plan
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={() => handleUpgrade(plan.id)}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Upgrade to {plan.name}
                        </Button>
                        {plan.id !== "starter" && (
                          <Button
                            variant="outline"
                            onClick={handleDowngrade}
                            className="w-full text-foreground bg-transparent"
                          >
                            Downgrade
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Billing History</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Subscription Invoices</CardTitle>
            <CardDescription>All your platform subscription charges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Invoice ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Due Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-3 px-4 text-foreground font-medium">{invoice.id}</td>
                      <td className="py-3 px-4 text-foreground">{invoice.date}</td>
                      <td className="py-3 px-4 text-foreground">{invoice.plan}</td>
                      <td className="py-3 px-4 text-foreground font-semibold">${invoice.amount}</td>
                      <td className="py-3 px-4 text-foreground">{invoice.dueDate}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Method */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Payment Method</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Primary Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
              <Button variant="outline" className="text-foreground bg-transparent">
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
