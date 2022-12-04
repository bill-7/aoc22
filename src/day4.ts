import { log, n, s, read, num } from "./utils"

const d4 = read("day4")

const completeRange = (s: s) => {
  const [a, b] = s.split("-").map(num)
  const fill = (acc: n[], i: n, t: n): n[] => {
    if (i == t + 1) return acc
    return fill([...acc, i], i + 1, t)
  }
  return fill([], a, b)
}

const res4_1 = d4
  .split("\n")
  .map(x => x.split(","))
  .map(x => x.map(completeRange))
  .filter(
    ([a, b]) => a.every(x => b.includes(x)) || b.every(y => a.includes(y))
  ).length

console.log(res4_1)
