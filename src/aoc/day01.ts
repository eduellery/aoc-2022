export function part1(entries: number[][]): number {
    const max = Math.max(...entries.map(current => {
        return current.reduce<number>((sum, calories) => { return sum + calories }, 0)
    }))
    return max;
}

export function part2(entries: number[][]): number {
    const ordered = entries.map(current => {
        return current.reduce<number>((sum, calories) => { return sum + calories }, 0)
    }).sort((a, b) => b - a);
    return ordered.slice(0, 3).reduce<number>((sum, calories) => { return sum + calories }, 0)
}