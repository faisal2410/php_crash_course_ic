//✅ Array Functions

// count()It is used to count the number of elements in an array
// var_dump() It is used to display structured information about one or more variables. It shows the type and value of the variable. It is commonly used for debugging purposes

// print_r()It is used to display the contents of a variable in a human-readable format.
// in_array()It is used to check if a certain value exists in an array

// max() – find maximum values in an array
// min() – find minimum values in an array

// array_unique()It is used to remove duplicate values from an array
// array_values() It returns an array containing all the values of an input array. The keys are re-indexed numerically starting from 0.
// explode() It is used to split a string into an array, using a specified delimiter. Takes 2 parameters.
// implode() It is used to join an array of strings into a single string, using a specified delimiter. Takes 2 parameters.

// sort() - sort arrays in ascending order
// rsort() - sort arrays in descending order
// asort() - sort associative arrays in ascending order, according to the value
// ksort() - sort associative arrays in ascending order, according to the key
// arsort() - sort associative arrays in descending order, according to the value
// krsort() - sort associative arrays in descending order, according to the key


// ✅Reference;
// https://www.php.net/manual/en/ref.array.php


// ✅ Code Examples

// <?php
//$arr = [12,34,12,45,67,78,89,99,12,45,32];
//echo count($arr);
//echo var_dump($arr);
// echo '<pre>';
// echo print_r($arr);
// echo '</pre>';
//echo var_dump(in_array(34, $arr));
//echo max($arr);
//echo min($arr);

//$new_arr = array_values(array_unique($arr));

// echo '<pre>';
// echo print_r($new_arr);
// echo '</pre>';

// $date_of_birth = "2002-02-24";
// $arr = explode("-",$date_of_birth);

// echo '<pre>';
// echo print_r($arr);
// echo '</pre>';

// $arr = ["Bangladesh", "Canada", "USA"];
// $str = implode("::", $arr);
// echo $str;

// $arr = [12,34,12,45,67,78,89,99,12,45,32];
// $arr = [
//     "Bangladesh" => 64,
//     "USA" => 100,
//     "Canada" => 300
// ];
//sort($arr);
//rsort($arr);
//asort($arr);
//ksort($arr);
//arsort($arr);
// krsort($arr);
// echo '<pre>';
// echo print_r($arr);
// echo '</pre>';
// ?>