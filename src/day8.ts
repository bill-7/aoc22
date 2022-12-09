import { num, read, sum } from "./utils"

const d8 = read("8test")

//for each side
//for each row
//index 0 counts
//find all trees greater than i=0

const trees = d8.split("\n").map(r => r.split("").map(num))

type Coord = { i: number; j: number }

const coords: Coord[] = []

const left = trees.map(row => {
  return row.filter((t, i) => row.slice(0, i).every(x => x < t))
})

left.forEach((rowMatches, i) =>
  rowMatches.forEach(t => {
    coords.push({ i, j: trees[i].indexOf(t) }) //big assumption that first occurance is correct (is this provable?)
  })
)

const rotated = trees.reduceRight((acc, _, i) => {
  acc.push(trees.map(row => row[i]))
  return acc
}, [] as number[][])

console.log(trees)
// console.log(left)
// console.log(coords)
console.log(rotated)
