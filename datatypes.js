// Primitive
// Number
// 10, 10.5
// String
// 'This is string' + 'This is string'
// Boolean
// true, false
// undefined
// missing data
// null
// data does not exist

// Object
// Array
// Object
// Function

// ******Number******
var a = 10;
var b = 10.003;
var ab = Number('12')
var abc = Number('12.22')
var hex = 0xff;
var oct =0o760;
console.log(hex, oct)

// console.log(Number.parseFloat(ab));
// console.log(Number.parseInt(abc));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(1/0); Infinity
// console.log('abcd' * 1); NaN

// ******String******
var str = 'string';
var str2 = "string";
var str3 = `string`;
var str4 = String('string');
var str5 = String(123);
var str6 = String(123.012);
console.log(str4, str5);

// ******Boolean******
var bln = true;
var bln2 = false;
var bln3 = Boolean(true);
var bln4 = Boolean(false);
console.log(bln3, bln4);

// ******Null & Undefined******
var data;
var data2 = null;
console.log(data, data2);
