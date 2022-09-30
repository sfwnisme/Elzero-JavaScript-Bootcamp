/* String Methods */
console.log("Hello"[4]); // o
console.log("Hello".charAt(4)); // o
console.log("Hello".concat(" ", "World")); // Hello World
console.log("Hello".startsWith("e")); // false
console.log("Hello".endsWith("o")); // true
console.log("Hello".includes("l")); // true
console.log("Hello".indexOf("e")); // 1
console.log("Hello".lastIndexOf("l")); // 3
console.log("Hello".repeat(3)); // HelloHelloHello
console.log("Hello".replace("llo", "y")); // Hey
console.log("Hello".search("o")); // o
console.log("Hello".slice(1, 3)); // el
console.log("Hello".split("")); // ["H","e","l","l","o"]
console.log("Hello".substring(2, 4)); // ll => index, index
console.log("Hello".substr(2, 2)); // ll => index, length
console.log("Hello".toLowerCase()); // hello
console.log("Hello".toUpperCase()); // HELLO
console.log(" Hello ".trim()); // Hello
console.log(" Hello ".trimEnd()); //" Hello"
console.log(" Hello ".trimStart()); // "Hello "
