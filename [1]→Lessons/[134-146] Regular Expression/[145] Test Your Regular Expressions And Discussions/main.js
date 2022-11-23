/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z] // display a to z small
  [^a-z] // not a to z small
  [A-Z] // display A to Z Capital 
  [^A-Z] // not A to Z Capital
  [abc] // display a b c
  [^abc] // not a b c

  ---------------------------

    Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.

  --------------------------

    Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)

  --------------------------

  Quantifiers
  n+    => ONe Or More
  n*    -> zero or more
  n?    +> zero or one

  -----------------------------

  Quantifiers 2
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x

  ----------------------

  Quantifiers 3
  $ => End With Something
  ^ => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

  -----------------------

  - replace
  - replaceAll

  ----------------------


*/

let str = "B=Cs4+e6f@9:'gh"

console.log(str.match(/./ig));
console.log(str.match(/[A-Z]/ig)); // A To Z Capital Or Small
console.log(str.match(/[^A-Z]/ig)); // not A To Z Capital Or Small
console.log(str.match(/[a-z]/ig)); // A To Z Capital Or Small
console.log(str.match(/[^a-z]/ig)); // not A To Z Capital Or Small
console.log(str.match(/[A-Za-z]/g)); // A To Z Capital
console.log(str.match(/[^A-Za-z]/g)); // not A To Z Capital
console.log(str.match(/[^a-z]/g)); // not a To z Small
console.log(str.match(/[A-Z]/g)); // A To Z Capital
console.log(str.match(/[^A-Z]/g)); // not A To Z Capital
