"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardHome } from "@/components/dashboard-home"
import { UtilityTracking } from "@/components/utility-tracking"
import { LoanTracking } from "@/components/loan-tracking"
import { SalesTracking } from "@/components/sales-tracking"
import { CreditAssessment } from "@/components/credit-assesment"
import { ReportGenerator } from "@/components/report-generator"
import { InvoiceManager } from "@/components/invoice-manager"
import { BillingModule } from "@/components/billing-module"

type NavigationTab = "home" | "utility" | "loan" | "sales" | "credit" | "report" | "invoice" | "billing"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home")

  const renderContent = () => {
    switch (activeTab) {
      case "utility":
        return <UtilityTracking />
      case "loan":
        return <LoanTracking />
      case "sales":
        return <SalesTracking />
      case "credit":
        return <CreditAssessment />
      case "report":
        return <ReportGenerator />
      case "invoice":
        return <InvoiceManager />
      case "billing":
        return <BillingModule />
      default:
        return <DashboardHome />
    }
  }

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  )
}
