// ✅Variable Scope in PHP

// Global;
// Local;
// Static;


// ✅Global Scope

// A variable declared outside a function can only be accessed outside a function.


// ✅Local Scope

// A variable declared within a function can only be accessed within that function.


// ✅Global Keyword

// The global keyword is used to access a global variable from within a function.


// ✅Static Keyword

// When a function is executed, all of its variables are deleted.
// Sometimes we want a local variable NOT to be deleted. We need it for a further job.
// To do this, use the static keyword when you first declare the variable.



// <?php
/*
$age = 30; // Global Scope
function myAge() {
    echo $age;
}
myAge();
echo $age;

function myAge() {
    $age = 30; // Local Scope
    echo $age;
}
myAge();
echo $age;

$age = 30;
function myAge() {
    global $age;
    echo $age;
    echo $GLOBALS['age'];
}
myAge();
*/

// function myAge() {
//     static $age = 0;
//     echo $age;
//     $age = $age + 1;
// }
// myAge(); //0
// myAge(); //1
// myAge(); //2


// ?>
