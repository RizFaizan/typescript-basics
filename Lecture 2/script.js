//! Object 👇
var person = {
    firstName: "Faizan Ahmad",
    age: 19,
    familyMembers: {
        numberOfFamilyMembers: 5,
        youngerOne: "Faizan Ahmad"
    }
};
// console.log(person.familyMembers.youngerOne);
//! Array 👇
var favouriteMovie;
favouriteMovie = ["Better days", "Big girls don't cry"];
// console.log(favouriteMovie[0]);
//! Tuple 👇  If I wanted to add one more property like array or
//  anything, then I tuple, means tuple is an array of fixed length
// and then we assign the type to only that array like '[number , string]'.
var person2 = {
    name: "Faizan ahmad",
    age: 19,
    married: false, // Now if I wanted to add array but the properties of that array are different then:
    product: [1, "Macbook M3"]
};
console.log(person2.product[1]);
