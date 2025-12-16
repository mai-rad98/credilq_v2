"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileUp, Plus, Download, Eye, Trash2 } from "lucide-react"

interface Invoice {
  id: string
  invoiceNumber: string
  clientName: string
  amount: number
  date: string
  dueDate: string
  status: "paid" | "pending" | "overdue"
}

export function InvoiceManager() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "1",
      invoiceNumber: "INV-001",
      clientName: "ABC Corp",
      amount: 2500,
      date: "2024-02-01",
      dueDate: "2024-02-15",
      status: "paid",
    },
    {
      id: "2",
      invoiceNumber: "INV-002",
      clientName: "XYZ Ltd",
      amount: 3200,
      date: "2024-02-05",
      dueDate: "2024-02-20",
      status: "pending",
    },
    {
      id: "3",
      invoiceNumber: "INV-003",
      clientName: "Tech Startup",
      amount: 1800,
      date: "2024-01-20",
      dueDate: "2024-02-03",
      status: "overdue",
    },
  ])
  const [formData, setFormData] = useState({ invoiceNumber: "", clientName: "", amount: "", dueDate: "" })

  const handleAddInvoice = () => {
    if (formData.invoiceNumber && formData.clientName && formData.amount && formData.dueDate) {
      setInvoices([
        ...invoices,
        {
          id: Date.now().toString(),
          invoiceNumber: formData.invoiceNumber,
          clientName: formData.clientName,
          amount: Number.parseFloat(formData.amount),
          date: new Date().toISOString().split("T")[0],
          dueDate: formData.dueDate,
          status: "pending",
        },
      ])
      setFormData({ invoiceNumber: "", clientName: "", amount: "", dueDate: "" })
    }
  }

  const handleDelete = (id: string) => {
    setInvoices(invoices.filter((i) => i.id !== id))
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

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidAmount = invoices.filter((i) => i.status === "paid").reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter((i) => i.status === "pending").reduce((sum, inv) => sum + inv.amount, 0)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FileUp className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Invoice Management</h1>
        </div>
        <p className="text-muted-foreground">Create, track, and manage your business invoices</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Invoiced</p>
          <p className="text-2xl font-bold text-foreground mt-2">${totalAmount.toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Paid</p>
          <p className="text-2xl font-bold text-green-600 mt-2">${paidAmount.toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">${pendingAmount.toLocaleString()}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Invoices</p>
          <p className="text-2xl font-bold text-foreground mt-2">{invoices.length}</p>
        </Card>
      </div>

      {/* Create Invoice Form */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Create New Invoice</h3>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Label htmlFor="invNumber" className="text-foreground">
              Invoice #
            </Label>
            <Input
              id="invNumber"
              placeholder="INV-004"
              value={formData.invoiceNumber}
              onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
              className="mt-2"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="client" className="text-foreground">
              Client Name
            </Label>
            <Input
              id="client"
              placeholder="Client name"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="invAmount" className="text-foreground">
              Amount
            </Label>
            <Input
              id="invAmount"
              type="number"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="mt-2"
            />
          </div>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="invDueDate" className="text-foreground">
                Due Date
              </Label>
              <Input
                id="invDueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="mt-2"
              />
            </div>
            <Button
              onClick={handleAddInvoice}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mb-0.5"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Invoices Table */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">All Invoices</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Invoice #</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Client</th>
                <th className="text-right py-3 px-4 text-foreground font-semibold">Amount</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Date</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Due Date</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Status</th>
                <th className="text-center py-3 px-4 text-foreground font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border hover:bg-secondary/50">
                  <td className="py-3 px-4 text-foreground font-medium">{invoice.invoiceNumber}</td>
                  <td className="py-3 px-4 text-foreground">{invoice.clientName}</td>
                  <td className="py-3 px-4 text-right font-semibold text-foreground">
                    ${invoice.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{invoice.date}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{invoice.dueDate}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(invoice.status)}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <button className="text-primary hover:text-primary/80" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-primary hover:text-primary/80" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(invoice.id)}
                        className="text-destructive hover:text-destructive/80"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
