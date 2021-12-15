"use strict";
const adder = (a, b) => (b == 0) ? a : adder(a ^ b, (a & b) << 1);
