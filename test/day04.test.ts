import { part1 } from "../src/aoc/day04";
import { generateEntries } from "../src/aoc/util";
import fs from 'fs';

const test = generateEntries(fs.readFileSync(__dirname + '/day04.test', 'utf8'));
const input = generateEntries(fs.readFileSync(__dirname + '/day04.in', 'utf8'));

describe("Day 04", () => {
    describe("Part 1", () => {
        it("Sample", () => {
            const result = part1(test);
            expect(result).toEqual(2);
        });

        it("Input", () => {
            const result = part1(input);
            expect(result).toEqual(530);
        });
    });
});
