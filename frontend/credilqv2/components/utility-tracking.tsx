"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, Plus, Trash2 } from "lucide-react"

interface UtilityPayment {
  id: string
  provider: string
  amount: number
  dueDate: string
  status: "paid" | "pending" | "overdue"
}

export function UtilityTracking() {
  const [payments, setPayments] = useState<UtilityPayment[]>([
    { id: "1", provider: "Electric Company", amount: 450, dueDate: "2024-02-05", status: "paid" },
    { id: "2", provider: "Water Supply", amount: 120, dueDate: "2024-02-10", status: "pending" },
    { id: "3", provider: "Internet Provider", amount: 89, dueDate: "2024-02-01", status: "overdue" },
  ])
  const [formData, setFormData] = useState({ provider: "", amount: "", dueDate: "" })

  const handleAddPayment = () => {
    if (formData.provider && formData.amount && formData.dueDate) {
      setPayments([
        ...payments,
        {
          id: Date.now().toString(),
          provider: formData.provider,
          amount: Number.parseFloat(formData.amount),
          dueDate: formData.dueDate,
          status: "pending",
        },
      ])
      setFormData({ provider: "", amount: "", dueDate: "" })
    }
  }

  const handleDelete = (id: string) => {
    setPayments(payments.filter((p) => p.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "text-green-600 bg-green-50"
      case "overdue":
        return "text-red-600 bg-red-50"
      default:
        return "text-yellow-600 bg-yellow-50"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Utility Payments</h1>
        </div>
        <p className="text-muted-foreground">Track and manage all utility bill payments</p>
      </div>

      {/* Add Payment Form */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Add New Utility Payment</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Label htmlFor="provider" className="text-foreground">
              Provider
            </Label>
            <Input
              id="provider"
              placeholder="e.g., Electric Company"
              value={formData.provider}
              onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="amount" className="text-foreground">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="dueDate" className="text-foreground">
              Due Date
            </Label>
            <Input
              id="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="mt-2"
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleAddPayment}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" /> Add Payment
            </Button>
          </div>
        </div>
      </Card>

      {/* Payments Table */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Payments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Provider</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Amount</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Due Date</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Status</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="py-3 px-4 text-foreground">{payment.provider}</td>
                  <td className="py-3 px-4 text-right font-semibold text-foreground">${payment.amount.toFixed(2)}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{payment.dueDate}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(payment.status)}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(payment.id)}
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
