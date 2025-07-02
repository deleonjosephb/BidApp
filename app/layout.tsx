import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "PhilGEPS Bid Management System",
  description: "Comprehensive bidding management and analytics platform",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
