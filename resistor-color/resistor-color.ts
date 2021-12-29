export const COLORS : Array<string> = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const colorCode = (colorCode : string) : number => {
  return parseInt(COLORS.indexOf(colorCode).toString());
}

