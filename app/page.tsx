"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { TrendingUp, FileText, Target, DollarSign, BarChart3, Download, Calendar } from "lucide-react"

// Sample data (same as before)
const winRateByEntity = [
  { entity: "DOH", winRate: 75, totalBids: 12, wonBids: 9 },
  { entity: "DepEd", winRate: 60, totalBids: 15, wonBids: 9 },
  { entity: "DPWH", winRate: 80, totalBids: 10, wonBids: 8 },
  { entity: "DOST", winRate: 50, totalBids: 6, wonBids: 3 },
  { entity: "DA", winRate: 67, totalBids: 9, wonBids: 6 },
  { entity: "DILG", winRate: 100, totalBids: 3, wonBids: 3 },
]

const monthlyPerformance = [
  { month: "Jul", submitted: 8, won: 5 },
  { month: "Aug", submitted: 12, won: 7 },
  { month: "Sep", submitted: 10, won: 6 },
  { month: "Oct", submitted: 15, won: 10 },
  { month: "Nov", submitted: 18, won: 12 },
  { month: "Dec", submitted: 14, won: 10 },
]

const recentActivity = [
  {
    id: "BID-2024-001",
    entity: "DOH",
    project: "Medical Equipment Procurement 2024",
    submissionDate: "2024-01-15",
    bidValue: 85000000,
    status: "won",
    margin: 18.5,
    awardDate: "2024-01-28",
  },
  {
    id: "BID-2024-002",
    entity: "DepEd",
    project: "School Building Construction Phase 3",
    submissionDate: "2024-01-12",
    bidValue: 125000000,
    status: "lost",
    margin: null,
    awardDate: "2024-01-25",
  },
  {
    id: "BID-2024-003",
    entity: "DPWH",
    project: "Highway Rehabilitation Project",
    submissionDate: "2024-01-10",
    bidValue: 250000000,
    status: "pending",
    margin: 16.2,
    awardDate: null,
  },
]

export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("3months")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "won":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Won</Badge>
      case "lost":
        return <Badge variant="destructive">Lost</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-48">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="1year">Last 1 year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Dashboard</h1>
          <p className="text-muted-foreground">
            Track your bidding success and optimize performance across all government entities
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bids</p>
                  <p className="text-3xl font-bold">45</p>
                  <p className="text-sm text-blue-600 mt-1">12 currently active</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Win Rate</p>
                  <p className="text-3xl font-bold">67%</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <p className="text-sm text-green-600">+5.2% from last period</p>
                  </div>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-3xl font-bold">₱125M</p>
                  <p className="text-sm text-muted-foreground mt-1">Avg margin: 18.5%</p>
                </div>
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ROI</p>
                  <p className="text-3xl font-bold">245%</p>
                  <p className="text-sm text-muted-foreground mt-1">Return on bidding investment</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Win Rate by Government Entity</CardTitle>
              <CardDescription>Success rate across different agencies</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={winRateByEntity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="entity" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, "Win Rate"]}
                    labelFormatter={(label) => `Entity: ${label}`}
                  />
                  <Bar dataKey="winRate" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance Trend</CardTitle>
              <CardDescription>Submitted vs won bids over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="submitted" stroke="#3b82f6" strokeWidth={2} name="Submitted Bids" />
                  <Line type="monotone" dataKey="won" stroke="#10b981" strokeWidth={2} name="Won Bids" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bid Activity</CardTitle>
            <CardDescription>Latest submissions and outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((bid, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{bid.project}</h3>
                      {getStatusBadge(bid.status)}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span>Entity: </span>
                        <span className="font-medium text-foreground">{bid.entity}</span>
                      </div>
                      <div>
                        <span>Value: </span>
                        <span className="font-medium text-foreground">{formatCurrency(bid.bidValue)}</span>
                      </div>
                      <div>
                        <span>Submitted: </span>
                        <span className="font-medium text-foreground">{bid.submissionDate}</span>
                      </div>
                      <div>
                        <span>Margin: </span>
                        <span className={`font-medium ${bid.margin ? "text-green-600" : "text-muted-foreground"}`}>
                          {bid.margin ? `${bid.margin}%` : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
