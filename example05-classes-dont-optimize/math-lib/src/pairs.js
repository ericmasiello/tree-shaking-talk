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

export default Pairs;
