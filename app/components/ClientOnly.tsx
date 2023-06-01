'use client'
import React, { useEffect, useState } from 'react'

interface clientOnlyProps {
  children: React.ReactNode
}

function ClientOnly({ children }: clientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return <div>{children}</div>
}

export default ClientOnly
