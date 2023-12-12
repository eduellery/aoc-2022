export function part1(entries: string[]): number {
    let result = 0;
    entries.forEach(entry => {
        const midIndex = Math.ceil(entry.length / 2);
        const firstHalf = entry.substring(0, midIndex);
        const secondHalf = entry.substring(midIndex);

        for (const char of firstHalf) {
            if (secondHalf.includes(char)) {
                result += charValue(char);
                break;
            }
        }
    });
    return result;
}

export function part2(entries: string[]): number {
    let result = 0;
    for (let i = 0; i < entries.length; i += 3) {
        const first = entries[i]
        const second = entries[i + 1]
        const third = entries[i + 2]
        const charSet = new Set<string>();
        for (const char of first) {
            if (second.includes(char)) {
                charSet.add(char)
            }
        }
        for (const char of third) {
            if (charSet.has(char)) {
                result += charValue(char);
                break;
            }
        }
    }
    return result;
}

function charValue(char: string): number {
    const value = char.charCodeAt(0) - 96
    return value > 0 ? value : value + 58
}