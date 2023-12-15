export function part1(entries: string[]): number {
    let result = 0;
    entries.forEach(entry => {
        const [section1, section2] = entry.split(",").map(section => section.split("-").map(Number));
        const [start1, end1] = section1;
        const [start2, end2] = section2;
        if (contains(start1, start2, end1, end2)) {
            result++;
        }
    });
    return result;
}

export function part2(entries: string[]): number {
    let result = 0;
    entries.forEach(entry => {
        const [section1, section2] = entry.split(",").map(section => section.split("-").map(Number));
        const [start1, end1] = section1;
        const [start2, end2] = section2;
        if (contains(start1, start2, end1, end2) || overlaps(start1, start2, end1, end2)) {
            result++;
        }
    });
    return result;
}

function contains(start1: number, start2: number, end1: number, end2: number) {
    return (start1 <= start2 && end1 >= end2) || (start1 >= start2 && end1 <= end2);
}

function overlaps(start1: number, start2: number, end1: number, end2: number) {
    return (start1 <= start2 && end1 >= start2) || (start1 <= end2 && end1 >= end2);
}
