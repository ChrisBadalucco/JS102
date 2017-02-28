// part 1 exercise
var animal = {};
animal.username = 'Pooh';
animal['tagline'] = 'Oh bother';

var noises = [];
animal.noises = noises;

var count = 0;
for (var key in animal) {
    count++;
    if (key === 'username') {
        console.log('Hi my name is ' + animal[key]);
    } else if (key === 'tagline') {
        console.log('I like to say ' + animal[key]);
    }
}

// part 2 exercise - arrays
var noiseArray = ['honk'];

noiseArray.unshift('beep');
noiseArray.push('moo');

noiseArray[noiseArray.length] = 'bahh';

animal.noises = noiseArray;

// part 2 exercise - collections
var animals = [];
animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

animals.unshift(quackers);

var snek = { username: 'Snek', tagline: 'Slitherin', noises: ['hiss', 'chirp', 'growl'] };
var thumper = { username: 'Thumper', tagline: 'Thumpin', noises: ['thump', 'gnaw', 'meh'] };

animals.push(snek, thumper);


// part 3 exercise - functions
var AnimalTestUser = function (username) {
    var animalTestUser = {
        username: username
    };
    if (arguments.length > 1) {
        var otherArgs = [];
        // purposefully skip first arg
        for (var i = 1; i < arguments.length; i++) {
            otherArgs.push(arguments[i]);
        }
        animalTestUser.otherArgs = otherArgs;
    }
    return animalTestUser;
}

var AnimalCreator = function (username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
}

var addFriend = function (original, friend) {
    // part 4
    // original.friends.push(friend);

    // part 5
    original.friends.push(friend.username);
}

// var cloud = {
//     username: 'Cloud',
//     species: 'sheep',
//     tagline: 'You can count on me!',
//     noises: ['baahhh', 'arrgg', 'chewchewchew'],
//     friends: []
// };
var cloud = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

// var zeny = {
//     username: 'Zeny',
//     species: 'cow',
//     tagline: 'Eat chicken!',
//     noises: ['moo', 'chewchewchew'],
//     friends: []
// };
var zeny = AnimalCreator('Zeny', 'cow', 'Eat chicken!', ['moo', 'chewchewchew']);

// var cottonball = {
//     username: 'CottonBall',
//     species: 'bunny',
//     tagline: 'Thump thump!',
//     noises: ['gnaw', 'nomnom'],
//     friends: []
// };
var cottonball = AnimalCreator('CottonBall', 'bunny', 'Thump thump!', ['gnaw', 'nomnom']);


addFriend(cloud, zeny);
addFriend(cloud, cottonball);
// addFriend(zeny, cottonball);

var myFarm = [cloud, zeny, cottonball];

var addMatchesArray = function (farm) {
    for (var i = 0; i < farm.length; i++) {
        farm[i].matches = [];
    }
}

var giveMatches = function (farmArr) {
    if (farmArr && farmArr.length > 0) {
        farmArr.forEach(function(item) {
            if (item.friends.length > 0) {
                item.matches.push(item.friends[0]);
            }
        });
    }
}

// part 4 exercise - nested data

/* TIL - Nested Box notation
var box = { innerBox: {} };
box['innerBox']['asdf'] = true; // { innerBox: { asdf: true } }
*/

/* all objects are passed by reference. only primitives passed by value */

var friends = [];
friends.push(animals[0].username);
friends.push(animals[1].username);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;

// TIL - Object.keys(objectName)

relationships.matches.push(relationships.friends[0]);

animals.forEach(function(animal) {
    animal.relationships = relationships;
});