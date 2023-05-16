import * as React from 'react'
import './style.css'
import { BehaviorSubject } from 'rxjs'
import { useAppContext } from './AppProvider'

export default function App() {
  const ctx = useAppContext()
  if (!ctx) return
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  )
}
