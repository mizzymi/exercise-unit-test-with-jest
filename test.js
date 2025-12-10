test("1 euro should be 1.07 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("0 euros should be 0 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(0)).toBe(0);
});

test("Conversion from USD to JPY with another amount", () => {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(5)).toBe(745.15);
});

test("0 USD should be 0 JPY", () => {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(0)).toBe(0);
});

test("Conversion from JPY to GBP with another amount", () => {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(500)).toBe(3.6);
});

test("0 JPY should be 0 GBP", () => {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(0)).toBe(0);
});

test("fromEuroToDollar should return a number", () => {
    const { fromEuroToDollar } = require('./app.js');
    const result = fromEuroToDollar(2);
    expect(typeof result).toBe("number");
});

test("fromDollarToYen should return a number", () => {
    const { fromDollarToYen } = require('./app.js');
    const result = fromDollarToYen(2);
    expect(typeof result).toBe("number");
});

test("fromYenToPound should return a number", () => {
    const { fromYenToPound } = require('./app.js');
    const result = fromYenToPound(200);
    expect(typeof result).toBe("number");
});
