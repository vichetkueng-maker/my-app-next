"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
// accessorKey for get value from Payment Type
// header header column name
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: ()=><div className="text-center">Amount</div>,
    cell:({row})=>{
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-us",{
            style: "currency",
            currency:"USD"
        }).format(amount)
        return(
            <div className="text-center font-medium">{formatted}</div>
        )
    }
  },
]