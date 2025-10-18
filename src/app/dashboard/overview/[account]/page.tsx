"use client"
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){
    const params = useParams<{ account: string}>()
    const pathname = usePathname()
    const usesearch = useSearchParams()
    return(
        <h2>
            Overview: {params.account}
            Pathname: {pathname}
            Search Param: {usesearch.get("id")}
        </h2>
    )
}