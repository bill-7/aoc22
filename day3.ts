import { log, read, sum } from "./utils"

const d3 = read("./day3.txt")

type Stringers = [string, string]

const twoHalves = (s: string): Stringers => [
  s.slice(0, s.length / 2),
  s.slice(s.length / 2),
]

const findMatch = ([head, ...tail]: string[]) => {
  return head.split("").find(c => tail.every(t => t.includes(c)))!
}

const alphaScore = (c: string) => {
  const isUpper = c.toUpperCase() === c ? 26 : 0
  return "abcdefghijklmnopqrstuvwxyz".indexOf(c.toLowerCase()) + isUpper + 1
}

const triplets = (_: string, i: number, xs: string[]) => {
  return (i + 1) % 3 == 0 ? [xs[i - 2], xs[i - 1], _] : []
}

const res3_1 = d3
  .split("\n")
  .map(twoHalves)
  .map(findMatch)
  .map(alphaScore)
  .reduce(sum)

const res3_2 = d3
  .split("\n")
  .map(triplets)
  .filter(x => x.length)
  .map(log)
  .map(findMatch)
  .map(alphaScore)
  .reduce(sum)

console.log(res3_1)
console.log(res3_2)
