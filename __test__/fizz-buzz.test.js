const fizz_buzz = require('../fizz_buzz');

describe('Mengecek nilai FizzBuzz', () => {
    test('mengecek angka 3 bernilai fizz', () => {
        expect(fizz_buzz(3)).toBe("Fizz")
    });

    test('mengecek angka 3 bernilai buzz', () => {
        expect(fizz_buzz(5)).toBe("Buzz")
    });

    test('mengecek angka 1 - 100', () => {
        for(let i=1 ; i<=100 ; i++){
            if(i%3 === 0 && i%5 === 0) return expect(fizz_buzz(i)).toBe("FizzBuzz")

            if(i%3 === 0) return expect(fizz_buzz(i)).toBe("Fizz")
            if(i%35 === 0) return expect(fizz_buzz(i)).toBe("Buzz")
        }
    });
});