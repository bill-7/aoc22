import { num, read } from "./utils"

const d8 = read("day8")

const init = d8.split("\n").map(r => r.split("").map(num))

const res8_1 = init.reduce((acc, row, i) => {
  const hits = row.filter((t, j) => {
    const left = row.slice(0, j).every(x => x < t)
    const right = row.slice(j + 1).every(x => x < t)
    const up = init.slice(0, i).every(x => x[j] < t)
    const down = init.slice(i + 1).every(x => x[j] < t)
    return left || right || up || down
  })
  return acc + hits.length
}, 0)

const res8_2 = init.reduce((acc, row, i) => {
  const hits = Math.max(
    ...row.map((t, j) => {
      const up = init.slice(0, i)
      const ufind = up.reverse().findIndex(x => x[j] >= t)
      const ures = ufind == -1 ? up.length : ufind + 1

      const left = row.slice(0, j)
      const lfind = left.reverse().findIndex(x => x >= t)
      const lres = lfind == -1 ? left.length : lfind + 1

      const right = row.slice(j + 1)
      const rfind = right.findIndex(x => x >= t)
      const rres = rfind == -1 ? right.length : rfind + 1

      const down = init.slice(i + 1)
      const dfind = down.findIndex(x => x[j] >= t)
      const dres = dfind == -1 ? down.length : dfind + 1

      return lres * rres * ures * dres
    })
  )
  return Math.max(hits, acc)
}, 0)

console.log(res8_1)
console.log(res8_2)
