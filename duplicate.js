const arr = [1, 2, 3, 4, 5, 6, 10, 2, 5, 1];

const set = new Set(arr);

const duplicateIntegers = arr.filter(duplicateInteger => {
    if (set.has(duplicateInteger)) {
        set.delete(duplicateInteger);
    } else {
        return duplicateInteger;
    }
});

console.log(duplicateIntegers);
