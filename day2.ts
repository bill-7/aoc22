import fs from "fs"

const d2 = fs.readFileSync("/home/bill/code/aoc/day2.txt", "utf8") as string

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

const res = d2
  .split("\n")
  .map(x => x.split(" ") as Game)
  .map(getScore)
  .reduce((a, b) => a + b)

console.log(res)
