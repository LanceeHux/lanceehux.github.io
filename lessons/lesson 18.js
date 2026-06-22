// lesson 18
class Calculator {
    constructor(logger) {
        this.logger = logger;
    }

    divide(a, b) {
        let err = this.validate(a, b);
        if (err) {
            console.log(err);
            return;
        }
        let ans = a / b;
        this.logger.log(ans);
    }
    validate(a, b) {
        if (typeof a !== "number") return "a must be a number";
        if (typeof b !== "number") return "b must be a number";
        if (b === 0) return "b should be greater than 0!";
        return null;
    }
}
class ConsoleLogger {
    log(msg) {
        console.log(msg);
    }
}
new Calculator(new ConsoleLogger()).divide(20, 2);
// lesson 1end [18]
