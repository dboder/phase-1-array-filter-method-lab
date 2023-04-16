// Code your solution here

function softStringMatch(element, match ) {
    return (element.toUpperCase() === match.toUpperCase());
}
function findMatching(arr,str) {
    const newCollection = [];
    for (const driver of arr) {
        if (softStringMatch(driver,str)) {
            newCollection.push(driver);
        }
    }
    return newCollection;
}

function fuzzyMatch(arr,match) {
    const newCollection = [];
    for (const driver of arr) {
        if (driver.slice(0,match.length) === match) {
            newCollection.push(driver);
        }
    }
    return newCollection;
}

function matchName(arr,match) {
    const newCollection = [];
    for (const driver of arr) {
        if (driver.name.toUpperCase() === match.toUpperCase()) {
            newCollection.push(driver);
        }
    }
    return newCollection;
}

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// console.log(findMatching(drivers,'bobby'));