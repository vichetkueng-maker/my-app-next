import { Navbar } from "@/components/layout/navbar"
// import { NavigationMenuDemo } from "@/components/layout/navbar"
import { RegisterForm } from "@/components/ui/register"


export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navbar></Navbar>
        <div className="flex min-h-screen items-center justify-center">
            <RegisterForm></RegisterForm>
        </div>
        {children}
    </>
  )
}
