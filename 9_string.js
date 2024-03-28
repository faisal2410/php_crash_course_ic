// ✅String;

// A string is a sequence of characters.


// ✅String Functions

// strlen() = return the length of a string
// strtoupper() = converts a string to uppercase letters
// strtolower() = converts a string to lowercase letters
// ucwords() = converts the first character of each word in a string to uppercase
// trim() = removes whitespace or other characters from both sides of a string
// str_replace() - replace text within a string
// substr() = extract certain characters in a string
// chunk_split() = splits a string into a series of smaller parts
// count_cars() = returns information about characters used in a string
// sprintf() = writes a formatted string to a variable
// str_repeat() = repeats a string a specified number of times
// str_word_count() - count words in a string
// strrev() - reverse a string
// strpos() - search for a text within a string
// strip_tags() = strips HTML and PHP tags from a string


// ✅String Functions Reference

// https://www.php.net/manual/en/ref.strings.php


// ✅ Code Examples

// <?php
// Peter's car is very nice
// $str = "Peter's car is very nice";
// $str = 'Peter\'s car is very nice';
// My country name is "Bangladesh"
//$str = "My country name is \"Bangladesh\"";
// $str = 'My country name is "Bangladesh"';
// echo $str;
// function myCountry($city)
// {
//     echo 'Bangladesh is a beautiful country and city is: '.$city;
//     echo '<br>';
// }
// myCountry("Khulna");
// myCountry("Dhaka");
// myCountry("Barisal");
// $len = strlen("Bangladesh is a nice country");
// echo $len;
//echo strtoupper("My name is Arefin");
//echo strtolower("My name is Arefin");
//echo ucwords("My name is Arefin");
// $str1 = trim("Bangladesh ");
// $str2 = trim(" USA");
// echo $str1.$str2;

// $str = "My country name is Bangladesh. I love Bangladesh. Bangladesh is a beautiful country.";
// echo str_replace("Bangladesh", "USA", $str);

//$date_of_birth = "2010-02-24";
// 24/02/2010
//0 1 2 3 4 5 6 7 8 9
//2 0 1 0 - 0 2 - 2 4 
// $year = substr($date_of_birth,0,4);
// $month = substr($date_of_birth,5,2);
// $day = substr($date_of_birth,8,2);
//echo 'BD ' . ' is ' . ' a ' . ' good ' . ' country ';
//echo 'BD' . ' ' . 'is' . ' ' . 'a' . ' ' . 'good'. ' ' . 'country';
//echo $day . '/' . $month . '/' . $year;

// $str = 'Bangladesh';
// echo chunk_split($str,3,'-');

// $str = "Bangladesh is a nice country";
// echo count_chars($str,3);

// $name = 'Morshedul Arefin';
// $age = 30;
// echo sprintf("This user's name is: %s and his age is %d", $name, $age);

// $str = 'Bangladesh ';
// echo str_repeat($str,20);

// $str = "Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. Bangladesh is a very nice country. ";
// echo str_word_count($str);

// $str = "Bangladesh";
// echo strrev($str);

//echo strpos("Bangladesh is my country", "country");

// $str = '<script>alert(1)</script>';
// echo strip_tags($str);

// ?>