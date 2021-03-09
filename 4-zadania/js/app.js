const tableGenerator = {


    randomNumber(min,max) {
        return Math.random() * (max - min) + min;
    },

    generateIncTable(lng) {
return new Array(lng).fill(0).map((el, i) => i)
    },

    generateRandomTable(lng,min, max) {
        const table = [];
        for(let i = 0; i<lng, i++;) {
            table.push(this.randomNumber(min,max));
        }
    },





}





const randomNumber = tableGenerator.randomNumber(1,9)
console.log(randomNumber)


const randArr = tableGenerator.generateRandomTable(8, 3, 20);
console.log(randArr);
