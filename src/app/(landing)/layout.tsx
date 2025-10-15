import { Navbar } from "@/components/layout/navbar"
import FooterSection from "@/components/layout/section/footer"
import HeroSection from "@/components/layout/section/hero-section"


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navbar></Navbar>
        {children}
        <HeroSection></HeroSection>
        <FooterSection></FooterSection>
    </>
  )
}
