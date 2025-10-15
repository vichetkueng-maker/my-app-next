"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"

function NavDropdown({
  trigger,
  items,
}: {
  trigger: string
  items: { label: string; href: string; category?: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
      >
        {trigger}
        <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border border-border bg-popover shadow-lg">
          <div className="p-1">
            {items[0]?.category && (
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{items[0].category}</div>
            )}
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-sm px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const docsItems = [
    { label: "Getting Started", href: "/docs/getting-started", category: "Documentation" },
    { label: "Installation", href: "/docs/installation" },
    { label: "API Reference", href: "/docs/api-reference" },
    { label: "Components", href: "/docs/components" },
    { label: "Examples", href: "/docs/examples" },
  ]

  const templateItems = [
    { label: "E-commerce", href: "/templates/ecommerce", category: "Template Categories" },
    { label: "Blog", href: "/templates/blog" },
    { label: "Dashboard", href: "/templates/dashboard" },
    { label: "Landing Page", href: "/templates/landing" },
    { label: "SaaS", href: "/templates/saas" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center">
            {/* <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21a8 8 0 1 0-16 0"/>
            </svg>
          </div>
          <span className="font-sans text-sm font-semibold text-foreground">Kuengvichet</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/showcase" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Showcase
          </Link>

          <NavDropdown trigger="Docs" items={docsItems} />

          <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>

          <NavDropdown trigger="Templates" items={templateItems} />

          <Link href="/enterprise" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Enterprise
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Search Bar - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <Input
              type="search"
              placeholder="Search documentation..."
              className="h-9 w-64 bg-secondary pl-9 pr-4 text-sm placeholder:text-muted-foreground focus-visible:ring-1"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
              ⌘K
            </kbd>
          </div>

          {/* Deploy Button - Hidden on small screens */}
          <Button size="sm" className="text-sm bg-cyan-400">
           
            <Link href="/login" className="hidden text-sm sm:inline-flex">
              Login
            </Link>
          </Button>

          {/* Learn Button */}
          <Button size="sm" className="text-sm bg-blue-600">
            <Link href="/register" className="text-sm">
              Register
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12M6 12l12 12"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/showcase"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Showcase
            </Link>
            
            <NavDropdown trigger="Docs" items={docsItems} />
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Blog
            </Link>
            
            <NavDropdown trigger="Templates" items={templateItems} />
            <Link
              href="/enterprise"
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Enterprise
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
