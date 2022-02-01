export const combineClasses = (classes: (string | boolean)[]): string => {
  return classes.filter((cls) => typeof cls !== 'boolean').join(' ')
}

export const getEnterAnimationClasses = (styles: { readonly [key: string]: string }, isVisible: boolean) => combineClasses([styles.start, isVisible && styles.enter])