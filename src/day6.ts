import { read, uniq } from "./utils"

const d6 = read("day6").split("")

const uniqFind = (n: number) =>
  d6.findIndex((_, i) => d6.slice(i - n, i).filter(uniq).length == n)

console.log(uniqFind(4))
console.log(uniqFind(14))
