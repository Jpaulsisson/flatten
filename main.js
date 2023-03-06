
const array2 = [ 1, 2, [3, 4], [5, 6, 7, 8], 9];
const nullArray = [1, 2, [3, null], 5, 6];

function flattenWithFlat(array) {
    const flatArray = array.flat(1);
    console.log(flatArray);
    return flatArray;
}

flattenWithFlat(array2);
flattenWithFlat(nullArray);

function flattenWithIfElse(array) {
    let flatArray = [];
    for (let item of array) {
        if(item[0]) {
            for (let i = 0; i < item.length; i++) {
                flatArray.push(item[i]);
            }
        } else if (item === null || item === undefined) {
                flatArray.push(item);
        } else {
            flatArray.push(item);
        }
    }
    console.log(flatArray);
    return flatArray;
};

flattenWithIfElse(array2);
flattenWithIfElse(nullArray);

function flattenWithRecursion(array, flatArray = []) {
    array.forEach(element => {
        typeof element !== 'object' ? flatArray.push(element) : flattenWithRecursion(element, flatArray);
    });
    console.log(flatArray);
    return flatArray;
}

flattenWithRecursion(array2);
