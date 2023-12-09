const value: { [key: string]: [number, number] } = {
    'A X': [4, 3],
    'A Y': [8, 4],
    'A Z': [3, 8],
    'B X': [1, 1],
    'B Y': [5, 5],
    'B Z': [9, 9],
    'C X': [7, 2],
    'C Y': [2, 6],
    'C Z': [6, 7],
    else: [0, 0]
};

export function part1(entries: string[]): number {
    return entries.reduce<number>((sum, entry) => { return sum + value[entry][0] }, 0)
}

export function part2(entries: string[]): number {
    return entries.reduce<number>((sum, entry) => { return sum + value[entry][1] }, 0)
}