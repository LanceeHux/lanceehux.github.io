// lesson 19
class Calculator {
    constructor(logger) {
        this.logger = logger;
    }
    divide(a, b) {
        this.validate(a, b);
        let ans = a/b;
        this.logger.log(ans);
    }
    validate(a, b) {
        if (typeof a !== "number") throw new Error("a must be number");
        if (typeof b !== "number") throw new Error("b must be number");
        if (b === 0) throw new Error ("b must be greater than 0!");
    }
}

class ConsoleLogger {
    log(msg) {
        console.log(msg);
    }
}
const logger = new ConsoleLogger();
try {
new Calculator(logger).divide(20, 1);
} catch (err) {
    new logger.log(err.message);
}
// lesson end [19]
