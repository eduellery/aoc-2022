const player1: { [key: string]: string } = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors'
};

const player2: { [key: string]: string } = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissors'
};

const value: { [key: string]: number } = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
};

export function part1(entries: string[][]): number {
    let result = 0
    entries.forEach((entry) => {
        const hand1 = player1[entry[0]]
        const hand2 = player2[entry[1]]
        result += value[hand2]
        if (hand1 === hand2) {
            result += 3
            return
        }
        if (hand1 === 'rock' && hand2 === 'paper') {
            result += 6
            return
        }
        if (hand1 === 'paper' && hand2 === 'scissors') {
            result += 6
            return
        }
        if (hand1 === 'scissors' && hand2 === 'rock') {
            result += 6
            return
        }
    })
    return result
}

export function part2(entries: string[][]): number {
    return entries.length
}