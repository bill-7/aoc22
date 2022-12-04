import { read, sum } from "./utils"

const d3 = read("./day3.txt")

type Stringers = [string, string]

const twoHalves = (s: string): Stringers => [
  s.slice(0, s.length / 2),
  s.slice(s.length / 2),
]

const findMatch = ([a, b]: Stringers) => {
  return a.split("").find(c => b.includes(c))!
}

const alphaScore = (c: string) => {
  const isUpper = c.toUpperCase() === c ? 26 : 0
  return "abcdefghijklmnopqrstuvwxyz".indexOf(c.toLowerCase()) + isUpper + 1
}

const res3_1 = d3
  .split("\n")
  .map(twoHalves)
  .map(findMatch)
  .map(alphaScore)
  .reduce(sum)

console.log(res3_1)
