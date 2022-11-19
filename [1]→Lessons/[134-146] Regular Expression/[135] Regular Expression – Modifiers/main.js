/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/


let myString = "Hello Elzero Web School I Love elzero";

// /pattern/ => search
let regex = /elzero/;
console.log(myString.match(regex));

// i => case-insensitive
let regex0 = /elzero/i;
console.log(myString.match(regex0));

// g => global
let regex1 = /elzero/ig;
console.log(myString.match(regex1));