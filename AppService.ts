import { BehaviorSubject, Observable, pluck } from 'rxjs'
import { COLOR_THEMES, FontTheme, FONT_THEMES } from './variables'
import type { ColorTheme } from './variables'
import KeySubject from './utils/KeySubject'
import ValueSubject from './utils/ValueSubject'
import { map } from 'rxjs/operators'

export class FontService {
  fontTheme$ = new KeySubject<FontTheme>('roboto', FONT_THEMES)
  bodyFamily$ = new ValueSubject<string>()
  headerFamily$ = new ValueSubject<string>()
  bodyWeight$ = new ValueSubject<number>()
  boldWeight$ = new ValueSubject<number>()
  headerWeight$ = new ValueSubject<number>()
  bodySize$ = new ValueSubject<number>()

  constructor() {
    this.fontTheme$.value$
      .pipe(map(v => v.bodyFamily))
      .subscribe(this.bodyFamily$)
    this.fontTheme$.value$
      .pipe(map(v => v.headerFamily))
      .subscribe(this.headerFamily$)
    this.fontTheme$.value$
      .pipe(map(v => v.bodyWeight))
      .subscribe(this.bodyWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.boldWeight))
      .subscribe(this.boldWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.headerWeight))
      .subscribe(this.headerWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.bodySize))
      .subscribe(this.bodySize$)
    this.fontTheme$.next('roboto')
  }
  init() {}
}

export default class AppService {
  colorTheme$ = new KeySubject<ColorTheme>('light', COLOR_THEMES)
  background$ = new ValueSubject<string>()
  textColor$ = new ValueSubject<string>()

  fontTheme$ = new KeySubject<FontTheme>('roboto', FONT_THEMES)
  bodyFamily$ = new ValueSubject<string>()
  headerFamily$ = new ValueSubject<string>()
  bodyWeight$ = new ValueSubject<number>()
  boldWeight$ = new ValueSubject<number>()
  headerWeight$ = new ValueSubject<number>()
  bodySize$ = new ValueSubject<number>()

  constructor() {
    this.colorTheme$.value$
      .pipe(map(v => v.background))
      .subscribe(this.background$)
    this.colorTheme$.value$
      .pipe(map(v => v.textColor))
      .subscribe(this.textColor$)
    this.colorTheme$.next('light')

    this.fontTheme$.value$
      .pipe(map(v => v.bodyFamily))
      .subscribe(this.bodyFamily$)
    this.fontTheme$.value$
      .pipe(map(v => v.headerFamily))
      .subscribe(this.headerFamily$)
    this.fontTheme$.value$
      .pipe(map(v => v.bodyWeight))
      .subscribe(this.bodyWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.boldWeight))
      .subscribe(this.boldWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.headerWeight))
      .subscribe(this.headerWeight$)
    this.fontTheme$.value$
      .pipe(map(v => v.bodySize))
      .subscribe(this.bodySize$)
    this.fontTheme$.next('roboto')
  }
  init() {}
}
