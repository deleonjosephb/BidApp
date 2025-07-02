import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
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

export default function EntitiesPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Entities</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Entity
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Government Entities</h1>
          <p className="text-muted-foreground">Manage procurement entities, templates, and project documentation</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Entities</p>
                  <p className="text-2xl font-bold">{procurementEntities.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold">
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
                  <p className="text-sm font-medium text-muted-foreground">Completed Bids</p>
                  <p className="text-2xl font-bold">
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
                  <p className="text-sm font-medium text-muted-foreground">Need Updates</p>
                  <p className="text-2xl font-bold">
                    {procurementEntities.filter((entity) => entity.templateStatus === "needs-update").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {procurementEntities.map((entity) => (
            <Card key={entity.id} className="hover:shadow-md transition-shadow">
              <Link href={`/entities/${entity.id}`}>
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
                      <span className="text-muted-foreground">Active Projects:</span>
                      <span className="font-medium">{entity.activeProjects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completed Bids:</span>
                      <span className="font-medium">{entity.completedBids}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span className="font-medium">{entity.lastUpdated}</span>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
