import { read, sum } from "./utils"

const d2 = read("day2")

type Game = ["A" | "B" | "C", "X" | "Y" | "Z"]

const getScore = ([cha, res]: Game) => {
  switch (res) {
    case "X":
      return (cha == "A" ? 3 : cha == "B" ? 0 : 6) + 1
    case "Y":
      return (cha == "A" ? 6 : cha == "B" ? 3 : 0) + 2
    case "Z":
      return (cha == "A" ? 0 : cha == "B" ? 6 : 3) + 3
  }
}

const getScore2 = ([cha, res]: Game) => {
  const resScore = res == "X" ? 0 : res == "Y" ? 3 : 6
  const bonus = 1 //cha == "A" ? 1 : cha == "B" ? 2 : 3
  return resScore + bonus
}

const res = (f: (g: Game) => number) =>
  d2
    .split("\n")
    .map(x => x.split(" ") as Game)
    .map(f)
    .reduce(sum)

console.log(res(getScore))
console.log(res(getScore2))
