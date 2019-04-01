class Pairs {
    constructor(a, b) {
        console.log('Pairs constructor!');
        this.a = a;
        this.b = b;
    }

    add() {
        console.log('Pairs add!');
        return this.a + this.b;
    }

    subtract() {
        console.log('Pairs subtract!');
        return this.a - this.b;
    }

    multiply() {
        console.log('Pairs multiply!');
        return this.a * this.b;
    }
}

Pairs.one = (a) => {
    console.log('Pairs static one!');
    return new Pairs(a, 1);;
};

Pairs.two = (a) => {
    console.log('Pairs static two!');
    return new Pairs(a, 2);;
};

module.exports = Pairs;
