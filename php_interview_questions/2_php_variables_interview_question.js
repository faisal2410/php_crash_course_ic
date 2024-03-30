
// Question 1: What is the scope of a variable that is declared within a PHP function?

// Explanation
// In PHP, a variable that is declared within a function has a local scope.This means it is only accessible within that function. Once the function finishes execution, the variable is destroyed and cannot be accessed from outside the function. This helps encapsulate variables and prevent naming conflicts.Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 2: What keyword is used in PHP to access a global variable inside a function?

// Explanation
// To access a global variable inside a PHP function, the global keyword is used.By declaring global followed by the variable name within the function, you can access and modify the value of the global variable.This allows you to work with global variables within the function's local scope. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 3: Which type of variable in PHP is accessible anywhere in the script ?
    
// Explanation
// In PHP, a global variable is accessible anywhere in the script.It can be accessed from within functions, outside functions, and across different files.Global variables have a global scope, meaning they can be accessed and modified from any part of the script.However, it's generally recommended to use global variables sparingly and follow good programming practices to avoid potential issues. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 4:
// A variable declared within a function in PHP has a ______ scope.
    
// Explanation
// A variable declared within a function in PHP has a local scope.It means that the variable is only accessible within that specific function. It cannot be accessed outside of the function or in other functions.This helps in encapsulation and prevents naming conflicts with other variables in different functions.Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 5:  The ______ keyword is used in PHP to make a local variable accessible globally.
    
// Explanation
// The global keyword in PHP is used to make a local variable accessible globally.By using the global keyword followed by the variable name within a function, you can access and modify the value of the variable globally, outside the function's local scope. This allows you to work with local variables in a wider scope. However, it is generally recommended to minimize the use of global variables for better code organization and maintainability. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 6:  A variable declared outside all functions in PHP is considered to have a ______ scope.
    
// Explanation
// A variable declared outside all functions in PHP is considered to have a global scope.It means that the variable is accessible from anywhere in the PHP script, including inside functions.Global variables are defined outside of any function and can be accessed and modified throughout the entire script.However, it's generally recommended to use global variables sparingly and follow good programming practices to avoid potential issues related to variable scoping. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 7:  In PHP, variables declared inside a function can be accessed outside of that function.

// Explanation
// Variables declared inside a function in PHP have a local scope.This means they are only accessible within that specific function. Once the function execution ends, the local variables are destroyed and cannot be accessed from outside the function. In order to access variables across different scopes, you would need to use return statements or pass them as parameters.Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 8: PHP uses the global keyword to make a local variable have global scope.
    
// Explanation
// The statement is false. In PHP, the global keyword is used to access and modify variables with global scope from within a function. It allows you to work with global variables within the local scope of a function. By using the global keyword followed by the variable name, you can indicate that the variable being used is the global variable and not a local one. However, it does not change the scope of the variable to global. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 9: How are variables in PHP declared ?
    
// Explanation
// In PHP, variables are declared by preceding the variable name with a dollar sign($).For example, $variable.PHP is a loosely typed language, which means that you don't have to declare the data type of a variable when you create it. Learn more: https://www.php.net/manual/en/language.variables.basics.php

// Question 10: In PHP, a variable name must start with a ______ followed by the name of the variable.
    
// Explanation
// In PHP, variable names must start with a dollar sign($), followed by the name of the variable.The variable name is case -sensitive.Variable names follow certain rules: they must begin with a letter or the underscore character; they can't begin with a number; they can contain alpha-numeric characters and underscores. Learn more: https://www.php.net/manual/en/language.variables.basics.php

// Question 11: PHP is case -sensitive for variable names.
    
// Explanation
// PHP is indeed case -sensitive for variable names.This means that $var and $Var would be considered two separate variables.On the other hand, PHP function names are not case -sensitive.This is one of the many aspects that can make PHP tricky for beginners.Learn more: https://www.php.net/manual/en/language.variables.basics.php
    
// Question 12: In PHP, variable names can start with a number.
    
