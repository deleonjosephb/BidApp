import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Plus, Settings, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

const entityData = {
  doh: {
    name: "Department of Health",
    acronym: "DOH",
    description: "Government health agency procurement",
    templateVersion: "v2.1",
    lastUpdated: "2024-01-15",
  },
}

const projects = [
  {
    id: "proj-001",
    name: "Medical Equipment Procurement 2024",
    reference: "DOH-2024-ME-001",
    status: "active",
    deadline: "2024-02-15",
    documentsSubmitted: 11,
    totalDocuments: 13,
    completionRate: 85,
  },
  {
    id: "proj-002",
    name: "Hospital Supplies Batch 1",
    reference: "DOH-2024-HS-002",
    status: "completed",
    deadline: "2024-01-20",
    documentsSubmitted: 13,
    totalDocuments: 13,
    completionRate: 100,
  },
  {
    id: "proj-003",
    name: "Laboratory Equipment Upgrade",
    reference: "DOH-2024-LE-003",
    status: "draft",
    deadline: "2024-03-01",
    documentsSubmitted: 5,
    totalDocuments: 13,
    completionRate: 38,
  },
]

const documentTemplate = [
  {
    category: "Technical Component Envelope",
    subcategory: "Legal Documents",
    documents: [{ name: "Valid PhilGEPs Certificate", required: true, format: "PDF" }],
  },
  {
    category: "Technical Component Envelope",
    subcategory: "Technical Documents",
    documents: [
      {
        name: "Statement of Ongoing Government and Private Contracts",
        required: true,
        format: "DOH Format A-1",
      },
      {
        name: "Statement of Single Largest Completed Contract (SLCC)",
        required: true,
        format: "DOH Format A-2",
      },
      {
        name: "Bid Security / Bid Securing Declaration",
        required: true,
        format: "Original/Notarized",
      },
      {
        name: "Conformity with Schedule of Requirements",
        required: true,
        format: "DOH Section VI Format",
      },
      {
        name: "Conformity with Technical Specifications",
        required: true,
        format: "DOH Section VII Format",
      },
      {
        name: "Technical Data Sheet/Brochure",
        required: true,
        format: "Manufacturer Specs",
      },
      {
        name: "Omnibus Sworn Statement",
        required: true,
        format: "DOH Notarized Format",
      },
      {
        name: "Special Power of Attorney / Affidavit of Ownership",
        required: true,
        format: "Notarized",
      },
    ],
  },
  {
    category: "Technical Component Envelope",
    subcategory: "Financial Documents",
    documents: [
      {
        name: "Net Financial Contracting Capacity (NFCC)",
        required: true,
        format: "DOH Computation Format",
      },
      {
        name: "Joint Venture Agreement / Certificate of Non-JVA",
        required: false,
        format: "Notarized (if applicable)",
      },
    ],
  },
  {
    category: "Financial Component Envelope",
    subcategory: "Financial Bid",
    documents: [
      {
        name: "Financial Bid Form",
        required: true,
        format: "DOH Original Signed Format",
      },
      {
        name: "Price Schedule",
        required: true,
        format: "DOH Accomplished Format",
      },
    ],
  },
]

export default function EntityPage({ params }: { params: { id: string } }) {
  const entity = entityData[params.id as keyof typeof entityData] || entityData.doh

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{entity.acronym}</h1>
                <p className="text-gray-600 mt-1">{entity.name}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Template Settings
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="template">Document Template</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <div className="text-sm text-gray-600">
                Template Version: {entity.templateVersion} | Last Updated: {entity.lastUpdated}
              </div>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="mt-1">Reference: {project.reference}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "default"
                            : project.status === "active"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-medium">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Documents</p>
                        <p className="font-medium">
                          {project.documentsSubmitted}/{project.totalDocuments}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Completion</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${project.completionRate}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{project.completionRate}%</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Link href={`/entity/${params.id}/project/${project.id}`}>
                          <Button size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="template" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Document Template</h2>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Edit Template
              </Button>
            </div>

            <div className="space-y-6">
              {documentTemplate.map((section, sectionIndex) => (
                <Card key={sectionIndex}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                    <CardDescription>{section.subcategory}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            {doc.required ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-orange-600" />
                            )}
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-sm text-gray-600">Format: {doc.format}</p>
                            </div>
                          </div>
                          <Badge variant={doc.required ? "default" : "secondary"}>
                            {doc.required ? "Required" : "Optional"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
