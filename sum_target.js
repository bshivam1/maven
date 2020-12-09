// Execute using node sum_target 
function sum_target(numArray, target_num) {

    // creating new map
    const indices = new Map();

    // iterating array
    for (let index = 0; index < numArray.length; index++) {

        // compute difference 
        const difference = target_num - numArray[index];

        if (indices.has(difference)) {
            // stop iteration if we have difference 
            return [indices.get(difference), index];
        }

        indices.set(numArray[index], index);
    }
};

// calling example

console.log(sum_target([1,2,3,4,5,6],6));