// Explanation
// In PHP, variable names cannot start with a number.They must begin with a letter or an underscore, followed by any number of letters, numbers, or underscores.While the rules for variable names in PHP are somewhat flexible, they do have these constraints to maintain the clarity and readability of the code.Learn more: https://www.php.net/manual/en/language.variables.basics.php

// Question 13: Which of the following are valid PHP variable names ?
    
// Explanation
// In PHP, variable names must start with a letter or an underscore(_), followed by any number of letters, numbers, or underscores.So, $my_var and $_VAR are valid variable names, but $123abc is not because it starts with a number.Learn more: https://www.php.net/manual/en/language.variables.basics.php

// Question 14: You need to declare a variable in PHP to store a user's age. How would you do this?

// Explanation
// In PHP, variables are declared with a dollar sign($) followed by the variable name.So, to declare a variable to store a user's age, you would write $userAge = 21; PHP is a loosely typed language, which means that you don't have to declare the data type of a variable when you create it.Learn more: https://www.php.net/manual/en/language.variables.basics.php



// Question 15: A variable declared outside all functions in PHP has a global scope and can be accessed anywhere in the script.           

// Explanation
// Yes, the statement is true.A variable declared outside all functions in PHP has a global scope.It means the variable is accessible from anywhere within the script, including inside functions.These global variables retain their values throughout the execution of the script.However, it is generally recommended to use global variables sparingly and follow good programming practices to avoid potential issues related to variable scoping and maintainability.Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 16: Which of the following are true about the scope of variables in PHP ?
    
// Explanation
// All of the given options are true about the scope of variables in PHP.Variables declared inside a function have a local scope, meaning they can only be accessed within that specific function. Variables declared outside all functions have a global scope, which allows them to be accessed from anywhere in the script.Variables declared with the var keyword (in PHP 4 and earlier versions) have a static scope and retain their values across function calls. Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 17: Which of the following are ways to access a global variable inside a function in PHP ?
    
// Explanation
// All of the given options are valid ways to access a global variable inside a function in PHP.You can use the global keyword followed by the variable name inside the function to indicate that you want to work with the global variable.Alternatively, you can pass the global variable as a parameter to the function.Additionally, global variables can be accessed directly from within the function without any special keyword or parameter passing.Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 18: Which of the following statements about variable scope in PHP are correct ?
    
// Explanation
// All of the given statements about variable scope in PHP are correct.Local variables declared inside a function are destroyed after the function finishes execution.Global variables declared outside functions retain their values throughout the script execution.Local variables can only be accessed within the function in which they are declared.Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 19: You are writing a PHP function and you need to use a variable that was declared outside of the function. How would you access this variable within the function?

// Explanation
// To access a variable declared outside of a function within the function's scope, you can use the global keyword followed by the variable name inside the function. This allows you to access and modify the value of the variable. However, it is generally recommended to pass the variable as a parameter to the function to promote better code organization and avoid potential issues with global variables. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

// Question 20: You have a variable inside a function that you need to make accessible outside of the function. How would you accomplish this in PHP ?
    
// Explanation
// To make a variable inside a function accessible outside of the function, you can return the variable from the function. Assigning the value of the variable to a global variable inside the function can also make it accessible outside.Using the static keyword will not make the variable accessible outside the function; it only retains its value between function calls.However, it's generally recommended to avoid using global variables and instead use proper parameter passing and return values for better code organization. Learn more: https://www.php.net/manual/en/language.variables.scope.php

// Question 21: You are debugging a PHP script and a variable is not retaining its value between function calls. What might be the problem and how would you solve it ?
    
// Explanation
// If a variable is not retaining its value between function calls, the possible problem might be that the variable is declared with the static keyword inside the function. The static keyword makes the variable retain its value between multiple calls to the same function. To solve this, you can remove the static keyword if the variable doesn't need to retain its value. Alternatively, if the variable should retain its value, make sure it is properly initialized and assigned values. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.static