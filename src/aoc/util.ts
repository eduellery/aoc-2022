
export function generateEntries(input: string) {
    return input.split('\n');
}

export function generateEntriesAsNumberArray(input: string) {
    return input.split('\n\n').map((entry: string) => entry.split('\n').map(Number)) as Array<number[]>;
}