// ✅Operators;

// Operators are used to perform operations on variables and values.


//✅ Expression;

// Expression in PHP is anything that has a value.

// Example:
// Arithmetic Expression:$a = (2+3)*5;
// Comparison Expression:$age = 25;$isAdult = ($age >= 18);
// String Concatenation Expression:$firstName = "John";$lastName = "Doe";$fullName = $firstName . " " . $lastName;
// Ternary operator expression:$value = 10;$result = ($value > 0) ? "Positive" : "Negative";

// ✅Operand;

// An operand is a value or variable that is used in an operation
// Example:
// 	$x = 2 + 3;Here 2 and 3 are operands and + is operator


// ✅Operator List

// Arithmetic
// Assignment
// Comparison
// Increment/Decrement
// Logical
// String
// Array
// Conditional assignment


// ✅Arithmetic Operator

// Operator Name
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus
// ** Exponentiation

// ✅ Assignment Operator

// Assignment    Description
//  x=y         Left operand has the value of the expression on the right
// x+=y, x=x+y  Addition
// x-=y, x=x-y  Subtraction
// x*=y, x=x*y  Multiplication
// x/=y, x=x/y  Division
// x%=y, x=x%y  Modulus

// ✅ Comparision Operator

// Operator   Name
// ==         Equal
// ===        Identical
// !=         Not Equal
// <>         Not Equal
// !==        Not Identical
// >          Greater than
// <          Less than
// >=         Greater than or equal to
// <=        Less than or equal to
// <=>       Spaceship


// ✅Increment/ Decrement Operator
// Operator     Name
// ++$x         Pre-increment
// $x++         Post-increment
// --$x         Pre-decrement
// $x--         Post-decrement

// ✅ Logical Operator

// Operator   Name
// and        And
// or         Or
// xor        Xor
// &&         And
// ||         Or
// !          Not


// ✅ String Operator
// Operator   Name
// .          Concatenation
// .=         Concatenation assignment

// ✅Array Operator
//  Operator      Name
// +                Union
// ==               Equality
// ===              Identity
// !=               Inequality
// <>               Inequality
// !==              Non-identity


// ✅ Conditional Assignment Operator

// Operator     Name
// ?:           Ternary
// ??           Null coalescing




// ✅ Code Examples

// <?php
// $a = 10;
// $b = 4;
// $c = $a + $b;
// $c = $a - $b;
// $c = $a * $b;
// $c = $a / $b;
// $c = $a ** $b;
// echo $c;

// $a = 10;
// $b = $a;
// echo $b;

// $x = 2;
// $x = $x + 4;
// $x += 4;
// echo $x;

//$x = 20;
// $x -= 4;
// $x *= 4;
//echo $x;

// $x = 10;
// $y = 30;
// $x += $y;
// $x = $x + $y;
// echo $x;

// $a = 30;
// $b = 10;
// var_dump($a==$b);
// var_dump($a===$b);
// var_dump($a!=$b);
// var_dump($a!==$b);
// var_dump($a>$b);
// var_dump($a<$b);
// var_dump($a>=$b);
// var_dump($a<=$b);
// var_dump($a<=>$b);

// $a = 10;
// $a = $a + 1;
// $a += 1;
// echo $a++;
// echo ++$a;
// echo $a--;
// echo --$a;
// echo $a;

// $a = 10;
// $b = 50;

// var_dump($a==10 and $b==20);
// var_dump($a==100 or $b==10);
// var_dump($a==10 xor $b==50);
// var_dump($a==10 && $b==50);
// var_dump($a==10 || $b==50);
// var_dump($a!=60);

// $s1 = "Bangladesh";
// $s2 = "Khulna";
// echo $s1.$s2;

// $str = "Bangladesh";
// $str .= "USA";
//$str = $str . "USA"
// echo $str;

// $arr1 = array(
//     'a' => 10,
//     'b' => 20
// );
// $arr2 = array(
//     'a' => 100,
//     'b' => 87
// );

//echo "<pre>";
// print_r($arr1+$arr2);
//print_r($arr1==$arr2);
//echo "</pre>";
// var_dump($arr1 == $arr2);
// var_dump($arr1 === $arr2);
// var_dump($arr1 != $arr2);
// var_dump($arr1 <> $arr2);
// var_dump($arr1 !== $arr2);

// $a = 80;
// echo ($a == 10) ? "This is true" : "This is false";

//$city = 'Khulna';

// echo $city = $city ?? "Dhaka";

// ?>