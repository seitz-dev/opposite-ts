
/**
 * A data structure that represents a pair of objects that are the opposite of one another, with
 * one value selected as the current state. 
 * 
 * @example
 * const dichotomy = new Opposite<string>("good", "bad");
 * console.log(dichotomy.getValue()); // returns "good"
 * console.log(dichotomy.reverse().getValue()); // returns "bad"
 * 
 * const flag = "good"
 * console.log(dichotomy.setState(flag === "bad").getValue()) // returns "good"
 */
export class Opposite<T> {
    private state: boolean = false;
    public constructor(private firstValue: T, private secondValue: T) { }

    /**
     * Retrieves the current value based on the internal state.
     * @returns The current value, either the first or second value depending on the internal state.
     */
    public getValue(): T {
        return this.state ? this.secondValue : this.firstValue;
    }

    /**
     * 
     * @param state The new state to set. `true` selects the second value, `false` selects the first value.
     * @returns The current instance of the Opposite class, allowing for method chaining.
     */
    public setState(state: boolean): Opposite<T> {
        this.state = state;
        return this;
    }

    /**
     * Retrieves the current state of the Opposite instance.
     * @returns The current state as a boolean, where `true` indicates the second value is selected and `false` indicates the first value is selected.
     */
    public getState(): boolean {
        return this.state;
    }

    /**
     * Reverses the current state, switching between the first and second values.
     * @returns The current instance of the Opposite class, allowing for method chaining.
     */
    public reverse(): Opposite<T> {
        this.state = !this.state;
        return this;
    }
}