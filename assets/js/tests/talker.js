var test = require('prova'),
    talker = require('../src/talker.js');

test('say test', function(t){
    t.equal(talker.sayCount(false), 0);
    talker.say('I love to talk');
    t.equal(talker.sayCount(false), 1);
    t.end();
});
