// convert radian to degree 

function radianToDegree(radian) {
    if (typeof (radian) !== "number") {
        return "Please give us a valid input";
    }
    else {
        let pi = Math.PI;
        let degreeConvart = radian * 180 / pi;
        let fixedValue = degreeConvart.toFixed(2);
        let degree = parseFloat(fixedValue);

        return degree;
    }
}

console.log(radianToDegree(199));

// check javascript file

function isJavaScriptFile(String) {
    if (typeof (String) !== 'string') {
        return "Plase provide a valid input";
    }
    else {
        if (String.endsWith(".js")) {
            return true;
        }
        return false;
    }
}

console.log(isJavaScriptFile("app.js"));

// calculate oil price

function oilPrice(dieselQn, petrolQn, octenQn) {
    if (typeof(dieselQn,petrolQn,octenQn) !== "number") {
        return "Please provide number as input!!"
    }
    else {
        let dieselRate = 114;
        let petrolRate = 130;
        let octenRate = 135;

        let diselPrice = dieselQn * dieselRate;
        let petrolPrice = petrolQn * petrolRate;
        let octenPrice = octenQn * octenRate;

        const totalPrice = diselPrice + petrolPrice + octenPrice;

        return totalPrice;
    }


}

console.log(oilPrice(1,2,3));

// count public bus fare

function publicBusFare(totalPerson) {
    if (typeof(totalPerson) != "number") {
        return "Please provide a valid number!!"
    }
    else {
        let microBusraider = totalPerson % 50;
        let publicBusraider = microBusraider % 11;

        let publicBusFare = publicBusraider * 250;


        return publicBusFare;
    }

    

}

console.log(publicBusFare(45));

// check two object if they best friend or not

function isBestFriend(object1, object2) {
    if (typeof (object1, object2) !== "object") {
        return "Please provide an object";
    }
    else {
        if (object1.name == object2.friend && object2.name == object1.friend) {
            return true;
        }
        return false;
    }
}
const person1 = { name: "doe", friend: "alex" };
const person2 = { name: "john", friend: "doe" };
console.log(isBestFriend(person1, person2))



