import { BehaviorSubject, Observable, pluck } from 'rxjs'
import { COLOR_THEMES, FontTheme, FONT_THEMES } from './variables'
import type { ColorTheme } from './variables'
import KeySubject from './utils/KeySubject'
import ValueSubject, { ValueObservable } from './utils/ValueSubject'
import { map } from 'rxjs/operators'

export default class AppService {
  colorTheme$ = new KeySubject<ColorTheme>('light', COLOR_THEMES)
  background$ = new ValueObservable<string>(
    this.colorTheme$.value$.pipe(map(v => v.background))
  )
  textColor$ = new ValueObservable<string>(
    this.colorTheme$.value$.pipe(map(v => v.textColor))
  )

  fontTheme$ = new KeySubject<FontTheme>('roboto', FONT_THEMES)
  bodyFamily$ = new ValueObservable<string>(
    this.fontTheme$.value$.pipe(map(v => v.bodyFamily))
  )
  headerFamily$ = new ValueObservable<string>(
    this.fontTheme$.value$.pipe(map(v => v.headerFamily))
  )
  bodyWeight$ = new ValueObservable<number>(
    this.fontTheme$.value$.pipe(map(v => v.bodyWeight))
  )
  boldWeight$ = new ValueObservable<number>(
    this.fontTheme$.value$.pipe(map(v => v.boldWeight))
  )
  headerWeight$ = new ValueObservable<number>(
    this.fontTheme$.value$.pipe(map(v => v.headerWeight))
  )
  bodySize$ = new ValueObservable<number>(
    this.fontTheme$.value$.pipe(map(v => v.bodySize))
  )
  bodySizeRel$ = new ValueObservable<string>(
    this.bodySize$.pipe(map(v => `${(v / 16) * 100}%`))
  )

  constructor() {}
  init() {}
}
