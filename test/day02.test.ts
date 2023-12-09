import { part1, part2 } from "../src/aoc/day02";
import fs from 'fs';

function generateEntries(input: string) {
    return input.split('\n');
}

const test = generateEntries(fs.readFileSync(__dirname + '/day02.test', 'utf8'));
const input = generateEntries(fs.readFileSync(__dirname + '/day02.in', 'utf8'));

describe("Day 02", () => {
    describe("Part 1", () => {
        it("Sample", () => {
            const result = part1(test);
            expect(result).toEqual(15);
        });

        it("Input", () => {
            const result = part1(input);
            expect(result).toEqual(13005);
        });
    });

    describe("Part 2", () => {
        it("Sample", () => {
            const result = part2(test);
            expect(result).toEqual(12);
        });

        it("Solve", () => {
            const result = part2(input);
            expect(result).toEqual(11373);
        })
    });
});
