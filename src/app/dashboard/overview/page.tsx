"use client"
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){
    const params = useParams<{ tag: string}>()

    return(
        <h2>
            {/* Overview: {params.tag} */}

        </h2>
    )
}