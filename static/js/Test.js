class Test {
    constructor(name) {
        this.name = name;
        console.log(this.name+ ' was created');
    }

    show() {
        console.log(this.name + ' here!');
    }
}
module.exports = Test;