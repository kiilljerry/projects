"use strict";

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  "Anna Smith": "+380932861636",
  "Yuki Wu": "+380672630033",
  "Pavlo Kovalenko": "+380954727714",
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
