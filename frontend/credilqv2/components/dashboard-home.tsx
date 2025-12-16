"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const chartData = [
  { month: "Jan", revenue: 4000, expenses: 2400, payments: 2200 },
  { month: "Feb", revenue: 5000, expenses: 2800, payments: 2500 },
  { month: "Mar", revenue: 6200, expenses: 3200, payments: 2800 },
  { month: "Apr", revenue: 7100, expenses: 3500, payments: 3100 },
  { month: "May", revenue: 8400, expenses: 3800, payments: 3400 },
  { month: "Jun", revenue: 9200, expenses: 4100, payments: 3700 },
]

export function DashboardHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
        <p className="text-muted-foreground mt-2">Here's your financial overview for this month</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold text-foreground mt-2">$45,200</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12% from last month
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Outstanding Payments</p>
              <p className="text-2xl font-bold text-foreground mt-2">$8,500</p>
              <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 3 pending
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Credit Score</p>
              <p className="text-2xl font-bold text-primary mt-2">780</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Excellent
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Loans</p>
              <p className="text-2xl font-bold text-foreground mt-2">2</p>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Total: $125,000
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-card border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--primary)"
                strokeWidth={2}
                dot={{ fill: "var(--primary)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Financial Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="var(--chart-1)" />
              <Bar dataKey="expenses" fill="var(--chart-2)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {[
            { type: "Payment", desc: "Utility Bill - Electric", amount: "$450", date: "Today" },
            { type: "Loan", desc: "Monthly Loan Payment", amount: "$2,500", date: "Yesterday" },
            { type: "Sale", desc: "Product Sale - Order #1234", amount: "+$3,200", date: "2 days ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="font-medium text-foreground">{item.type}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${item.amount.startsWith("+") ? "text-green-600" : "text-foreground"}`}>
                  {item.amount}
                </p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
