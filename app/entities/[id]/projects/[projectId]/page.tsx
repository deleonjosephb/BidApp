"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Upload, FileText, CheckCircle2, AlertCircle, Download } from "lucide-react"
import Link from "next/link"

const projectData = {
  name: "Medical Equipment Procurement 2024",
  reference: "DOH-2024-ME-001",
  status: "active",
  deadline: "2024-02-15",
  description:
    "Procurement of medical equipment for regional hospitals including ventilators, patient monitors, and diagnostic equipment.",
}

const documentChecklist = [
  {
    category: "Technical Component Envelope - Legal Documents",
    documents: [
      {
        id: "philgeps-cert",
        name: "Valid PhilGEPs Certificate",
        required: true,
        submitted: true,
        verified: true,
        notes: "Certificate valid until 2024-12-31",
      },
    ],
  },
  {
    category: "Technical Component Envelope - Technical Documents",
    documents: [
      {
        id: "ongoing-contracts",
        name: "Statement of Ongoing Government and Private Contracts",
        required: true,
        submitted: true,
        verified: true,
        notes: "DOH Format A-1 properly filled",
      },
      {
        id: "slcc-statement",
        name: "Statement of Single Largest Completed Contract (SLCC)",
        required: true,
        submitted: true,
        verified: false,
        notes: "Missing supporting documents for SLCC proof",
      },
      {
        id: "bid-security",
        name: "Bid Security / Bid Securing Declaration",
        required: true,
        submitted: true,
        verified: true,
        notes: "Original bid security submitted",
      },
      {
        id: "schedule-requirements",
        name: "Conformity with Schedule of Requirements",
        required: true,
        submitted: true,
        verified: true,
        notes: "Complies with DOH Section VI format",
      },
      {
        id: "tech-specs",
        name: "Conformity with Technical Specifications",
        required: true,
        submitted: false,
        verified: false,
        notes: "Pending submission",
      },
      {
        id: "tech-datasheet",
        name: "Technical Data Sheet/Brochure",
        required: true,
        submitted: true,
        verified: true,
        notes: "Manufacturer specifications provided",
      },
      {
        id: "omnibus-sworn",
        name: "Omnibus Sworn Statement",
        required: true,
        submitted: true,
        verified: true,
        notes: "Properly notarized",
      },
      {
        id: "spa-affidavit",
        name: "Special Power of Attorney / Affidavit of Ownership",
        required: true,
        submitted: true,
        verified: true,
        notes: "SPA properly executed",
      },
    ],
  },
  {
    category: "Technical Component Envelope - Financial Documents",
    documents: [
      {
        id: "nfcc",
        name: "Net Financial Contracting Capacity (NFCC)",
        required: true,
        submitted: true,
        verified: true,
        notes: "NFCC computation meets requirements",
      },
      {
        id: "jva-cert",
        name: "Joint Venture Agreement / Certificate of Non-JVA",
        required: false,
        submitted: true,
        verified: true,
        notes: "Certificate of Non-JVA submitted",
      },
    ],
  },
  {
    category: "Financial Component Envelope",
    documents: [
      {
        id: "financial-bid",
        name: "Financial Bid Form",
        required: true,
        submitted: false,
        verified: false,
        notes: "To be submitted in sealed envelope",
      },
      {
        id: "price-schedule",
        name: "Price Schedule",
        required: true,
        submitted: false,
        verified: false,
        notes: "To be submitted in sealed envelope",
      },
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string; projectId: string } }) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const allDocuments = documentChecklist.flatMap((section) => section.documents)
  const submittedCount = allDocuments.filter((doc) => doc.submitted).length
  const verifiedCount = allDocuments.filter((doc) => doc.verified).length
  const totalCount = allDocuments.length
  const completionRate = Math.round((submittedCount / totalCount) * 100)

  const handleCheckboxChange = (docId: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [docId]: checked }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/entity/${params.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Entity
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{projectData.name}</h1>
                <p className="text-gray-600 mt-1">Reference: {projectData.reference}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Checklist
              </Button>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <Badge className="mt-1">
                    {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deadline</p>
                  <p className="font-medium">{projectData.deadline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Document Progress</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Submitted</span>
                      <span>
                        {submittedCount}/{totalCount}
                      </span>
                    </div>
                    <Progress value={completionRate} className="h-2" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Verification Status</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Verified</span>
                      <span>{verifiedCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-600">Pending</span>
                      <span>{submittedCount - verifiedCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">Missing</span>
                      <span>{totalCount - submittedCount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Document Verification Checklist</h2>
                <p className="text-gray-600">Verify all required documents against the DOH template standards.</p>
              </div>

              {documentChecklist.map((section, sectionIndex) => (
                <Card key={sectionIndex}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.documents.map((doc) => (
                        <div key={doc.id} className="border rounded-lg p-4">
                          <div className="flex items-start space-x-4">
                            <Checkbox
                              id={doc.id}
                              checked={checkedItems[doc.id] || false}
                              onCheckedChange={(checked) => handleCheckboxChange(doc.id, checked as boolean)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <label htmlFor={doc.id} className="font-medium cursor-pointer">
                                  {doc.name}
                                </label>
                                <div className="flex items-center space-x-2">
                                  {doc.required && (
                                    <Badge variant="outline" className="text-xs">
                                      Required
                                    </Badge>
                                  )}
                                  {doc.submitted ? (
                                    <div className="flex items-center space-x-1">
                                      <FileText className="w-4 h-4 text-blue-600" />
                                      <span className="text-sm text-blue-600">Submitted</span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center space-x-1">
                                      <AlertCircle className="w-4 h-4 text-red-600" />
                                      <span className="text-sm text-red-600">Missing</span>
                                    </div>
                                  )}
                                  {doc.verified ? (
                                    <div className="flex items-center space-x-1">
                                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                                      <span className="text-sm text-green-600">Verified</span>
                                    </div>
                                  ) : doc.submitted ? (
                                    <div className="flex items-center space-x-1">
                                      <AlertCircle className="w-4 h-4 text-orange-600" />
                                      <span className="text-sm text-orange-600">Pending</span>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              {doc.notes && <p className="text-sm text-gray-600 mt-1">{doc.notes}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
