import { num, read } from "./utils"

const d5 = read("day5")

type State = string[][]
type Mutation = { src: number; des: number }

const [init, ops] = d5.split("\n\n").map(x => x.split("\n"))

const isChar = (x: string) => !num(x) && x != " "

const convert = (s: string): Mutation[] => {
  const [, n, , src, , des] = s.split(" ").map(num)
  return new Array(n).fill({ src: src - 1, des: des - 1 })
}

const execute = (s: State, m: Mutation) => {
  s[m.des].push(s[m.src].pop()!)
  return s
}

const perform = (s: State, ms: Mutation[]): State => {
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

const muts = ops.flatMap(convert).reverse()

const res1_1 = perform(state, muts)
  .map(x => x.pop())
  .join("")

console.log(res1_1)
