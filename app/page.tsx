import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, FileText, CheckCircle, Clock, Plus } from "lucide-react"
import Link from "next/link"

const procurementEntities = [
  {
    id: "doh",
    name: "Department of Health",
    acronym: "DOH",
    activeProjects: 12,
    completedBids: 8,
    templateStatus: "updated",
    lastUpdated: "2024-01-15",
  },
  {
    id: "deped",
    name: "Department of Education",
    acronym: "DepEd",
    activeProjects: 5,
    completedBids: 15,
    templateStatus: "updated",
    lastUpdated: "2024-01-10",
  },
  {
    id: "dpwh",
    name: "Department of Public Works and Highways",
    acronym: "DPWH",
    activeProjects: 8,
    completedBids: 22,
    templateStatus: "needs-update",
    lastUpdated: "2023-12-20",
  },
  {
    id: "dost",
    name: "Department of Science and Technology",
    acronym: "DOST",
    activeProjects: 3,
    completedBids: 6,
    templateStatus: "updated",
    lastUpdated: "2024-01-08",
  },
  {
    id: "da",
    name: "Department of Agriculture",
    acronym: "DA",
    activeProjects: 7,
    completedBids: 11,
    templateStatus: "updated",
    lastUpdated: "2024-01-12",
  },
  {
    id: "dilg",
    name: "Department of the Interior and Local Government",
    acronym: "DILG",
    activeProjects: 4,
    completedBids: 9,
    templateStatus: "needs-update",
    lastUpdated: "2023-12-15",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">PhilGEPS Bid Document Archive</h1>
              <p className="text-gray-600 mt-2">Manage procurement entity templates and project documents</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Entity
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Entities</p>
                    <p className="text-2xl font-bold text-gray-900">{procurementEntities.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {procurementEntities.reduce((sum, entity) => sum + entity.activeProjects, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed Bids</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {procurementEntities.reduce((sum, entity) => sum + entity.completedBids, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-orange-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Templates Need Update</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {procurementEntities.filter((entity) => entity.templateStatus === "needs-update").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Procurement Entities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procurementEntities.map((entity) => (
              <Card key={entity.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link href={`/entity/${entity.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{entity.acronym}</CardTitle>
                        <CardDescription className="text-sm mt-1">{entity.name}</CardDescription>
                      </div>
                      <Badge
                        variant={entity.templateStatus === "updated" ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {entity.templateStatus === "updated" ? "Updated" : "Needs Update"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Active Projects:</span>
                        <span className="font-medium">{entity.activeProjects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completed Bids:</span>
                        <span className="font-medium">{entity.completedBids}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Last Updated:</span>
                        <span className="font-medium">{entity.lastUpdated}</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
