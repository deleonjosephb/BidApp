import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Target, Plus, Filter } from "lucide-react"

export default function BidsPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Active Bids</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Bid
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Active Bids</h1>
          <p className="text-muted-foreground">Manage current bidding opportunities and track submission status</p>
        </div>

        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Target className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Active Bids</h3>
            <p className="text-muted-foreground text-center mb-4">
              You don't have any active bids at the moment. Start by creating a new bid submission.
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Bid
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
