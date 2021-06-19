/*
Remover valores duplicados do array.
Dado o array abaixo o resultado esperado é: [1,2,3,5,4]
*/

const values = [1, 2, 1, 3, 3, 5, 4, 1]
let hash = {}

for (const value of values) {
    hash[value] = value
}

let array = []
for (let index = 0; index < values.length; index++) {
    if (!array.includes(values[index])) {
        array.push(values[index])
    }
}

/**Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the *ith* kid has.

For each kid check if there is a way to distribute extraCandies among the kids such 
that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies. 
*/

const candies = [4, 2, 1, 1, 2]
const extraCandies = 1

console.log(candies.map((candie) => candie > 1))
