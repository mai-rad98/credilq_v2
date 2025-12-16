"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Plus, Trash2 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface Loan {
  id: string
  lender: string
  principalAmount: number
  interestRate: number
  monthlyPayment: number
  remainingBalance: number
  nextPaymentDate: string
}

const loanBalanceData = [
  { month: "Jan", balance: 125000 },
  { month: "Feb", balance: 123200 },
  { month: "Mar", balance: 121300 },
  { month: "Apr", balance: 119200 },
  { month: "May", balance: 117000 },
  { month: "Jun", balance: 114500 },
]

export function LoanTracking() {
  const [loans, setLoans] = useState<Loan[]>([
    {
      id: "1",
      lender: "First Business Bank",
      principalAmount: 75000,
      interestRate: 6.5,
      monthlyPayment: 1250,
      remainingBalance: 72500,
      nextPaymentDate: "2024-02-15",
    },
    {
      id: "2",
      lender: "Commercial Finance LLC",
      principalAmount: 50000,
      interestRate: 7.2,
      monthlyPayment: 850,
      remainingBalance: 42000,
      nextPaymentDate: "2024-02-20",
    },
  ])
  const [formData, setFormData] = useState({
    lender: "",
    principalAmount: "",
    interestRate: "",
    monthlyPayment: "",
    nextPaymentDate: "",
  })

  const handleAddLoan = () => {
    if (
      formData.lender &&
      formData.principalAmount &&
      formData.interestRate &&
      formData.monthlyPayment &&
      formData.nextPaymentDate
    ) {
      setLoans([
        ...loans,
        {
          id: Date.now().toString(),
          lender: formData.lender,
          principalAmount: Number.parseFloat(formData.principalAmount),
          interestRate: Number.parseFloat(formData.interestRate),
          monthlyPayment: Number.parseFloat(formData.monthlyPayment),
          remainingBalance: Number.parseFloat(formData.principalAmount),
          nextPaymentDate: formData.nextPaymentDate,
        },
      ])
      setFormData({ lender: "", principalAmount: "", interestRate: "", monthlyPayment: "", nextPaymentDate: "" })
    }
  }

  const handleDelete = (id: string) => {
    setLoans(loans.filter((l) => l.id !== id))
  }

  const totalOutstanding = loans.reduce((sum, loan) => sum + loan.remainingBalance, 0)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <DollarSign className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Loan Tracking</h1>
        </div>
        <p className="text-muted-foreground">Monitor and manage your business loans</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Outstanding</p>
          <p className="text-2xl font-bold text-foreground mt-2">${totalOutstanding.toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Active Loans</p>
          <p className="text-2xl font-bold text-primary mt-2">{loans.length}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Next Payment</p>
          <p className="text-2xl font-bold text-foreground mt-2">${loans[0]?.monthlyPayment.toFixed(2)}</p>
        </Card>
      </div>

      {/* Add Loan Form */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Add New Loan</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2">
            <Label htmlFor="lender" className="text-foreground">
              Lender
            </Label>
            <Input
              id="lender"
              placeholder="e.g., First Bank"
              value={formData.lender}
              onChange={(e) => setFormData({ ...formData, lender: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="principal" className="text-foreground">
              Principal
            </Label>
            <Input
              id="principal"
              type="number"
              placeholder="0.00"
              value={formData.principalAmount}
              onChange={(e) => setFormData({ ...formData, principalAmount: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="rate" className="text-foreground">
              Rate %
            </Label>
            <Input
              id="rate"
              type="number"
              placeholder="0.0"
              value={formData.interestRate}
              onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="monthly" className="text-foreground">
              Monthly
            </Label>
            <Input
              id="monthly"
              type="number"
              placeholder="0.00"
              value={formData.monthlyPayment}
              onChange={(e) => setFormData({ ...formData, monthlyPayment: e.target.value })}
              className="mt-2"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleAddLoan} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" /> Add
            </Button>
          </div>
        </div>
      </Card>

      {/* Loan Balance Chart */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Loan Balance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={loanBalanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ fill: "var(--primary)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Active Loans Table */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Loans</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Lender</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Principal</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Rate</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Monthly Payment</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Remaining</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Next Payment</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="py-3 px-4 text-foreground font-medium">{loan.lender}</td>
                  <td className="py-3 px-4 text-right text-foreground">${loan.principalAmount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right text-foreground">{loan.interestRate}%</td>
                  <td className="py-3 px-4 text-right text-foreground">${loan.monthlyPayment.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right font-semibold text-primary">
                    ${loan.remainingBalance.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{loan.nextPaymentDate}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(loan.id)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
