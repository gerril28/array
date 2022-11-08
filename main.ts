input.onButtonPressed(Button.A, function () {
    basic.showString("" + (list[0]))
})
input.onButtonPressed(Button.AB, function () {
    p1 = list[0]
    p2 = BadMen[1]
    if (p1 == p1) {
        basic.showString("" + (p1))
        basic.showString("Win")
    } else {
        basic.showString("" + (p2))
        basic.showString("Lose")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (BadMen[1]))
})
let p2 = ""
let p1 = ""
let BadMen: string[] = []
let list: string[] = []
list = ["Spiderman", "Batman", "Lebron James"]
BadMen = ["Thanos", "Joker", "Dr Doom"]
