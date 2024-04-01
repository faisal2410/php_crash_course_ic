# PHP Conceptual / Interview Questions & Explanation

### Table of Contents
| Number | Keyword          | Question                                        |
|--------|------------------|-------------------------------------------------|
|   1    | local development environment     | [What is the software stack called that includes PHP, Apache, and MySQL for Windows?](#local1)           |
|   2    | local development environment     | [Which of the following software stacks include PHP?](#local2)           |
|   3    | php variable     | [How are variables in PHP declared ?](#var1)           |
|   4    | php variable     | [In PHP, a variable name must start with a ______ followed by the name of the variable.](#var2)                  |
|   5    | php variable     | [PHP is case -sensitive for variable names.](#var3)                      |
|   6    | php variable     | [In PHP, variable names can start with a number.](#var4)                      |
|   7    | php variable    | [Which of the following are valid PHP variable names ?](#var5)              |
|   8    | php variable  | [You need to declare a variable in PHP to store a user's age. How would you do this?](#var6)            |
|   9    | php variable     | [What is the scope of a variable that is declared within a PHP function?](#var7)           |
|   10    | php variable           | [What keyword is used in PHP to access a global variable inside a function?](#var8) |
|   11    | php variable           | [Which type of variable in PHP is accessible anywhere in the script ?](#var9) |
|   12    | php variable           | [A variable declared within a function in PHP has a ______ scope.](#var10) |
|   13    | php variable           | [The ______ keyword is used in PHP to make a local variable accessible globally.](#var11) |
|   14    | php variable           | [ A variable declared outside all functions in PHP is considered to have a ______ scope.](#var12) |
|   15    | php variable           | [ In PHP, variables declared inside a function can be accessed outside of that function.](#var13) |
|   16    | php variable           | [ PHP uses the global keyword to make a local variable have global scope.](#var14) |
|   17    | php data types           | [ What data type would be used in PHP to store a numeric value without a decimal ?](#datatype1) |
|   18    | php data types  | [ What is the data type in PHP that is used to store a sequence of characters ?](#datatype2) |
|   19    | php data types  | [ Which PHP data type can hold multiple values ?](#datatype3) |
|   20    | php data types  | [ In PHP, a boolean data type can hold one of two values: ______ or ______.](#datatype4) |
|   21    | php data types  | [ The ______ data type in PHP is used to store a number with a decimal point.](#datatype5) |


## What is the software stack called that includes PHP, Apache, and MySQL for Windows?
###### local1
The software stack that includes PHP, Apache, and MySQL for Windows is known as WAMP. "WAMP" stands for Windows, Apache, MySQL, and PHP. This stack provides developers with the necessary environment to test web apps locally before deploying them. Apache is the web server, MySQL is the database, and PHP is the scripting language. Learn more: http://www.wampserver.com/en/

**[⬆ Back to Top](#table-of-contents)**

## Which of the following software stacks include PHP?
###### local2
WAMP is a software stack for Windows that includes PHP. WAMP stands for Windows, Apache, MySQL, and PHP. Apache is the web server, MySQL is the database, and PHP is the scripting language. It's a popular choice for developers working in a Windows environment. Other software stacks like MEAN, Ruby on Rails, and Django use different programming languages. Learn more: http://www.wampserver.com/en/

**[⬆ Back to Top](#table-of-contents)**

## How are variables in PHP declared ?
###### var1
In PHP, variables are declared by preceding the variable name with a dollar sign($).For example, $variable.PHP is a loosely typed language, which means that you don't have to declare the data type of a variable when you create it. Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**
## In PHP, a variable name must start with a ______ followed by the name of the variable.
###### var2
In PHP, variable names must start with a dollar sign($), followed by the name of the variable.The variable name is case -sensitive.Variable names follow certain rules: they must begin with a letter or the underscore character; they can't begin with a number; they can contain alpha-numeric characters and underscores. Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**
## PHP is case -sensitive for variable names.
###### var3
PHP is indeed case -sensitive for variable names.This means that $var and $Var would be considered two separate variables.On the other hand, PHP function names are not case -sensitive.This is one of the many aspects that can make PHP tricky for beginners.Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**

## In PHP, variable names can start with a number.
###### var4
In PHP, variable names cannot start with a number.They must begin with a letter or an underscore, followed by any number of letters, numbers, or underscores.While the rules for variable names in PHP are somewhat flexible, they do have these constraints to maintain the clarity and readability of the code.Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**

## Which of the following are valid PHP variable names ?
###### var5
In PHP, variable names must start with a letter or an underscore(_), followed by any number of letters, numbers, or underscores.So, $my_var and $_VAR are valid variable names, but $123abc is not because it starts with a number.Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**

## You need to declare a variable in PHP to store a user's age. How would you do this?
###### var6
In PHP, variables are declared with a dollar sign($) followed by the variable name.So, to declare a variable to store a user's age, you would write $userAge = 21; PHP is a loosely typed language, which means that you don't have to declare the data type of a variable when you create it.Learn more: https://www.php.net/manual/en/language.variables.basics.php

**[⬆ Back to Top](#table-of-contents)**
## What is the scope of a variable that is declared within a PHP function?
###### var7
In PHP, a variable that is declared within a function has a local scope.This means it is only accessible within that function. Once the function finishes execution, the variable is destroyed and cannot be accessed from outside the function. This helps encapsulate variables and prevent naming conflicts.Learn more: https://www.php.net/manual/en/language.variables.scope.php

**[⬆ Back to Top](#table-of-contents)**
## What keyword is used in PHP to access a global variable inside a function?
###### var8
To access a global variable inside a PHP function, the global keyword is used.By declaring global followed by the variable name within the function, you can access and modify the value of the global variable.This allows you to work with global variables within the function's local scope. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

**[⬆ Back to Top](#table-of-contents)**
## Which type of variable in PHP is accessible anywhere in the script ?
###### var9
In PHP, a global variable is accessible anywhere in the script.It can be accessed from within functions, outside functions, and across different files.Global variables have a global scope, meaning they can be accessed and modified from any part of the script.However, it's generally recommended to use global variables sparingly and follow good programming practices to avoid potential issues. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

**[⬆ Back to Top](#table-of-contents)**
## A variable declared within a function in PHP has a ______ scope.
###### var10
A variable declared within a function in PHP has a local scope.It means that the variable is only accessible within that specific function. It cannot be accessed outside of the function or in other functions.This helps in encapsulation and prevents naming conflicts with other variables in different functions.Learn more: https://www.php.net/manual/en/language.variables.scope.php

**[⬆ Back to Top](#table-of-contents)**

## The ______ keyword is used in PHP to make a local variable accessible globally.
###### var11
The global keyword in PHP is used to make a local variable accessible globally.By using the global keyword followed by the variable name within a function, you can access and modify the value of the variable globally, outside the function's local scope. This allows you to work with local variables in a wider scope. However, it is generally recommended to minimize the use of global variables for better code organization and maintainability. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

**[⬆ Back to Top](#table-of-contents)**

##  A variable declared outside all functions in PHP is considered to have a ______ scope.
###### var12
A variable declared outside all functions in PHP is considered to have a global scope.It means that the variable is accessible from anywhere in the PHP script, including inside functions.Global variables are defined outside of any function and can be accessed and modified throughout the entire script.However, it's generally recommended to use global variables sparingly and follow good programming practices to avoid potential issues related to variable scoping. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

**[⬆ Back to Top](#table-of-contents)**

## In PHP, variables declared inside a function can be accessed outside of that function.
###### var13
Variables declared inside a function in PHP have a local scope.This means they are only accessible within that specific function. Once the function execution ends, the local variables are destroyed and cannot be accessed from outside the function. In order to access variables across different scopes, you would need to use return statements or pass them as parameters.Learn more: https://www.php.net/manual/en/language.variables.scope.php

**[⬆ Back to Top](#table-of-contents)**

## PHP uses the global keyword to make a local variable have global scope.
###### var14
The statement is false. In PHP, the global keyword is used to access and modify variables with global scope from within a function. It allows you to work with global variables within the local scope of a function. By using the global keyword followed by the variable name, you can indicate that the variable being used is the global variable and not a local one. However, it does not change the scope of the variable to global. Learn more: https://www.php.net/manual/en/language.variables.scope.php#language.variables.scope.global

**[⬆ Back to Top](#table-of-contents)**

## What data type would be used in PHP to store a numeric value without a decimal ?
###### datatype1
In PHP, the int data type is used to store numeric values without a decimal.It can hold positive and negative whole numbers, including zero.Integers are used to perform mathematical operations and represent whole quantities in PHP.Learn more: https://www.php.net/manual/en/language.types.integer.php

**[⬆ Back to Top](#table-of-contents)**

## What is the data type in PHP that is used to store a sequence of characters ?
###### datatype2

In PHP, the string data type is used to store a sequence of characters.It can hold alphanumeric characters, symbols, and special characters.Strings are commonly used to represent text or data in PHP.They can be enclosed in single quotes('') or double quotes("") in PHP.Learn more: https://www.php.net/manual/en/language.types.string.php

## Which PHP data type can hold multiple values ?
###### datatype3

The array data type in PHP can hold multiple values.It is a versatile data type that allows you to store multiple elements of different types in a single variable.Arrays in PHP can be indexed or associative, providing flexibility in accessing and organizing data.Arrays are commonly used for storing collections of related values or managing complex data structures.Learn more: https://www.php.net/manual/en/language.types.array.php

## In PHP, a boolean data type can hold one of two values: ______ or ______.
###### datatype4

In PHP, a boolean data type can hold one of two values: true or false.Boolean values are used to represent logical states and are often used in conditional statements or to indicate the success or failure of an operation.The value true represents a true or positive condition, while the value false represents a false or negative condition.Learn more: https://www.php.net/manual/en/language.types.boolean.php

## The ______ data type in PHP is used to store a number with a decimal point.
###### datatype5

The float data type in PHP is used to store a number with a decimal point.Floats, also known as floating - point numbers or doubles, can represent real numbers and are used when precision is required in calculations involving decimal values.Floats can hold positive and negative values with varying degrees of precision.Learn more: https://www.php.net/manual/en/language.types.float.php



















