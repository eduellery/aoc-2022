import {part1, part2} from "../src/aoc/day01";
import fs from 'fs';

function generateEntries(input: string) {
    return input.split('\n\n').map((entry: string) => entry.split('\n').map(Number)) as Array<number[]>;
}

const test = generateEntries(fs.readFileSync(__dirname + '/day01.test', 'utf8'));
const input = generateEntries(fs.readFileSync(__dirname + '/day01.in', 'utf8'));

describe("Day 01", () => {
    describe("Part 1", () => {
        it("Sample", () => {
            const result = part1(test);
            expect(result).toEqual(24000);
        });

        it("Input", () => {
            const result = part1(input);
            expect(result).toEqual(71502);
        });
    });

    describe("Part 2", () => {
        it("Sample", () => {
            const result = part2(test);
            expect(result).toEqual(45000);
        });

        it("Solve", () => {
            const result = part2(input);
            expect(result).toEqual(208191);
        })
    });
});
