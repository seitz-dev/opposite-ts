import { describe, it, expect } from "bun:test";
import { Opposite } from "../src/";

describe("Opposite", () => {
    it("defaults to the first value", () => {
        const opposite = new Opposite("good", "bad");
        expect(opposite.getValue()).toBe("good");
        expect(opposite.getState()).toBe(false);
    })

    it("reverses to the second value", () => {
        const opposite = new Opposite("good", "bad");
        opposite.reverse();
        expect(opposite.getValue()).toBe("bad");
        expect(opposite.getState()).toBe(true);
    })

    it("sets state correctly", () => {
        const opposite = new Opposite("good", "bad");
        opposite.setState(true);
        expect(opposite.getValue()).toBe("bad");
        expect(opposite.getState()).toBe(true);
        opposite.setState(false);
        expect(opposite.getValue()).toBe("good");
        expect(opposite.getState()).toBe(false);
    })

    it("toggles state correctly", () => {
        const opposite = new Opposite("good", "bad");
        opposite.reverse();
        expect(opposite.getValue()).toBe("bad");
        expect(opposite.getState()).toBe(true);
        opposite.reverse();
        expect(opposite.getValue()).toBe("good");
        expect(opposite.getState()).toBe(false);
    })

    it("supports method chaining", () => {
        const opposite = new Opposite("good", "bad");
        opposite.reverse().setState(true).reverse();
        expect(opposite.getValue()).toBe("good");
        expect(opposite.getState()).toBe(false);
    })
})