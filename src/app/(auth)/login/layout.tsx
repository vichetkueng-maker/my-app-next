import { LoginForm } from "@/components/ui/login"
import { Navbar } from "@/components/layout/navbar"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <>
        <Navbar></Navbar>
        <div className="flex min-h-screen items-center justify-center">
            <LoginForm></LoginForm>
        </div>
        
        {children}
    </>
  )
}