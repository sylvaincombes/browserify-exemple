// this vars are not accessible from outside
var count = 0,
    enabled = false;

// This object will be exposed to the world
module.exports = {
    say: function(what) {
        console.log(what);
        if(typeof document !== "undefined" && document) {
            document.write(what);
        }
        count++;
    },

    sayCount: function(verbose) {
        if(typeof verbose == "undefined" || verbose) {
            console.log('I have been used ' + count + (count > 1 ? ' times' : ' time'));
        } else {
            return count;
        }
    }
};
