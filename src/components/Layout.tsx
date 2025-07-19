import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <header className="bg-white dark:bg-gray-800 shadow p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Admin Portal</h1>
        </div>
      </header>
      <main className="p-4 container mx-auto">{children}</main>
    </div>
  )
}
