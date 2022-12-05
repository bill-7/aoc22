import fs from "fs"

export const read = (name: string) => {
  return fs.readFileSync("./data/" + name + ".txt", "utf8")
}

export const sum = (a: number, b: number) => a + b

export const num = (s: string) => parseInt(s)

export const log = <T>(x: T) => {
  console.log(x)
  return x
}
