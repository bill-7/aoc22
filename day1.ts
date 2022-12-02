import fs from "fs"

const d1 = fs.readFileSync("/home/bill/code/aoc/day1.txt", "utf8") as string

const sum = (a: number, b: number) => a + b
const num = (s: string) => parseInt(s)

const totals = d1
  .split("\n")
  .map(num)
  .join(",")
  .split(",NaN,")
  .map(x => x.split(","))
  .map(x => x.map(num))
  .map(x => x.reduce(sum))

const res1_1 = Math.max(...totals)

const res1_2 = totals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce(sum)

console.log(res1_1, res1_2)
