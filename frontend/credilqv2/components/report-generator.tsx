"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

interface Report {
  id: string
  name: string
  generatedDate: string
  fundingAmount: string
  status: "ready" | "pending"
}

export function ReportGenerator() {
  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      name: "Q1 2024 Funding Application",
      generatedDate: "2024-02-15",
      fundingAmount: "$50,000",
      status: "ready",
    },
    {
      id: "2",
      name: "Q4 2023 Business Summary",
      generatedDate: "2024-01-10",
      fundingAmount: "$75,000",
      status: "ready",
    },
  ])

  const handleGenerateReport = () => {
    const newReport: Report = {
      id: Date.now().toString(),
      name: `Funding Report - ${new Date().toLocaleDateString()}`,
      generatedDate: new Date().toISOString().split("T")[0],
      fundingAmount: "$100,000",
      status: "ready",
    }
    setReports([newReport, ...reports])
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Funding Report Generator</h1>
        </div>
        <p className="text-muted-foreground">Generate comprehensive financial reports for loan applications</p>
      </div>

      {/* Report Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Reports</p>
          <p className="text-2xl font-bold text-foreground mt-2">{reports.length}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Ready Reports</p>
          <p className="text-2xl font-bold text-primary mt-2">{reports.filter((r) => r.status === "ready").length}</p>
        </Card>
        <Card className="bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Total Funding Requested</p>
          <p className="text-2xl font-bold text-foreground mt-2">$225,000</p>
        </Card>
      </div>

      {/* Generate Report Button */}
      <Card className="bg-card border border-border p-8 text-center">
        <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Create New Funding Report</h3>
        <p className="text-muted-foreground mb-6">
          Generate a comprehensive report with your financial data and credit assessment
        </p>
        <Button onClick={handleGenerateReport} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <FileText className="w-4 h-4 mr-2" /> Generate Report
        </Button>
      </Card>

      {/* Reports List */}
      <Card className="bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Generated Reports</h3>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{report.name}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                    <span>Generated: {report.generatedDate}</span>
                    <span>Funding: {report.fundingAmount}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Eye className="w-4 h-4" /> Preview
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" /> Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Report Content Preview */}
      <Card className="bg-card border border-border p-8">
        <h3 className="text-lg font-semibold text-foreground mb-6">Report Template Preview</h3>
        <div className="space-y-6 text-foreground">
          <div>
            <h4 className="font-semibold text-lg mb-2">Executive Summary</h4>
            <p className="text-sm text-muted-foreground">
              This section provides an overview of your business financial health, including key metrics, credit score,
              and funding requirements. It highlights your business strengths and growth potential.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Financial Overview</h4>
            <p className="text-sm text-muted-foreground">
              Total revenue, expense analysis, profit margins, and cash flow information. Includes historical trends and
              projections for future performance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Credit Assessment</h4>
            <p className="text-sm text-muted-foreground">
              AI-powered credit analysis based on your utility payments, loan history, sales performance, and payment
              patterns. Includes creditworthiness rating and risk assessment.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Funding Recommendation</h4>
            <p className="text-sm text-muted-foreground">
              Based on financial analysis and credit assessment, recommended funding amount and terms. Includes
              projected ROI and repayment capacity.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
