let oneEuroIs = {
    "USD": 1.07,
    "GBP": 0.87,
    "JPY": 156.5,
};

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };