// require a local module
var talker = require('./talker.js');

talker.say('Hello ');
talker.sayCount();
talker.say('World ');
talker.sayCount();
talker.say('!');
talker.sayCount();

// example with an npm module
var slugify = require("underscore.string/slugify");

var print = console.log.bind(console, '>');

var testString1 = 'Hostels in Rio de Janeiro from $9.5/night',
    testString2 = 'à l\'ouest rien de nouveau',
    testString3 = 'une écharpe dorée et un œuf';

print(slugify(testString1));
print(slugify(testString2));
print(slugify(testString3));

if (typeof document !== "undefined" && document) {
    var pre = document.createElement('pre');
    pre.innerHTML += ((testString1)) + "\n";
    pre.innerHTML += (slugify(testString1)) + "\n";
    pre.innerHTML += "\n";
    pre.innerHTML += (testString2) + "\n";
    pre.innerHTML += slugify(testString2) + "\n";
    pre.innerHTML += "\n";
    pre.innerHTML += (testString3) + "\n";
    pre.innerHTML += slugify(testString3) + "\n";
    document.body.appendChild(pre);
}
