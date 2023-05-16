import * as React from 'react'
import { useEffect } from 'react'
import './style.css'
import { BehaviorSubject, Observable } from 'rxjs'
import AppProvider, { useAppContext } from './AppProvider'
import useObservable, { useSubject } from './utils/useObservable'
import AppService from './AppService'
import ValueSubject from './utils/ValueSubject'
import useBehaviorSubject from './utils/useBehaviorSubject'

function setCssVariable(name: string, value: string) {
  if (!name || !value) return
  document.documentElement.style.setProperty(`--${name}`, value)
  console.log('docstyle', document.documentElement.style)
}

function useCssVariableRx(name: string, value$: ValueSubject<string>) {
  const [value] = useObservable(value$, value$.value)
  console.log('value', value$, value)
  useEffect(() => {
    if (!name || !value) return
    setCssVariable(name, value)
    console.log('setCssVariable', name, value)
  }, [value])
}
const appService = new AppService()

export default function App() {
  const [theme, setTheme] = useSubject<string>(
    appService.colorTheme$,
    appService.colorTheme$.key
  )
  useCssVariableRx('background', appService.background$)
  useCssVariableRx('textColor', appService.textColor$)
  console.log(appService)

  function changeTheme() {
    const themes = Object.keys(appService.colorTheme$.values)
    const themeIndex = themes.indexOf(theme)
    const nextTheme = themes[(themeIndex + 1) % themes.length]
    setTheme(nextTheme)
  }
  return (
    <AppProvider value={appService}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Current theme is {theme}</p>
        <button onClick={changeTheme}>Change theme</button>
      </div>
    </AppProvider>
  )
}
