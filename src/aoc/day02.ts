const value: { [key: string]: number } = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
    else: 0
};

export function part1(entries: string[]): number {
    return entries.reduce<number>((sum, entry) => { return sum + value[entry] }, 0)
}

export function part2(entries: string[]): number {
    return entries.length
}