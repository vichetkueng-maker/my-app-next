"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react"
const cardList = [
  {
    title:"Total Transaction",
    persontage:"+87 ",
    total:"5000",
    desc:"This is last repsponse"
  },{
    title:"Total Sale",
    persontage:"+70 ",
    total:"4879",
    desc:"This is last weeks repsponse"
  },{
    title:"Total Evenu",
    persontage:"+90 ",
    total:"50309",
    desc:"This is last Month repsponse"
  },
  {
    title:"Total Technicals",
    persontage:"+60 ",
    total:"3987",
    desc:"This is repsponse"
  }
]
const chartGrid = [
  {
    title:"Edge Request",
    stopColor:"rgb(59, 130, 246)",
    strokColor:"rgb(234, 179, 8)",
    total:"3987",
    desc:"This is repsponse",
    gap1:"1xxx",
    gap2:"",
    gap3:"",
    income:"",
    outcome:""
  },
  {
    title:"Fast Data Transfer",
    stopColor:"rgb(234, 179, 8)",
    strokColor:"",
    total:"3987",
    desc:"This is repsponse",
    gap1:"2XXX",
    gap2:"4XXX",
    gap3:"8XXX",
    income:"128GB",
    outcome:"1TGB"
  }
  ,{
    title:"Vercel Functions",
    stopColor:"rgb(234, 179, 8)",
    strokColor:"",
    total:"3987",
    desc:"This is repsponse",
    gap1:"2XXX",
    gap2:"4XXX",
    gap3:"8XXX",
    income:"",
    outcome:""
  },
  {
    title:"GB-Hours",
    stopColor:"rgb(239, 68, 68)",
    strokColor:"",
    total:"3987",
    desc:"This is repsponse",
    gap1:"2XXX",
    gap2:"4XXX",
    gap3:"8XXX",
    income:"",
    outcome:""
  }
]
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
export default function Dashboard(){
    return(
        <div className="p-6">
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cardList.map((card)=>(
              <Card key={card.title} className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardDescription className="text-muted-foreground">{card.title}</CardDescription>
                  <CardTitle className="text-3xl font-bold text-foreground">{card.total}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500">
                      {card.persontage} %
                    </Badge>
                    <span className="text-muted-foreground">{card.desc}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            {chartGrid.map((chg)=>(
                <Card key={chg.title} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">{chg.title}</CardTitle>
                      <Button variant="ghost" size="icon">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                    
                      <div className="flex gap-4 text-sm">
                        {chg.outcome || chg.income ?(
                          <>
                            {chg.outcome ?(
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                <span className="text-muted-foreground">Outgoing</span>
                                <span className="font-medium text-foreground">{chg.outcome}</span>
                              </div>
                            ):(
                              <></>
                            )}
                        
                            {chg.income ?(
                              <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                              <span className="text-muted-foreground">Incoming</span>
                              <span className="font-medium text-foreground">{chg.income}</span>
                            </div>
                            ):(
                              <div></div>
                            )}
                          </>
                        ):(
                          <div>
                            {chg.gap1 || chg.gap2 || chg.gap3 ?(
                              <div className="flex items-center gap-2">                               
                                {chg.gap1 ? (
                                  <>
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    <span className="font-medium text-foreground">{chg.gap1}</span>
                                 </>
                                ):(
                                  <></>
                                )}
                                {chg.gap2? (
                                  <>
                                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                      <span className="font-medium text-foreground">{chg.gap2}</span>
                                  </>
                                ):(
                                  <></>
                                )}
                                {chg.gap3? (
                                  <>
                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                    <span className="font-medium text-foreground">{chg.gap3}</span>
                                  </>
                                ):(
                                  <></>
                                )}
                              </div>
                            ):(
                              <></>
                            )}
                          </div>
                        )}
                      </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-64 w-full">
                      <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none">

                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(234, 179, 8)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(234, 179, 8)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {chg.stopColor || chg.strokColor ?(
                          <>
                            {chg.stopColor?(
                              <path
                                d="M 0 120 Q 50 110, 100 115 T 200 110 T 300 120 T 400 115"
                                fill="url(#gradient2)"
                                stroke={chg.stopColor}
                                strokeWidth="2"
                              />
                            ):(
                              <></>
                            )}
                            {chg.strokColor?(
                              <path
                                d="M 0 140 Q 50 135, 100 138 T 200 133 T 300 140 T 400 135"
                                fill="url(#gradient3)"
                                stroke={chg.strokColor}
                                strokeWidth="2"
                              />
                            ):(
                              <></>
                            )}
                          </>
                        ):(
                          <></>
                        )}

                      </svg>
                      <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">12 hours ago</div>
                      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">Now</div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* Data Table */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-foreground">Recent Requests</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Monitor your application's request activity
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <input
                    type="search"
                    placeholder="Search requests..."
                    className="h-9 w-64 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request Path</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {invoices.map((inv)=>(
                  <TableRow key={inv.invoice}>
                    <TableCell className="font-mono text-sm">{inv.paymentMethod}</TableCell>
                    <TableCell>
                      {inv.paymentStatus}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-500/10 text-emerald-500">{inv.totalAmount}</Badge>
                    </TableCell>
                    
                  </TableRow>
                ))}
                
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
    )
}