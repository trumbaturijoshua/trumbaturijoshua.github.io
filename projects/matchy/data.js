/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var animal = {};
    animal.species = 'dog';
    animal['name'] = 'Pique';
    animal.noises = [];
    console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var noises = [];
    noises[0] = 'whine';
    noises.push('bark');
    noises.unshift('growl');
    noises[noises.length] = 'pant';
    console.log(noises.length);
    console.log(noises[noises.length - 1]);
    console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

    animal['noises'] = noises;
    animal['noises'].push('yipe!')
    console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var animals = [];
    animals.push(animal);
    var duck = {};
    duck.species = "duck";
    duck.name = 'Jerome';
    duck.noises = [];
    duck['noises'].push('quack', 'honk', 'sneeze', 'woosh');
    animals.push(duck);
    var hampster = {};
    hampster.species = 'hampster';
    hampster.name = 'Donny';
    hampster.noises = [];
    hampster['noises'].push('squeak', 'nibble', 'shuffle', 'wheel turn');
    animals.push(hampster);
    var dog = {};
    dog.species = 'dog';
    dog.name = 'Buddy';
    dog.noises = [];
    dog['noises'].push('bark', 'woof', 'growl', 'pant');
    animals.push(dog);
    console.log(animals);
    console.log(animals)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var friends = [];
    // An array can be used to easily add and remove friends for the animals
    var friendsList = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return animals[Math.floor(Math.random() * (max - min)) + min].name;
        }
    friends.push(friendsList(0, animals.length)); //if there's a problem come back here
    console.log(friends);
    dog.friends = friends;

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
