import React from 'react'
import Button from '../components/button'

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Test Page</h1>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
    </div>
  )
}
