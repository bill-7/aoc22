import fs from "fs"

export const read = (name: string) => {
  return fs.readFileSync("./data/" + name + ".txt", "utf8")
}

export const uniq = <T>(x: T, i: number, xs: T[]) => {
  return !xs.slice(i + 1).includes(x)
}

export const sum = (a: number, b: number) => a + b

export const num = (s: string) => parseInt(s)

export const log = <T>(x: T) => {
  console.log(x)
  return x
}

export const voidLog = <T>(x: T) => console.log(x)

const crank90 = <T>(xss: T[][]) => {
  return xss.reduceRight((acc, _, i) => {
    acc.push(xss.map(row => row[i]))
    return acc
  }, [] as T[][])
}

// const rotate = (trees: Trees, n = 0): Trees => {
//   if (n == 0) return trees
//   return rotate(crank90(trees), n - 1)
// }
