import { num, read } from "./utils"

const d5 = read("day5")

type State = string[][]
type Mutation = { src: number; des: number }

const [init, ops] = d5.split("\n\n").map(x => x.split("\n"))

const isChar = (x: string) => !num(x) && x != " "

const convert = (s: string): Mutation[] => {
  const [, n, , from, , to] = s.split(" ").map(num)
  return new Array(n).fill({ src: from - 1, des: to - 1 })
}

type Mutation9001 = { n: number; src: number; des: number }

const convert9001 = (s: string): Mutation9001 => {
  const [, n, , src, , des] = s.split(" ").map(num)
  return { n, src: src - 1, des: des - 1 }
}

// 5.1 TODO: refactor such that { n: 1, src, ses}. Default should be 5.2

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

const muts = ops.flatMap(convert9000).reverse()

const res1_1 = perform(state, muts)
  .map(x => x.pop())
  .join("")

console.log(res1_1)
