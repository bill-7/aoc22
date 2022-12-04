import fs from "fs"

export const read = (path: string) => fs.readFileSync(path, "utf8")

export const sum = (a: number, b: number) => a + b

export const num = (s: string) => parseInt(s)

export const log = <T>(x: T) => {
  console.log(x)
  return x
}
