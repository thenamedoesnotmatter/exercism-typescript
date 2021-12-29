const colorMap : Array<string> = [
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

export function decodedValue(colorCodes : Array<string>) : number {
  return parseInt(colorMap.indexOf(colorCodes[0]).toString() + colorMap.indexOf(colorCodes[1]).toString());
}