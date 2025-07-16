"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, X, LogOut, CodeXml } from "lucide-react"
import LoginForm from "@/components/auth/login-form"
import RegisterForm from "@/components/auth/register-form"
import { useAuth } from "@/components/auth/auth-provider"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authDialog, setAuthDialog] = useState<"login" | "register" | null>(null)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DevCompany <CodeXml />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#clients" className="text-gray-700 hover:text-blue-600 transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                {user.role === "admin" && (
                  <Link href="/admin">
                    <Button variant="outline" size="sm">
                      Admin Panel
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Dialog open={authDialog === "login"} onOpenChange={(open) => setAuthDialog(open ? "login" : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost">Login</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Login to Your Account</DialogTitle>
                    </DialogHeader>
                    <LoginForm
                      onSuccess={() => setAuthDialog(null)}
                      onSwitchToRegister={() => setAuthDialog("register")}
                    />
                  </DialogContent>
                </Dialog>

                <Dialog
                  open={authDialog === "register"}
                  onOpenChange={(open) => setAuthDialog(open ? "register" : null)}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Your Account</DialogTitle>
                    </DialogHeader>
                    <RegisterForm
                      onSuccess={() => setAuthDialog(null)}
                      onSwitchToLogin={() => setAuthDialog("login")}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-blue-600 transition-colors">
                Clients
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>

              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <span className="text-gray-700">Welcome, {user.name}</span>
                  {user.role === "admin" && (
                    <Link href="/admin">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Admin Panel
                      </Button>
                    </Link>
                  )}
                  <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-2 text-red-500" />
                    {/* Logout */}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Dialog open={authDialog === "login"} onOpenChange={(open) => setAuthDialog(open ? "login" : null)}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        Login
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login to Your Account</DialogTitle>
                      </DialogHeader>
                      <LoginForm
                        onSuccess={() => setAuthDialog(null)}
                        onSwitchToRegister={() => setAuthDialog("register")}
                      />
                    </DialogContent>
                  </Dialog>

                  <Dialog
                    open={authDialog === "register"}
                    onOpenChange={(open) => setAuthDialog(open ? "register" : null)}
                  >
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">Register</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create Your Account</DialogTitle>
                      </DialogHeader>
                      <RegisterForm
                        onSuccess={() => setAuthDialog(null)}
                        onSwitchToLogin={() => setAuthDialog("login")}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
