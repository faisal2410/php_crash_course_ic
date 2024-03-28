<?php

//✅ Loop Definition;

// Loops are used to execute the same block of code again and again, as long as a certain condition is true.

// ✅Types of Loop

// while
// do...while
// for
// foreach

// ✅ while

// while (condition is true) {
// 	code to be executed;
// }


// ✅ do...while

// do {
// 	code to be executed;
// } while (condition is true);

// ✅ For

// for (initialization; condition; increment/decrement) {
// 	code to be executed for each iteration;
// }


// ✅ foreach

// foreach ($array as $key=>$value) {
// 	code to be executed;
// }

// foreach ($array as $value) {
// 	code to be executed;
// }

// ✅ break

// The break statement is used to jump out of a loop.

// break();


// ✅ Continue

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// continue();


// ✅ Code Examples

// <?php
// Initialization
// Increment/Decrement
// Condition

// $a = 1;
// while($a < 10) {
//     echo "Bangladesh<br>";
//     $a++;
// }

// $a = 1;
// while(1) {
//     echo "Bangladesh<br>";
//     $a++;
//     if($a > 4) {
//         break;
//     }
// }

// $a = 1;
// do {
//     echo "Bangladesh<br>";
//     $a++;
// }while($a < 10);

// for($i=1;$i<=100;$i+=5) {
//     echo $i.' ';
// }
// i=1 1<=100 6 =  1
//     6<=100 11 = 6
//     11<=100 16 =  11

// $arr = array("usa","australia","canada");
// foreach($arr as $val) {
//     echo $val.'<br>';
// }

// $arr = array(
//     "username" => "arefin",
//     "age" => 30,
//     "password" => "1234"
// );
// foreach($arr as $key=>$val) {
//     echo "KEY is: " . $key . " and Value is: " . $val . '<br>';
// }

// $arr = array(12,34,55,77);
// for($i=0;$i<4;$i++) {
//     echo $arr[$i].'<br>';
// }



// for($i=1;$i<=10;$i++) {
    
//     if($i==5) {
//         break;
//     }

//     echo $i;
//     echo '<br>';
// }

// Even/Odd numbers
// 2 4 6 8 10
// for($i=1;$i<=100;$i++) {
//     if($i%2 != 0) {
//         echo $i.' ';
//     }
// }

