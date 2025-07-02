"use client"

import type * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Building2,
  FileText,
  Settings,
  Target,
  TrendingUp,
  Users,
  Calendar,
  Award,
  Search,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Menu items
const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    description: "Performance overview and key metrics",
  },
  {
    title: "Active Bids",
    url: "/bids",
    icon: Target,
    description: "Current bidding opportunities",
  },
  {
    title: "Entities",
    url: "/entities",
    icon: Building2,
    description: "Government procurement entities",
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FileText,
    description: "All project submissions",
  },
]

const analyticsItems = [
  {
    title: "Performance Analytics",
    url: "/analytics",
    icon: TrendingUp,
  },
  {
    title: "Competitor Intelligence",
    url: "/competitors",
    icon: Users,
  },
  {
    title: "Win Rate Analysis",
    url: "/analytics/win-rate",
    icon: Award,
  },
]

const managementItems = [
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">PhilGEPS</span>
            <span className="truncate text-xs text-muted-foreground">Bid Management</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          <p>© 2024 PhilGEPS Bid Management</p>
          <p>Version 1.0.0</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
