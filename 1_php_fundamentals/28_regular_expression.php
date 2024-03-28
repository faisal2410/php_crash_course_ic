<?php

// ✅ Regular Expression

// A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.


// ✅Patterns;

// . = matches any single character except a new line
// Ex: /./ matches anything that has a single character

// ^ = matches the beginning of string / excludes characters
// Ex: /^PH/ matches any string that starts with PH

// $ = matches pattern at the end of the string
// Ex: /com$/ matches arefin.com, google.com etc.

// * = matches any zero (0) or more characters
// Ex: /com*/ matches computer, communication etc.

// + = requires preceding character(s) appear at least one
// Ex: /yah+oo/ matches yahoo

// \ = used to escape meta characters
// Ex: /yahoo\.com/ treats the dot as a literal value

// […] = character class
// Ex: /[abc]/ matches abc

// | = alternate word search

// a-z = matches lowercase letters
// Ex: /a-z/ matches cool, happy etc.

// A-Z = matches uppercase letters
// Ex: /A-Z/ matches WHAT, WHY etc.

// 0-9 = matches any number between 0 and 9
// Ex: /0-4/ matches 0,1,2,3,4


// ✅ Functions

// preg_match = Returns 1 if the pattern was found in the string and 0 if not

// preg_replace = Returns a new string where matched patterns have been replaced with another string

// ✅ Tool

// https://regex101.com/



// ✅ Code Examples

// 👉index.php

// <?php
// $str = "arefindev@gmail.com";
// if(preg_match("/^[a-zA-Z0-9]+@+[0-9a-zA-Z]+\.[a-zA-Z]{2,5}$/", $str)) {
//     echo 'Email is valid';
// } else {
//     echo 'Email is not valid';
// }

// $str = "Bangladesh is a nice country. Bangladesh is a very good country.";
// echo preg_replace("/bangladesh/i","USA",$str);

// ?>



