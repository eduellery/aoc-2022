import { part1, part2 } from "../src/aoc/day03";
import { generateEntries } from "../src/aoc/util";
import fs from 'fs';

const test = generateEntries(fs.readFileSync(__dirname + '/day03.test', 'utf8'));
const localTest = fs.existsSync(__dirname + '/day03.in');
const input = localTest ? generateEntries(fs.readFileSync(__dirname + '/day03.in', 'utf8')) : [];
const itif = (condition: boolean) => condition ? it : it.skip;

describe("Day 03", () => {
    describe("Part 1", () => {
        it("Sample", () => {
            const result = part1(test);
            expect(result).toEqual(157);
        });

        itif(localTest)("Input", () => {
            const result = part1(input);
            expect(result).toEqual(7863);
        });
    });

    describe("Part 2", () => {
        it("Sample", () => {
            const result = part2(test);
            expect(result).toEqual(70);
        });

        itif(localTest)("Input", () => {
            const result = part2(input);
            expect(result).toEqual(2488);
        });
    });
});
