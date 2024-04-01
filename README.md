# PHP Conceptual / Interview Questions & Explanation

### Table of Contents(#table-of-contents)
| Number | Keyword          | Question                                        |
|--------|------------------|-------------------------------------------------|
|   1    | php variable     | [How are variables in PHP declared ?](#var1)           |
|   2    | php variable     | [In PHP, a variable name must start with a ______ followed by the name of the variable.](#var2)                  |
|   3    | php variable     | [PHP is case -sensitive for variable names.](#var3)                      |
|   4    | php variable     | [In PHP, variable names can start with a number.](#var4)                      |
|   5    | php variable    | [Which of the following are valid PHP variable names ?](#var5)              |
|   6    | php variable  | [You need to declare a variable in PHP to store a user's age. How would you do this?](#var6)            |
|   7    | php variable     | [What is the scope of a variable that is declared within a PHP function?](#var7)           |
|   8    | php variable           | [What keyword is used in PHP to access a global variable inside a function?](#var8) |
|   9    | php variable           | [Which type of variable in PHP is accessible anywhere in the script ?](#var9) |


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


