import { read, num } from "./utils"

const d4 = read("day4")

const completeRange = (s: string) => {
  const [a, b] = s.split("-").map(num)
  const fill = (acc: number[], i: number, t: number): number[] => {
    if (i == t + 1) return acc
    return fill([...acc, i], i + 1, t)
  }
  return fill([], a, b)
}

const fullOverlap = ([a, b]: number[][]) => {
  return a.every(x => b.includes(x)) || b.every(y => a.includes(y))
}

const anyOverlap = ([a, b]: number[][]) => {
  return a.some(x => b.includes(x)) || b.some(y => a.includes(y))
}

const res = (f: ([a, b]: number[][]) => boolean) =>
  d4
    .split("\n")
    .map(x => x.split(","))
    .map(x => x.map(completeRange))
    .filter(f).length

console.log(res(fullOverlap))
console.log(res(anyOverlap))
