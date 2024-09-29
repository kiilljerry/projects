// exercise 1

function inc(n) {
    return n + 1;
}

const a = 5
const b  = inc(a)
console.dir({ a, b })

// exercise 2

function inc2(num) {
    num.n += 1;
}

const obj = { n: 5};
inc2(obj);
console.dir(obj)

// exercise 3.1

const arr = [ true, 'apple', 6, 70, -300, 'orange', false, true, 'grape', 76];
const hash = { boolean: 0, string: 0, number: 0};
for (const item of arr) {
    hash[typeof item] += 1;
}
console.dir(hash)

// exercise 3.2

const hash1 = {};

for (const item of arr) {
    const type = typeof item;
    if (hash1[type]) {
        hash1[type] += 1;
    } else {
        hash1[type] = 1
    }
}

console.dir(hash1)