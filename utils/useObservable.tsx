import { useState, useEffect } from 'react'
import { Observable, Subject } from 'rxjs'
import ValueSubject from './ValueSubject'

export function useObservable<T>(
  ob$: Observable<T>,
  initialValue?: T
): [T] {
  const [value, set] = useState<T>(initialValue)
  useEffect(() => {
    const sub = ob$.subscribe(set)
    return () => sub?.unsubscribe()
  })
  return [value]
}

export function useSubject<T>(
  sb$: Subject<T>,
  initialValue?: T
): [T, (value: T) => void] {
  const [value, set] = useState<T>(initialValue)
  useEffect(() => {
    const sub = sb$.subscribe(set)
    return () => sub?.unsubscribe()
  })
  return [value, sb$.next.bind(sb$)]
}

export default useObservable
