'use client' // isso aqui serve pra declarar que o componente será executado no lado do cliente 
import React from "react"
import { SessionProvider } from "next-auth/react"

function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider

