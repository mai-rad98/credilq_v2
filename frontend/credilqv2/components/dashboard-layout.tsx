"use client"

import type React from "react"

import { BarChart3, TrendingUp, FileText, DollarSign, Zap, CreditCard, FileUp, Settings } from "lucide-react"

interface DashboardLayoutProps {
  activeTab: string
  onTabChange: (tab: string) => void
  children: React.ReactNode
}

export function DashboardLayout({ activeTab, onTabChange, children }: DashboardLayoutProps) {
  const navItems = [
    { id: "home", label: "Dashboard", icon: BarChart3 },
    { id: "utility", label: "Utilities", icon: Zap },
    { id: "loan", label: "Loans", icon: DollarSign },
    { id: "sales", label: "Sales", icon: TrendingUp },
    { id: "credit", label: "Credit Score", icon: CreditCard },
    { id: "report", label: "Funding Report", icon: FileText },
    { id: "invoice", label: "Invoices", icon: FileUp },
    { id: "billing", label: "Billing", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-primary">credilq</h1>
          <p className="text-sm text-muted-foreground">Financial Management</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground">
            <p>Small Business Owner</p>
            <p className="text-xs mt-1">Premium Account</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
