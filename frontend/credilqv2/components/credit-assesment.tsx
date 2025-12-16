"use client"

import { Card } from "@/components/ui/card"
import { CreditCard, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const creditHistoryData = [
  { month: "Jan", score: 720 },
  { month: "Feb", score: 735 },
  { month: "Mar", score: 745 },
  { month: "Apr", score: 755 },
  { month: "May", score: 770 },
  { month: "Jun", score: 780 },
]

const creditCompositionData = [
  { name: "Payment History", value: 35 },
  { name: "Credit Utilization", value: 30 },
  { name: "Length of History", value: 15 },
  { name: "Credit Mix", value: 10 },
  { name: "New Inquiries", value: 10 },
]

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"]

export function CreditAssessment() {
  const creditScore = 780
  const creditRating = "Excellent"
  const ratingColor = creditScore >= 750 ? "text-green-600" : "text-yellow-600"

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <CreditCard className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">AI Credit Assessment</h1>
        </div>
        <p className="text-muted-foreground">Your AI-powered credit score analysis based on financial data</p>
      </div>

      {/* Credit Score Display */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Current Credit Score</p>
            <p className={`text-5xl font-bold ${ratingColor}`}>{creditScore}</p>
            <p className={`text-lg font-semibold mt-2 ${ratingColor}`}>{creditRating} Rating</p>
            <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" /> +15 points from last month
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{creditScore}</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Payment History</p>
              <p className="text-2xl font-bold text-foreground mt-2">98%</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> On track
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Credit Utilization</p>
              <p className="text-2xl font-bold text-foreground mt-2">25%</p>
              <p className="text-xs text-green-600 mt-2">Healthy level</p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Average Age</p>
              <p className="text-2xl font-bold text-foreground mt-2">7.2 yrs</p>
              <p className="text-xs text-muted-foreground mt-2">Accounts</p>
            </div>
          </div>
        </Card>

        <Card className="bg-card border border-border p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Late Payments</p>
              <p className="text-2xl font-bold text-green-600 mt-2">0</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Clean record
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Credit Trend Chart */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Credit Score Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={creditHistoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" domain={[600, 800]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ fill: "var(--primary)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Credit Composition */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-card border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Credit Score Composition</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={creditCompositionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {creditCompositionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">Excellent Payment History</p>
                <p className="text-sm text-green-700">Your on-time payments are strong</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-900">Maintain Low Utilization</p>
                <p className="text-sm text-yellow-700">Keep credit utilization below 30%</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900">Diversify Credit Mix</p>
                <p className="text-sm text-blue-700">You have a healthy mix of account types</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
