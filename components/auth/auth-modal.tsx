"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "login" | "signup"
}

export function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-transparent border-none shadow-none">
        {mode === "login" ? (
          <LoginForm onClose={onClose} onSwitchToSignup={() => setMode("signup")} />
        ) : (
          <SignupForm onClose={onClose} onSwitchToLogin={() => setMode("login")} />
        )}
      </DialogContent>
    </Dialog>
  )
}
