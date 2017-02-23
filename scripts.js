// part 1 exercise
var animal = {};
animal.username = 'Pooh';
animal['tagline'] = 'Oh bother';

var noises = [];
animal.noises = noises;

var count = 0;
for (var key in animal) {
    count ++;
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
