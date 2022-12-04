import { read, sum, num } from "./utils"

const d1 = read("day1")

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

console.log(res1_1)
console.log(res1_2)
