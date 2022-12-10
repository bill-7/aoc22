import { num, read, sum } from "./utils"

const d8 = read("8test")

const init = d8.split("\n").map(r => r.split("").map(num))

type Coord = { i: number; j: number; n: number }
type Trees = number[][]

const coords: Coord[] = []

const look = (trees: Trees, unwind = 0) =>
  trees.forEach((row, i) => {
    row.forEach((tree, j) => {
      if (row.slice(0, j).every(x => x < tree)) update(i, j, tree, unwind)
    })
  })

const crank90 = (trees: Trees) => {
  return trees.reduceRight((acc, _, i) => {
    acc.push(trees.map(row => row[i]))
    return acc
  }, [] as Trees)
}

const rotate = (trees: Trees, n = 0): Trees => {
  if (n == 0) return trees
  return rotate(crank90(trees), n - 1)
}

console.log(init)
console.log(coords)
console.log(rotate(init, 1))
