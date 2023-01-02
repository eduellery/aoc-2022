export function part1(entries: number[][]): number {
    return Math.max(...entries.map(current => {
        return current.reduce<number>((sum, calories) => { return sum + calories }, 0)
    }))
}