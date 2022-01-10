export const combineClasses = (classes: (string | boolean)[]): string => {
  return classes.filter((cls) => typeof cls !== 'boolean').join(' ')
}
