const fizz_buzz = (number) => {
    let result = [];

    if(number % 3 === 0) result.push("Fizz");
    if(number % 5 === 0) result.push("Buzz");

    return result.join('')
}

for(let i=1;i<=100;i++){
    if(i%3 === 0 || i%5 === 0){
        console.log(`Angka ${i} bernilai ${fizz_buzz(i)}`)
    }
}

module.exports = fizz_buzz