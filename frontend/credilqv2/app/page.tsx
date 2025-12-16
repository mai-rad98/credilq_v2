"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Lock, BarChart3, Zap, FileText } from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Track Everything",
      description: "Monitor utility payments, loans, and sales all in one place",
    },
    {
      icon: TrendingUp,
      title: "AI Credit Assessment",
      description: "Get instant credit scoring based on your financial data",
    },
    {
      icon: FileText,
      title: "Funding Reports",
      description: "Generate professional reports for loan applications",
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "Bank-level security for all your financial information",
    },
    {
      icon: Zap,
      title: "Smart Invoicing",
      description: "Create and manage invoices with ease",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Unlock premium subscription plans to scale your business",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary">credilq</div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <div className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            The Financial Platform Built for Small Businesses
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Manage Your Money,
          <br />
          <span className="text-primary">Unlock Your Potential</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          credilq helps small business owners track payments, assess credit, and get funded. All in one platform.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/signup">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
              Get Started Free
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary text-base bg-transparent"
          >
            Watch Demo
          </Button>
        </div>

        <div className="relative w-full h-96 bg-secondary rounded-lg border border-border overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">Dashboard Preview</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features for Business Growth</h2>
          <p className="text-lg text-muted-foreground">Everything you need to manage and grow your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="bg-card border border-border p-6 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <Card className="bg-card border border-border p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Small Business Owners</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of businesses using credilq to manage their finances
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
              <div className="text-muted-foreground">Tracked Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Take Control?</h2>
        <p className="text-lg text-muted-foreground mb-8">Start tracking your finances and building credit today</p>
        <Link href="/signup">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
            Start Your Free Account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border text-center text-muted-foreground">
        <p>© 2025 credilq. All rights reserved.</p>
      </footer>
    </div>
  )
}
