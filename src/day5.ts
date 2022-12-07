import { num, read } from "./utils"

const d5 = read("day5")

type State = string[][]
type Mutation = { src: number; des: number }

const [init, ops] = d5.split("\n\n").map(x => x.split("\n"))

const isChar = (x: string) => !num(x) && x != " "

const convert9000 = (s: string): Mutation9001[] => {
  const [, n, , src, , des] = s.split(" ").map(num)
  return new Array(n).fill({ n: 1, src: src - 1, des: des - 1 })
}

type Mutation9001 = { n: number; src: number; des: number }

const convert9001 = (s: string): Mutation9001 => {
  const [, n, , src, , des] = s.split(" ").map(num)
  return { n, src: src - 1, des: des - 1 }
}

const execute = (s: State, m: Mutation9001) => {
  const dest = s[m.des]
  for (let i = 0; i < m.n; i++) dest.push(s[m.src].pop()!)
  s[m.des] = dest
  return s
}

const perform = (s: State, ms: Mutation9001[]): State => {
  if (ms.length == 0) return state
  return perform(execute(s, ms.pop()!), ms)
}

const state = init[init.length - 1].split("").reduce((acc, c, i) => {
  if (num(c))
    acc.push(
      init
        .map(row => row[i])
        .filter(isChar)
        .reverse()
    )
  return acc
}, [] as State)

const state2 = [...state]

const muts = ops.flatMap(convert9000).reverse()
// console.log(muts)

const res5_1 = perform(state, muts)
  .map(x => x.pop())
  .join("")

console.log(res5_1)

const muts2 = ops.map(convert9001).reverse()
// console.log(muts2)

const res5_2 = perform(state2, muts2)
  .map(x => x.pop())
  .join("")

console.log(res5_2)
