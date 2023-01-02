import { part1 } from "../src/aoc/day01";

import fs from 'fs';

describe("Day 01", () => {
    it("test part 1", () => {
        const input = fs.readFileSync(__dirname + '/day01.test', 'utf8');
        const entries = generateEntries(input)
        const result = part1(entries);
        expect(result).toEqual(24000);
    });

    it("solve part 1", () => {
        const input = fs.readFileSync(__dirname + '/day01.in', 'utf8');
        const entries = generateEntries(input)
        const result = part1(entries);
        expect(result).toEqual(71502);
    });
});

function generateEntries(input: any) {
    return input.split('\n\n').map((entry: string) => entry.split('\n').map(Number)) as Array<number[]>;
}
