<?php

// ✅Supported Data Types


// String;
// Integer;
// Float;
// Boolean;
// Array;
// Object;
// Null;
// Resource;

//✅ String;

// A string is a sequence of characters.
// A string can be any text inside quotes.
// You can use single or double quotes.

// ✅Integer;

// Non-decimal number
// Range: -2,147,483,648 to 2,147,483,647 in 32 bit system
// Range -9223372036854775808 and 9223372036854775807 in 64 bit system.
// An integer must have at least one digit
// An integer must not have a decimal point
// An integer can be either positive or negative
// Integers can be specified in: decimal (base 10), hexadecimal (base 16), octal (base 8), or binary (base 2) notation

// Predefined Constants:
// PHP_INT_MAX = The largest integer supported
// PHP_INT_MIN = The smallest integer supported
// PHP_INT_SIZE = The size of an integer in bytes

// Checking if type of variable is integer:
// is_int()
// is_integer()
// is_long()

// ✅Float;

// A float (floating point number) is a type of numerical value that can represent a real number with a decimal point
// Those are commonly used to represent values such as currency, scientific measurements, and other decimal-based values
// Can commonly store a value up to 1.7976931348623E+308 (platform dependent)
// Maximum precision of 14 digits

// Predefined Constants:
// PHP_FLOAT_MAX = Largest represent-able floating point number
// PHP_FLOAT_MIN = Smallest represent-able positive floating point number
// etc.

// Checking if type of variable is float:
// is_float()
// is_double()

//✅ Boolean;

// A Boolean represents two possible states: TRUE or FALSE.

// ✅Array;
// An array stores multiple values in one single variable.

// ✅Object;

// Classes and objects are the two main aspects of object-oriented programming.

// ✅Resource;

// The special resource type is not an actual data type.
// It is the storing of a reference to functions and resources external to PHP



// ✅Code Examples
// <?php
//$country = 'Bangladesh';
//$country = "Bangladesh";
//echo "Bangladesh is a nice country";
// $x = 20;
// echo is_int($x);
// $x = -45;
// echo is_int($x);
// $y = 30.56;
// echo is_float($y);
// echo PHP_FLOAT_MAX;
// $a = false;
// echo $a;
// $a = 10;
// $country = 'Bangladesh';
// $arr = [10,234,34,22,66];

// ?>