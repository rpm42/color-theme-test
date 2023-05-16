import { BehaviorSubject } from 'rxjs'
import { COLOR_THEMES } from './variables'
import type { ColorTheme } from './variables'
import KeySubject from './utils/KeySubject'
import ValueSubject from './utils/ValueSubject'
import { map } from 'rxjs/operators'
export default class AppService {
  colorTheme$ = new KeySubject<ColorTheme>('light', COLOR_THEMES)
  background$ = new ValueSubject<string>()
  textColor$ = new ValueSubject<string>()
  constructor() {
    this.colorTheme$.value$
      .pipe(map(v => v.background))
      .subscribe(this.background$)
    this.colorTheme$.value$
      .pipe(map(v => v.textColor))
      .subscribe(this.textColor$)
    this.colorTheme$.next('light')
  }
  init() {}
}
