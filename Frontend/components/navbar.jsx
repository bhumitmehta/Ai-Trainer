"use client"

import { useState } from "react"
import Link from "next/link"
import { Activity, BarChart2, Home, Menu, Pizza, Weight, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Exercise", href: "/exercise", icon: Activity },
    { name: "BMI Calculator", href: "/bmi", icon: Weight },
    { name: "Calorie Counter", href: "/calories", icon: Pizza },
    { name: "Meal Plans", href: "/meal-plans", icon: BarChart2 },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                FitFuture
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-black/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
