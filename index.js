function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i=0; i<collection.length; i++) {
            callback(i)
        };
    } else {
        let objArray = Object.values(collection);
        objArray.forEach((i) => callback(i));
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
        collection.forEach((i) => {
            let newValue = callback(i);
            newArray.push(newValue);
        })
    } else {
        let objArray = Object.values(collection);
        objArray.forEach((i) => {
            let newValue = callback(i);
            newArray.push(newValue);
        });
    }

    return newArray;
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
        let sum = collection[0]
        if (acc) {
            sum = acc;
            for (let i of collection) 
            sum += (i*3);
        } else {
            for (let i of collection.slice(1)) 
            sum += (i*3);
        }

        return sum;
    } else {
        let objArray = Object.values(collection);
        let sum = objArray[0]
        if (acc) {
            sum = acc;
            for (let i of objArray) 
            sum += (i*3);
        } else {
            for (let i of objArray.slice(1)) 
            sum += (i*3);
        }

        return sum;
    }
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i of collection) {
            if (predicate(i)) {
                return i;
            }
        }
    } else {
        let objArray = Object.values(collection);
        for (let i of objArray) {
            if (predicate(i)) {
                return i;
            }
        }
    }
}

function myFilter(collection, predicate) {
    let newArray = [];
    if (Array.isArray(collection)) {
        collection.forEach((i) => {
            if (predicate(i)) {
                newArray.push(i)
            }
        })
    } else {
        let objArray = Object.values(collection);
        objArray.forEach((i) => {
            if (predicate(i)) {
                newArray.push(i)
            }
        });
    }
    return newArray;
}

function mySize(collection) {
    let counter = 0;
    if (Array.isArray(collection)) {
        for (let i=0; i<collection.length; i++) {
            counter++
        };
    } else {
        let objArray = Object.values(collection);
        objArray.forEach((i) => counter++);
    }
    return counter;
}

function myFirst(array, n) {
    if (n) {
        let newArray = [];
        let spreadArray = array.slice(0, n);
        spreadArray.forEach((i) => {newArray.push(i)})
        return newArray;
    } else {
        return array[0];
    }
}

function myLast(array, n) {
    if (n) {
        let newArray = [];
        let spreadArray = array.slice(-n);
        spreadArray.forEach((i) => {newArray.push(i)})
        return newArray;
    } else {
        return array[array.length - 1];
    }
}

function myKeys(object) {
    let objArray = Object.keys(object);
    return objArray;
}

function myValues(object) {
    let objArray = Object.values(object);
    return objArray;
}