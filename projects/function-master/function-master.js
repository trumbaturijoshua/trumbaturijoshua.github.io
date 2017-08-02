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
    var collection = string.split(' ');
     for (var i = 0; i < collection.length; i++) {
         collection[i] = collection[i].charAt(0).toUpperCase() + collection[i].substring(1);
     }
    return collection.join(' ');
}

// 7. welcomeMessage test
function welcomeMessage(object) {
        var capitalizeMe = object.name.charAt(0).toUpperCase() + object.name.slice(1)
        return "Welcome " + capitalizeMe + "!"
}

// 8. profileInfo test
function profileInfo(object) {
    var capitalizeName = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    var capitalizeSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1)
    return capitalizeName + ' is a ' + capitalizeSpecies;
}

// 9. maybeNoises test
function maybeNoises(object) {
    if (object.hasOwnProperty('noises') === true && object.noises.length > 0) {
        return object.noises.join(' ');
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
function addFriend(name, object) {
    object.friends.push(name);
    return object;
}


// 12. isFriend test
function isFriend(name, object) {
    if (name === object.friends && object.hasOwnProperty('friends') === true && object.friends.length > 0) {
        return true;
    } return false;
}

// 13. nonFriends test
function nonFriends(name, list) {
    var notFriends = [];
    for (var i = 0; i < list.length; i++) {
        if (list !== null && name.friends !== list[i]) {
            notFriends.push(list[i]);
        }
    }
    return notFriends;
}

// 14. updateObject test
function updateObject(object, key, value) {
    if (object[key] !== null) {
        object[key] = value
    } else if (object[key] === null) {
        object[key] = value
    } return object;
}

// 15. removeProperties test
function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    } return object;
}

// 16. dedup test
function dedup(data) {
    var duplicates = [];
    var newArray = [];
    for (var i = 0; i < data.length; i++) {
        if (!(data[i] in duplicates)) {
            newArray.push(data[i]);
            duplicates[data[i]] = true;
        }
    }
    return newArray;
}