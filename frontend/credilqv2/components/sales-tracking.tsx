"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, Plus, Trash2 } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface Sale {
  id: string
  description: string
  amount: number
  date: string
  category: string
}

const salesData = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 5100 },
  { month: "Mar", sales: 6400 },
  { month: "Apr", sales: 7200 },
  { month: "May", sales: 8100 },
  { month: "Jun", sales: 9300 },
]

export function SalesTracking() {
  const [sales, setSales] = useState<Sale[]>([
    { id: "1", description: "Product Sale - Order #1001", amount: 2500, date: "2024-02-01", category: "Products" },
    { id: "2", description: "Service Invoice - Project ABC", amount: 3200, date: "2024-02-03", category: "Services" },
    { id: "3", description: "Bulk Order - Client XYZ", amount: 5600, date: "2024-02-05", category: "Products" },
  ])
  const [formData, setFormData] = useState({ description: "", amount: "", date: "", category: "" })

  const handleAddSale = () => {
    if (formData.description && formData.amount && formData.date && formData.category) {
      setSales([
        ...sales,
        {
          id: Date.now().toString(),
          description: formData.description,
          amount: Number.parseFloat(formData.amount),
          date: formData.date,
          category: formData.category,
        },
      ])
      setFormData({ description: "", amount: "", date: "", category: "" })
    }
  }

  const handleDelete = (id: string) => {
    setSales(sales.filter((s) => s.id !== id))
  }

  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Sales Tracking</h1>
        </div>
        <p className="text-muted-foreground">Record and monitor all sales transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Sales (YTD)</p>
          <p className="text-2xl font-bold text-primary mt-2">${totalSales.toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">This Month</p>
          <p className="text-2xl font-bold text-foreground mt-2">${(totalSales * 0.25).toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Transactions</p>
          <p className="text-2xl font-bold text-foreground mt-2">{sales.length}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Average Sale</p>
          <p className="text-2xl font-bold text-foreground mt-2">${(totalSales / sales.length).toFixed(0)}</p>
        </Card>
      </div>

      {/* Add Sale Form */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Record New Sale</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Input
              id="description"
              placeholder="e.g., Product Sale"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="saleAmount" className="text-foreground">
              Amount
            </Label>
            <Input
              id="saleAmount"
              type="number"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="saleDate" className="text-foreground">
              Date
            </Label>
            <Input
              id="saleDate"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="mt-2"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleAddSale} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" /> Record
            </Button>
          </div>
        </div>
      </Card>

      {/* Sales Chart */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip />
            <Bar dataKey="sales" fill="var(--chart-1)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Sales Transactions */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">All Sales</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Description</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Amount</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Category</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Date</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="py-3 px-4 text-foreground">{sale.description}</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">${sale.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{sale.category}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{sale.date}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(sale.id)}
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
