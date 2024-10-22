"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const object1 = { name: "Anna" };
  let object2 = { name: "Anna" };

  object1.name = "Smith";
  object2.name = "Smith";

  //object1 = { name: "Smith" }; const cannot be changed
  object2 = { name: "Anna Smith" };
};

module.exports = { fn };
