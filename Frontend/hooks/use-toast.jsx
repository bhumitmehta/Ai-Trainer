"use client"

// Simplified version of the toast hook
import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = (options) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...options }

    setToasts((prevToasts) => [...prevToasts, newToast])

    return {
      id,
      dismiss: () => dismissToast(id),
      update: (options) => updateToast(id, options),
    }
  }

  const dismissToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  const updateToast = (id, options) => {
    setToasts((prevToasts) => prevToasts.map((toast) => (toast.id === id ? { ...toast, ...options } : toast)))
  }

  return {
    toast,
    toasts,
    dismissToast,
    updateToast,
  }
}
