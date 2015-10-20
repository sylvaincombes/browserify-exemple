(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./talker.js":2,"underscore.string/slugify":8}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){

var makeString = require('./helper/makeString');

var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
    to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";

from += from.toUpperCase();
to += to.toUpperCase();

to = to.split("");

// for tokens requireing multitoken output
from += "ß";
to.push('ss');


module.exports = function cleanDiacritics(str) {
    return makeString(str).replace(/.{1}/g, function(c){
      var index = from.indexOf(c);
      return index === -1 ? c : to[index];
  });
};

},{"./helper/makeString":7}],4:[function(require,module,exports){
var trim = require('./trim');

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

},{"./trim":9}],5:[function(require,module,exports){
var escapeRegExp = require('./escapeRegExp');

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};

},{"./escapeRegExp":6}],6:[function(require,module,exports){
var makeString = require('./makeString');

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

},{"./makeString":7}],7:[function(require,module,exports){
/**
 * Ensure some object is a coerced to a string
 **/
module.exports = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};

},{}],8:[function(require,module,exports){
var makeString = require('./helper/makeString');
var defaultToWhiteSpace = require('./helper/defaultToWhiteSpace');
var trim = require('./trim');
var dasherize = require('./dasherize');
var cleanDiacritics = require("./cleanDiacritics");

module.exports = function slugify(str) {
  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

},{"./cleanDiacritics":3,"./dasherize":4,"./helper/defaultToWhiteSpace":5,"./helper/makeString":7,"./trim":9}],9:[function(require,module,exports){
var makeString = require('./helper/makeString');
var defaultToWhiteSpace = require('./helper/defaultToWhiteSpace');
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

},{"./helper/defaultToWhiteSpace":5,"./helper/makeString":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvc3JjL2FwcC5qcyIsImFzc2V0cy9qcy9zcmMvdGFsa2VyLmpzIiwibm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUuc3RyaW5nL2NsZWFuRGlhY3JpdGljcy5qcyIsIm5vZGVfbW9kdWxlcy91bmRlcnNjb3JlLnN0cmluZy9kYXNoZXJpemUuanMiLCJub2RlX21vZHVsZXMvdW5kZXJzY29yZS5zdHJpbmcvaGVscGVyL2RlZmF1bHRUb1doaXRlU3BhY2UuanMiLCJub2RlX21vZHVsZXMvdW5kZXJzY29yZS5zdHJpbmcvaGVscGVyL2VzY2FwZVJlZ0V4cC5qcyIsIm5vZGVfbW9kdWxlcy91bmRlcnNjb3JlLnN0cmluZy9oZWxwZXIvbWFrZVN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy91bmRlcnNjb3JlLnN0cmluZy9zbHVnaWZ5LmpzIiwibm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUuc3RyaW5nL3RyaW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gcmVxdWlyZSBhIGxvY2FsIG1vZHVsZVxudmFyIHRhbGtlciA9IHJlcXVpcmUoJy4vdGFsa2VyLmpzJyk7XG5cbnRhbGtlci5zYXkoJ0hlbGxvICcpO1xudGFsa2VyLnNheUNvdW50KCk7XG50YWxrZXIuc2F5KCdXb3JsZCAnKTtcbnRhbGtlci5zYXlDb3VudCgpO1xudGFsa2VyLnNheSgnIScpO1xudGFsa2VyLnNheUNvdW50KCk7XG5cbi8vIGV4YW1wbGUgd2l0aCBhbiBucG0gbW9kdWxlXG52YXIgc2x1Z2lmeSA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlLnN0cmluZy9zbHVnaWZ5XCIpO1xuXG52YXIgcHJpbnQgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICc+Jyk7XG5cbnZhciB0ZXN0U3RyaW5nMSA9ICdIb3N0ZWxzIGluIFJpbyBkZSBKYW5laXJvIGZyb20gJDkuNS9uaWdodCcsXG4gICAgdGVzdFN0cmluZzIgPSAnw6AgbFxcJ291ZXN0IHJpZW4gZGUgbm91dmVhdScsXG4gICAgdGVzdFN0cmluZzMgPSAndW5lIMOpY2hhcnBlIGRvcsOpZSBldCB1biDFk3VmJztcblxucHJpbnQoc2x1Z2lmeSh0ZXN0U3RyaW5nMSkpO1xucHJpbnQoc2x1Z2lmeSh0ZXN0U3RyaW5nMikpO1xucHJpbnQoc2x1Z2lmeSh0ZXN0U3RyaW5nMykpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50KSB7XG4gICAgdmFyIHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIHByZS5pbm5lckhUTUwgKz0gKCh0ZXN0U3RyaW5nMSkpICsgXCJcXG5cIjtcbiAgICBwcmUuaW5uZXJIVE1MICs9IChzbHVnaWZ5KHRlc3RTdHJpbmcxKSkgKyBcIlxcblwiO1xuICAgIHByZS5pbm5lckhUTUwgKz0gXCJcXG5cIjtcbiAgICBwcmUuaW5uZXJIVE1MICs9ICh0ZXN0U3RyaW5nMikgKyBcIlxcblwiO1xuICAgIHByZS5pbm5lckhUTUwgKz0gc2x1Z2lmeSh0ZXN0U3RyaW5nMikgKyBcIlxcblwiO1xuICAgIHByZS5pbm5lckhUTUwgKz0gXCJcXG5cIjtcbiAgICBwcmUuaW5uZXJIVE1MICs9ICh0ZXN0U3RyaW5nMykgKyBcIlxcblwiO1xuICAgIHByZS5pbm5lckhUTUwgKz0gc2x1Z2lmeSh0ZXN0U3RyaW5nMykgKyBcIlxcblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJlKTtcbn1cbiIsIi8vIHRoaXMgdmFycyBhcmUgbm90IGFjY2Vzc2libGUgZnJvbSBvdXRzaWRlXG52YXIgY291bnQgPSAwLFxuICAgIGVuYWJsZWQgPSBmYWxzZTtcblxuLy8gVGhpcyBvYmplY3Qgd2lsbCBiZSBleHBvc2VkIHRvIHRoZSB3b3JsZFxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2F5OiBmdW5jdGlvbih3aGF0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdoYXQpO1xuICAgICAgICBpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKHdoYXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgfSxcblxuICAgIHNheUNvdW50OiBmdW5jdGlvbih2ZXJib3NlKSB7XG4gICAgICAgIGlmKHR5cGVvZiB2ZXJib3NlID09IFwidW5kZWZpbmVkXCIgfHwgdmVyYm9zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0kgaGF2ZSBiZWVuIHVzZWQgJyArIGNvdW50ICsgKGNvdW50ID4gMSA/ICcgdGltZXMnIDogJyB0aW1lJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlxudmFyIG1ha2VTdHJpbmcgPSByZXF1aXJlKCcuL2hlbHBlci9tYWtlU3RyaW5nJyk7XG5cbnZhciBmcm9tICA9IFwixIXDoMOhw6TDosOjw6XDpsSDxIfEjcSJxJnDqMOpw6vDqsSdxKXDrMOtw6/DrsS1xYLEvsWExYjDssOzw7bFkcO0w7XDsMO4xZvImcWhxZ3Fpcibxa3DucO6w7zFscO7w7HDv8O9w6fFvMW6xb5cIixcbiAgICB0byAgICA9IFwiYWFhYWFhYWFhY2NjZWVlZWVnaGlpaWlqbGxubm9vb29vb29vc3Nzc3R0dXV1dXV1bnl5Y3p6elwiO1xuXG5mcm9tICs9IGZyb20udG9VcHBlckNhc2UoKTtcbnRvICs9IHRvLnRvVXBwZXJDYXNlKCk7XG5cbnRvID0gdG8uc3BsaXQoXCJcIik7XG5cbi8vIGZvciB0b2tlbnMgcmVxdWlyZWluZyBtdWx0aXRva2VuIG91dHB1dFxuZnJvbSArPSBcIsOfXCI7XG50by5wdXNoKCdzcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2xlYW5EaWFjcml0aWNzKHN0cikge1xuICAgIHJldHVybiBtYWtlU3RyaW5nKHN0cikucmVwbGFjZSgvLnsxfS9nLCBmdW5jdGlvbihjKXtcbiAgICAgIHZhciBpbmRleCA9IGZyb20uaW5kZXhPZihjKTtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyBjIDogdG9baW5kZXhdO1xuICB9KTtcbn07XG4iLCJ2YXIgdHJpbSA9IHJlcXVpcmUoJy4vdHJpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRhc2hlcml6ZShzdHIpIHtcbiAgcmV0dXJuIHRyaW0oc3RyKS5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKS5yZXBsYWNlKC9bLV9cXHNdKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59O1xuIiwidmFyIGVzY2FwZVJlZ0V4cCA9IHJlcXVpcmUoJy4vZXNjYXBlUmVnRXhwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmYXVsdFRvV2hpdGVTcGFjZShjaGFyYWN0ZXJzKSB7XG4gIGlmIChjaGFyYWN0ZXJzID09IG51bGwpXG4gICAgcmV0dXJuICdcXFxccyc7XG4gIGVsc2UgaWYgKGNoYXJhY3RlcnMuc291cmNlKVxuICAgIHJldHVybiBjaGFyYWN0ZXJzLnNvdXJjZTtcbiAgZWxzZVxuICAgIHJldHVybiAnWycgKyBlc2NhcGVSZWdFeHAoY2hhcmFjdGVycykgKyAnXSc7XG59O1xuIiwidmFyIG1ha2VTdHJpbmcgPSByZXF1aXJlKCcuL21ha2VTdHJpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBtYWtlU3RyaW5nKHN0cikucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xufTtcbiIsIi8qKlxuICogRW5zdXJlIHNvbWUgb2JqZWN0IGlzIGEgY29lcmNlZCB0byBhIHN0cmluZ1xuICoqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYWtlU3RyaW5nKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiAnJztcbiAgcmV0dXJuICcnICsgb2JqZWN0O1xufTtcbiIsInZhciBtYWtlU3RyaW5nID0gcmVxdWlyZSgnLi9oZWxwZXIvbWFrZVN0cmluZycpO1xudmFyIGRlZmF1bHRUb1doaXRlU3BhY2UgPSByZXF1aXJlKCcuL2hlbHBlci9kZWZhdWx0VG9XaGl0ZVNwYWNlJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4vdHJpbScpO1xudmFyIGRhc2hlcml6ZSA9IHJlcXVpcmUoJy4vZGFzaGVyaXplJyk7XG52YXIgY2xlYW5EaWFjcml0aWNzID0gcmVxdWlyZShcIi4vY2xlYW5EaWFjcml0aWNzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNsdWdpZnkoc3RyKSB7XG4gIHJldHVybiB0cmltKGRhc2hlcml6ZShjbGVhbkRpYWNyaXRpY3Moc3RyKS5yZXBsYWNlKC9bXlxcd1xccy1dL2csICctJykudG9Mb3dlckNhc2UoKSksICctJyk7XG59O1xuIiwidmFyIG1ha2VTdHJpbmcgPSByZXF1aXJlKCcuL2hlbHBlci9tYWtlU3RyaW5nJyk7XG52YXIgZGVmYXVsdFRvV2hpdGVTcGFjZSA9IHJlcXVpcmUoJy4vaGVscGVyL2RlZmF1bHRUb1doaXRlU3BhY2UnKTtcbnZhciBuYXRpdmVUcmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyaW0oc3RyLCBjaGFyYWN0ZXJzKSB7XG4gIHN0ciA9IG1ha2VTdHJpbmcoc3RyKTtcbiAgaWYgKCFjaGFyYWN0ZXJzICYmIG5hdGl2ZVRyaW0pIHJldHVybiBuYXRpdmVUcmltLmNhbGwoc3RyKTtcbiAgY2hhcmFjdGVycyA9IGRlZmF1bHRUb1doaXRlU3BhY2UoY2hhcmFjdGVycyk7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdeJyArIGNoYXJhY3RlcnMgKyAnK3wnICsgY2hhcmFjdGVycyArICcrJCcsICdnJyksICcnKTtcbn07XG4iXX0=
