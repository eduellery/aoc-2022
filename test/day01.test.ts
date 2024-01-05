import { part1, part2 } from "../src/aoc/day01";
import { generateEntriesAsNumberArray } from "../src/aoc/util";
import fs from 'fs';

const test = generateEntriesAsNumberArray(fs.readFileSync(__dirname + '/day01.test', 'utf8'));
const localTest = fs.existsSync(__dirname + '/day01.in');
const input = localTest ? generateEntriesAsNumberArray(fs.readFileSync(__dirname + '/day01.in', 'utf8')) : [];
const itif = (condition: boolean) => condition ? it : it.skip;

describe("Day 01", () => {
    describe("Part 1", () => {
        it("Sample", () => {
            const result = part1(test);
            expect(result).toEqual(24000);
        });

        itif(localTest)("Solve", () => {
            const result = part1(input);
            expect(result).toEqual(71502);
        });
    });

    describe("Part 2", () => {
        it("Sample", () => {
            const result = part2(test);
            expect(result).toEqual(45000);
        });

        itif(localTest)("Solve", () => {
            const result = part2(input);
            expect(result).toEqual(208191);
        })
    });
});
