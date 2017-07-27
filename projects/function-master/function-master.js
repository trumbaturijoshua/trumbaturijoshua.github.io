// 1. objectValues test
function objectValues(data) {
    var collection = [];
    for (var key in data){
        collection.push(data[key])
    }
    return collection;
}

// 2. keysToString test
function keysToString(data) {
    var collection = [];
    for (var keys in data) {
        collection.push(keys);
    }
    return collection.join(" ");
}

// 3. valuesToString test
function valuesToString(data) {
    var collection = [];
    for (var key in data){
        var test = typeof "a";
        if (typeof data[key] === test){
            collection.push(data[key])
        }
    }
    return collection.join(" ");
}

// 4. arrayOrObject test
function arrayOrObject(test) {
    if (Array.isArray(test)) {
        return 'array';
    }
    else if (typeof test === 'object') {
        return 'object';
    }
}

// 5. capitalizeWord test
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// 6. capitalizeAllWords test
function capitalizeAllWords(string) {
    var collection = [];
}

// 7. welcomeMessage test
function welcomeMessage(object) {
    for (var name in object) {
    return "Welcome " + (object[name].charAt(0).toUpperCase() + name.slice(1)) + "!"
    }
}

// 8. profileInfo test
function profileInfo(object) {
    var collection = [];
    for (var key in object) {
        collection.push(object[key])
    }
    for (var i = 0; i < collection.length; i++) {
        collection[i].charAt(0).toUpperCase() + collection[i].slice(1)
    }
    return collection[0] + ' is a ' + collection[1];
}

// 9. maybeNoises test
function maybeNoises(object) {
    var collection = [];
    for (var key in object){
        collection.push(object[key]);
    }
    if (collection !== null) {
        return collection.join(" ");
    } else {
      return 'there are no noises';
      }
}

// 10. hasWord test
function hasWord(string, word) {
    var collection = string.split(' ');
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] === word) {
            return true;
        }
    } return false;
}

// 11. addFriend test
function addFriend(object, name) {
    for (var friends in object) {
        return object[friends] = name;
    }
}