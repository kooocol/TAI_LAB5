class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(obj: Complex) : Complex{
        return new Complex(this.re + obj.re, this.im + obj.im);
    }

    substract(obj: Complex) : Complex{
        return new Complex(this.re - obj.re, this.im - obj.im);
    }
    modul() : number{
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    }
    toString() {
        console.log(this.re + "+" + this.im + "i");
    }
}

let x1 = new Complex(2, 4);
let x2 = new Complex(3, 5);
let x3 = x1.add(x2);
console.log(x3);
let x4 = x3.substract(x1);
console.log(x4);
let x5 = x4.modul();
console.log(x5);