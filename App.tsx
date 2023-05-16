import * as React from 'react'
import { useEffect } from 'react'
import './style.css'
import { BehaviorSubject, Observable } from 'rxjs'
import AppProvider, { useAppContext } from './AppProvider'
import useObservable from './utils/useObservable'
import AppService from './AppService'
import ValueSubject from './utils/ValueSubject'
import useBehaviorSubject from './utils/useBehaviorSubject'
import useSubject from './utils/useSubject'

function setCssVariable(name: string, value: string | number) {
  if (!name || !value) return
  document.documentElement.style.setProperty(
    `--${name}`,
    typeof value === 'number' ? value.toString() : value
  )
  console.log('docstyle', document.documentElement.style)
}

function useCssVariableRx(
  name: string,
  value$: ValueSubject<string | number>
) {
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
  const [colorTheme, setColorTheme] = useSubject<string>(
    appService.colorTheme$,
    appService.colorTheme$.key
  )
  const [fontTheme, setFontTheme] = useSubject<string>(
    appService.fontTheme$,
    appService.fontTheme$.key
  )
  useCssVariableRx('background', appService.background$)
  useCssVariableRx('textColor', appService.textColor$)

  useCssVariableRx('bodyFamily', appService.bodyFamily$)
  useCssVariableRx('headerFamily', appService.headerFamily$)
  useCssVariableRx('bodyWeight', appService.bodyWeight$)
  useCssVariableRx('boldWeight', appService.boldWeight$)
  useCssVariableRx('headerWeight', appService.headerWeight$)
  useCssVariableRx('bodySize', appService.bodySize$)
  console.log(appService)

  function changeColorTheme() {
    const themes = Object.keys(appService.colorTheme$.values)
    const themeIndex = themes.indexOf(colorTheme)
    const nextTheme = themes[(themeIndex + 1) % themes.length]
    setColorTheme(nextTheme)
  }

  function changeFontTheme() {
    const themes = Object.keys(appService.fontTheme$.values)
    const themeIndex = themes.indexOf(fontTheme)
    const nextTheme = themes[(themeIndex + 1) % themes.length]
    setFontTheme(nextTheme)
  }
  return (
    <AppProvider value={appService}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>
          Current color theme is <strong>{colorTheme}</strong>
          <br />
          <button onClick={changeColorTheme}>Change color theme</button>
        </p>
        <p>
          Current font theme is <strong>{fontTheme}</strong>
          <br />
          <button onClick={changeFontTheme}>Change font theme</button>
        </p>
      </div>
    </AppProvider>
  )
}
