type TMode = Record<string, boolean | string>
export const classNames = (cls: string, mode: TMode, extraClassNames: string[]): string => {
  return [
    cls,
    ...extraClassNames,
    Object.entries(mode)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key)
  ].join(' ')
}


