import { log, n, read, num } from "./utils"

const d4 = read("day4")

const completeRange = (s: string) => {
  const [a, b] = s.split("-").map(num)
  const fill = (acc: n[], i: n, t: n): n[] => {
    if (i == t + 1) return acc
    return fill([...acc, i], i + 1, t)
  }
  return fill([], a, b)
}

const fullOverlap = ([a, b]: n[][]) => {
  return a.every(x => b.includes(x)) || b.every(y => a.includes(y))
}

const anyOverlap = ([a, b]: n[][]) => {
  return a.some(x => b.includes(x)) || b.some(y => a.includes(y))
}

const res4_1 = d4
  .split("\n")
  .map(x => x.split(","))
  .map(x => x.map(completeRange))
  .filter(fullOverlap).length

const res4_2 = d4
  .split("\n")
  .map(x => x.split(","))
  .map(x => x.map(completeRange))
  .filter(anyOverlap).length

console.log(res4_1)

console.log(res4_2)
