
// ⁉ Question 1: Which programming language does PHP resemble?

// ℹ Explanation
// PHP resembles Perl in terms of syntax and features. Both languages share similar characteristics, such as a focus on web development and support for regular expressions.

// ⁉ Question 2: What does PEAR stand for?
    
// ℹ Explanation
// PEAR stands for PHP Extension and Application Repository. It is a framework and distribution system for reusable PHP components, providing a centralized repository of libraries, extensions, and tools. PEAR helps in sharing and reusing code, promoting code quality and collaboration within the PHP community.

// ⁉ Question 3: What is the actually used PHP version ?
    
// ℹ Explanation
// The currently used PHP version is PHP 8.3 It is the latest major release of PHP, introducing significant performance improvements, new features, and enhancements. PHP 8.3 offers improved type safety, JIT compilation, union types, named arguments, attributes, and more. It is recommended to use the latest PHP version to benefit from the latest features, bug fixes, and security patches.

// ⁉ Question 4: How do you execute a PHP script from the command line ?
    
// ℹ Explanation
// To execute a PHP script from the command line, you can use the command php script.php, where script.php is the name of your PHP file.This command runs the PHP interpreter, reads and executes the code in the specified file.It allows you to run PHP scripts outside of a web server environment, enabling command - line applications or batch processing tasks.
    
// ⁉ Question 5: How to run the interactive PHP shell from the command line interface ?
    
// ℹ Explanation
// To run the interactive PHP shell from the command line interface, you can use the command php - a.This command starts an interactive mode where you can enter and execute PHP code directly.It allows for quick testing and experimentation without the need for a complete PHP script.
    
// ⁉ Question 6: What is the correct and the most two common way to start and finish a PHP block of code ?
    
// ℹ Explanation
// The correct and most common way to start and finish a PHP block of code is to use <? php to start the block and ?> to end it.This is the recommended syntax and ensures compatibility with all PHP configurations.The alternative syntax <? and ?> can also be used, but it is less commonly used and not recommended for maximum portability.Additionally, for single - line blocks, it is acceptable to omit the closing ?> tag.
    
// ⁉ Question 7: How can we display the output directly to the browser ?
    
// ℹ Explanation
// To display output directly to the browser in PHP, you can use the echo or print statement.These statements allow you to output text or variables directly to the web page.The output will be visible in the browser's HTML rendering. The console.log() function is used in JavaScript to display output in the browser's console, while the display() function does not exist in PHP.
    
// ⁉ Question 8: Is multiple inheritance supported in PHP ?
    
// ℹ Explanation
// No, multiple inheritance is not supported in PHP.PHP only supports single inheritance, which means a class can inherit from only one parent class.However, PHP does support interfaces, which can be used to achieve similar functionality as multiple inheritance by implementing multiple interfaces in a class. Interfaces define a contract that a class must adhere to, allowing for code reusability and achieving a form of multiple inheritance through interface implementation.

// ⁉ Question 9: What is the meaning of a final class and a final method ?
    
// ℹ Explanation
// In PHP, a final class is a class that cannot be inherited or extended by other classes.It is declared using the final keyword.Final classes are used when you want to prevent further extension or inheritance of a class. A final method, on the other hand, is a method within a class that cannot be overridden by any subclass.It is also declared using the final keyword.Final methods are used when you want to enforce that a specific method should not be overridden in any subclass.
    
// ⁉ Question 10: How is the comparison of objects done in PHP ?
    
// ℹ Explanation
// Object comparison in PHP is done using the == and === operators.The == operator compares two objects for equality by checking their attributes and values.The === operator, also known as the identity operator, checks if two objects are the same instance of the same class. It compares their references in memory.It is important to note that for object comparison, the equality operator == checks if the attributes of two objects are equal, while the identity operator === checks if the two objects refer to the same instance in memory.
    
// ⁉ Question 11: What type of operation is needed when passing values through a form or a URL ?
    
// ℹ Explanation
// When passing values through a form or a URL, the GET method is used. The GET method appends the data to the URL as query parameters, which can be seen in the address bar of the browser. This method is suitable for retrieving data or performing read operations. The POST method, on the other hand, sends data in the request body and is used for submitting data or performing write operations. It is important to use the appropriate method based on the intended operation to ensure data security and prevent unintended side effects.

// ⁉ Question 12:
// How are failures in execution handled with include() and require() functions ?
    
// ℹ Explanation
// The include() and require() functions are used to include and evaluate the content of another PHP file in the current script.If the specified file is not found, the include() function generates a warning and continues script execution.On the other hand, if the specified file is not found, the require() function generates a fatal error and stops script execution.The choice between include() and require() depends on the specific requirements of your script.If the included file is essential for the script to run correctly, require() is preferred to ensure that any missing files are detected as fatal errors and prevent the script from running with incomplete dependencies.
    
// ⁉ Question 13: What is the main difference between require() and require_once() ?
    
// ℹ Explanation
// The main difference between require() and require_once() functions is in how they include and execute a file. - The require() function includes a file and re-executes its content every time it is called. If the same file is included multiple times, it will be re-executed each time. - The require_once() function includes a file only once, regardless of how many times it is called. It ensures that the file is included and its content is executed only once, even if it is referenced multiple times in the code. This is useful when including files that define functions or classes to prevent redeclaration errors. By using require_once(), you can ensure that the included file is executed only once, avoiding potential conflicts or duplicate declarations.

// ⁉ Question 14: How can I display text with a PHP script ?
    
// ℹ Explanation
// To display text with a PHP script, you can use the echo statement.The echo statement is used to output text or variables to the browser or command line.It can be used with or without parentheses and is a convenient way to display information.For example, you can use echo "Hello, World!"; to display the text "Hello, World!" in your PHP script.
    
// ⁉ Question 15: How can we display information of a variable and readable by a human with PHP?

// ℹ Explanation
// To display information about a variable in a human-readable format with PHP, you can use the print_r() function. The print_r() function is used to print the contents of an array or an object in a human-readable format. It can be useful for debugging or displaying complex data structures. For example, you can use print_r($array); to display the contents of an array. Another option is to use the var_dump() function, which provides more detailed information about a variable, including its type and size.
// ⁉ Question 16: How is it possible to set an infinite execution time for a PHP script ?
    
// ℹ Explanation
// To set an infinite execution time for a PHP script, you can use the set_time_limit(0) function at the beginning of the PHP script.This function sets the maximum execution time for the script to 0, effectively removing any time limit.Additionally, you can also modify the max_execution_time directive in the php.ini file and set it to 0. It's important to note that setting an infinite execution time may have implications on server resources and may not be recommended for all scripts. It's advisable to use this with caution and only when necessary.
    
// ⁉ Question 17: What does the PHP error 'Parse error in PHP – unexpected T_variable at line x' mean ?
    
// ℹ Explanation
// The PHP error message "Parse error: unexpected T_variable at line x" indicates a syntax error in the PHP code.It occurs when the PHP parser encounters an unexpected variable at the specified line number(x).This error typically occurs when there is a mistake in the code, such as a missing semicolon, mismatched parentheses, or incorrect use of operators.To resolve this error, you need to review the code at the specified line and check for any syntax errors or mistakes in variable usage.It's important to carefully review the code and ensure proper syntax to avoid parse errors.

// ⁉ Question 18:
// What is the static variable in a function useful for?
    
// ℹ Explanation
// A static variable in a function is useful for preserving the value of a variable between multiple function calls. Unlike regular local variables, which are re-initialized each time the function is called, static variables retain their value across function calls. This allows you to maintain state or count the number of times a function has been called. For example, you can use a static variable to keep track of the number of times a function has been executed or to cache a value that is expensive to compute. The static variable is declared using the static keyword within the function. It's important to note that static variables have function scope, so they are only accessible within the function where they are defined. They are not visible or accessible outside the function.

// ⁉ Question 19: How can we define a variable accessible in functions of a PHP script ?
    
// ℹ Explanation
// To define a variable that is accessible in functions of a PHP script, you can declare it as a global variable using the global keyword.By using the global keyword within each function, you can make the variable accessible and modify its value.For example, you can define a global variable $count and access it in multiple functions by using the global $count; statement within each function.However, using global variables is generally discouraged as it can make code harder to maintain and lead to potential issues with variable conflicts and unintended side effects.Instead of relying on global variables, it's often recommended to use function arguments and return values to pass data between functions. Additionally, you can use object-oriented principles and create classes with properties and methods to encapsulate data and behavior.

// ⁉ Question 20: How is it possible to return a value from a function?

// ℹ Explanation
// To return a value from a function in PHP, you can use the return statement.The return statement is followed by the value you want to return.When the return statement is encountered, the function execution is terminated, and the specified value is passed back to the calling code.For example, you can define a function calculateSum($a, $b) that calculates the sum of two numbers and returns the result using return $a + $b;. The calling code can then capture the returned value and use it as needed.It's important to note that a function can only return a single value. If you need to return multiple values, you can use an array, object, or other data structures to encapsulate the values and return them together.

// ⁉ Question 21: How is a constant defined in a PHP script ?
    
// ℹ Explanation
// A constant is defined in a PHP script using the define() function. The define() function takes two arguments: the constant name (a string) and its value. For example, you can define a constant named MY_CONSTANT with a value of 123 using the following syntax: define('MY_CONSTANT', 123);. Once defined, constants cannot be changed or redefined during the execution of the script. They are typically used to represent values that remain constant throughout the script execution, such as configuration settings or mathematical constants. Constants are case-sensitive by default, but you can make them case-insensitive by passing true as the third argument to the define() function. It's important to note that constants do not require a $ symbol like variables do.

// ⁉ Question 22: How can you pass a variable by reference ?
    
// ℹ Explanation
// You can pass a variable by reference in PHP by using the & symbol before the variable name in both the function declaration and the function call. This allows changes made to the parameter inside the function to reflect in the original variable outside the function. For example, you can define a function modifyValue(&$var) that takes a variable by reference and modifies its value.To pass a variable by reference, you can call the function as modifyValue(& $myVar).It's important to note that passing variables by reference should be used with caution, as it can lead to unexpected side effects and make the code harder to maintain. It's recommended to use references sparingly and only when necessary.
    
// ⁉ Question 23: Will a comparison of an integer and a string "" work in PHP ?
    
// ℹ Explanation
// Yes, a comparison of an integer and a string "" will work in PHP.In PHP, when comparing an integer and a string, PHP will automatically convert the string to a numeric value.An empty string "" will be converted to 0 during the comparison.This behavior is known as type juggling or type coercion in PHP.It's important to note that when comparing values of different types in PHP, the comparison rules can be complex due to the type juggling mechanism. It's recommended to use strict type comparison (using === or !==) to ensure both value and type equality.
    
// ⁉ Question 24: How is it possible to cast types in PHP ?
    
// ℹ Explanation
// In PHP, types can be cast using explicit typecasting operators.For example, to cast a value to an integer, you can use (int) or intval(), to cast to a float, you can use(float) or floatval(), to cast to a string, you can use(string) or strval(), and so on.These typecasting operators allow you to explicitly convert a value from one type to another.For example, (int)$var will cast the value of $var to an integer.It's important to note that typecasting may result in data loss or unexpected behavior if the value cannot be properly converted to the desired type. Therefore, it's recommended to handle typecasting with caution and ensure the appropriate validation and error handling are in place.
    
// ⁉ Question 25: When is a conditional statement ended with endif ?
    
// ℹ Explanation
// In PHP, a conditional statement is ended with endif when using the alternative syntax for control structures.The alternative syntax provides an alternative way to write control structures such as if, else, while, for, and foreach.Instead of using curly braces { } to enclose the block of code, the alternative syntax uses endif, endwhile, endfor, endforeach, etc.For example, instead of writing if (condition) { code }, you can write if (condition): code endif;. This alternative syntax can be useful for improving readability and reducing visual clutter, especially when working with complex or nested control structures.It's important to note that the alternative syntax is optional, and the regular syntax with curly braces {} is also widely used in PHP.

// ⁉ Question 26: How is the ternary conditional operator used in PHP ?
    
// ℹ Explanation
// The ternary conditional operator in PHP is used as a shorthand for an if-else statement.It allows you to conditionally choose between two values based on a condition.The syntax is condition ? value_if_true : value_if_false;. If the condition evaluates to true, the value before the: is returned; otherwise, the value after the: is returned.For example, $message = $isLogged ? "Welcome back!" : "Please log in"; assigns the value "Welcome back!" to $message if $isLogged is true, and "Please log in" otherwise.The ternary conditional operator can be used to simplify code and make it more concise, especially when assigning values based on simple conditions.It's important to use the ternary conditional operator judiciously to maintain code readability and avoid excessive nesting or complex conditions.

// ⁉ Question 27: What is the function func_num_args() used for?
    
// ℹ Explanation
// The function func_num_args() is used to retrieve the number of arguments passed to a function in PHP.It is often used in conjunction with other functions like func_get_arg() and func_get_args() to create flexible and dynamic functions that can handle a variable number of arguments.For example, you can use func_num_args() inside a function to determine how many arguments were passed to it and then iterate over the arguments using a loop with func_get_arg() to process each argument individually.The func_num_args() function provides a convenient way to create generic functions that can adapt to different input parameters.It's important to note that func_num_args() can only be used within a user-defined function and not outside of it.

// ⁉ Question 28: What does $GLOBALS mean ?
    
// ℹ Explanation
// In PHP, $GLOBALS is an array that holds references to all variables that are currently defined in the global scope.It allows access to global variables from anywhere in the PHP script.Learn more: http://php.net/manual/en/reserved.variables.globals.php

// ⁉ Question 29: What does $_SERVER mean?

// ℹ Explanation
// In PHP, $_SERVER is an array that contains server information, such as headers, paths, and script locations.It is a superglobal variable accessible from anywhere in the PHP script.Learn more: http://php.net/manual/en/reserved.variables.server.php

// ⁉ Question 30: What does $_FILES mean ?
    
// ℹ Explanation
// In PHP, $_FILES is a superglobal array that holds information about uploaded files, such as file names, temporary locations, and file sizes.It is used when handling file uploads.Learn more: http://php.net/manual/en/reserved.variables.files.php

// ⁉ Question 31: What is the difference between $_FILES['userfile']['name'] and $_FILES['userfile']['tmp_name'] ?
    
// ℹ Explanation
// $_FILES['userfile']['name'] represents the original filename of the uploaded file, while $_FILES['userfile']['tmp_name'] represents the temporary location where the uploaded file is stored on the server.
    
// ⁉ Question 32: How can we get the error when there is a problem uploading a file ?
    
// ℹ Explanation
// The $_FILES['error'] element in the $_FILES array contains the error code associated with the file upload. It helps identify any issues that occurred during the file upload process.

// ⁉ Question 33: How can we change the maximum size of the files to be uploaded ?
    
// ℹ Explanation
// The maximum size of files to be uploaded can be changed by modifying the upload_max_filesize directive in the php.ini configuration file or by using the ini_set() function in PHP code.
    
// ⁉ Question 34:
// What does $_ENV mean ?
    
// ℹ Explanation
// In PHP, $_ENV is an array that contains the values of environment variables passed to the script.It provides access to environment - specific information.Learn more: http://php.net/manual/en/reserved.variables.environment.php

// ⁉ Question 35: What does $_COOKIE mean ?
    
// ℹ Explanation
// In PHP, $_COOKIE is an array that holds cookies sent by the client to the server.It provides access to cookie values.Learn more: http://php.net/manual/en/reserved.variables.cookies.php

// ⁉ Question 36: What does the scope of variables mean ?
    
// ℹ Explanation
// The scope of variables refers to the visibility or accessibility of variables within different parts of the code. It determines where and for how long a variable can be accessed. Learn more: http://php.net/manual/en/language.variables.scope.php

// ⁉ Question 37: What is the difference between the 'BITWISE AND' operator and the 'LOGICAL AND' operator ?
    
//     ℹ Explanation
    
// The 'BITWISE AND' operator(&) performs bitwise comparison of individual bits in two operands, while the 'LOGICAL AND' operator(&&) performs logical comparison of two Boolean expressions.Learn more: http://php.net/manual/en/language.operators.bitwise.php

// ⁉ Question 38: What are the two main string operators ?
    
// ℹ Explanation
// The two main string operators in PHP are concatenation(using the.operator) and interpolation(using variables within double - quoted strings).They allow manipulation and combination of string values.Learn more: http://php.net/manual/en/language.operators.string.php

// ⁉ Question 39: What does the array operator '===' mean ?
    
// ℹ Explanation
// The '===' operator in PHP is the identity comparison operator. It compares both the value and the type of the operands. It returns true if the operands are identical, and false otherwise. Learn more: http://php.net/manual/en/language.operators.comparison.php

// ⁉ Question 40: What is the difference between $a != $b and $a !== $b ?
    
// ℹ Explanation
// The $a != $b expression checks for value equality, while the $a !== $b expression checks for both value and type equality. The strict comparison (!==) ensures that the operands are of the same type. Learn more: http://php.net/manual/en/language.operators.comparison.php

// ⁉ Question 41: What is the goto statement useful for?
    
// ℹ Explanation
// The goto statement in PHP allows you to jump to a specified label within your code. It is generally discouraged as it can lead to less readable and maintainable code. However, in certain scenarios, it can be useful for flow control. Learn more: http://php.net/manual/en/control-structures.goto.php

// ⁉ Question 42: How is it possible to parse a configuration file ?
    
// ℹ Explanation
// Parsing a configuration file in PHP can be done using various methods such as built-in functions(parse_ini_file, json_decode), regular expressions, or third - party libraries like YAML or XML parsers.The choice depends on the format and complexity of the configuration file.
    
// ⁉ Question 43: How can we check if the value of a given variable is a number ?
    
// ℹ Explanation
// To check if the value of a given variable is a number in PHP, you can use the is_numeric() function. The is_numeric() function returns true if the value is numeric or a numeric string, and false otherwise.It can be used to validate user input or check the type of a variable.For example, you can use is_numeric($var) to check if the value of $var is a number.It's important to note that is_numeric() considers both integer and float values as numbers. If you specifically want to check if the value is an integer, you can use the is_int() function. Similarly, if you want to check if the value is a float, you can use the is_float() function.


// ⁉ Question 44: How can we check if the value of a given variable is alphanumeric ?
    
// ℹ Explanation
// To check if the value of a given variable is alphanumeric in PHP, you can use the ctype_alnum() function. The ctype_alnum() function returns true if all characters in the string are alphanumeric(letters or digits), and false otherwise.It can be used to validate user input or check if a variable contains only alphanumeric characters.For example, you can use ctype_alnum($var) to check if the value of $var is alphanumeric.It's important to note that the ctype_alnum() function only works with string values. If you need to check alphanumericity for numeric values, you can use a combination of is_string() and is_numeric() functions.

// ⁉ Question 45: How do I check if a given variable is empty ?
    
// ℹ Explanation
// To check if a given variable is empty in PHP, you can use the empty() function. The empty() function returns true if the variable is considered empty, and false otherwise. It can be used to check if a variable is empty, which means it is either null, an empty string '', 0, '0', false, an empty array [], or a variable that has been unset. For example, you can use empty($var) to check if $var is empty. It's important to note that the empty() function may have different behavior based on PHP version and configuration. In PHP 5, it also considered variables with a value of '0' as empty, but in PHP 7, this behavior changed, and '0' is no longer considered empty. Therefore, it's recommended to use empty() with caution and be aware of its specific behavior in your PHP environment.

// ⁉ Question 46: What does the unset() function mean?

// ℹ Explanation
// The unset() function in PHP is used to destroy a specified variable or array element, freeing up memory.When you use unset() with a variable, it removes the variable from the current symbol table.If you use it with an array element, it removes that specific element from the array.The memory allocated to the variable or array element is released, and the variable or element is no longer accessible.It's important to note that unset() does not free the memory occupied by the variable or array itself, only the memory occupied by the specific variable or element. It's commonly used when you no longer need a variable or want to remove an element from an array to optimize memory usage.
    
// ⁉ Question 47: How is it possible to remove escape characters from a string ?
    
// ℹ Explanation
// To remove escape characters from a string in PHP, you can use the stripslashes() function. The stripslashes() function removes backslashes(\) that are used to escape characters in a string.It's commonly used when working with strings that have been escaped, such as strings retrieved from databases or when dealing with data submitted via forms. For example, you can use stripslashes($string) to remove escape characters from $string. It's important to note that stripslashes() only removes backslashes, and it doesn't unescape any other characters that may have been escaped using other escape sequences. If you need to unescape other characters, you may need to use additional functions or techniques depending on the specific requirements of your application.

// ⁉ Question 48: How can we determine whether a variable is set ?
    
// ℹ Explanation
// In PHP, the isset() function is used to determine whether a variable is set and not null. It returns true if the variable is set and has a non-null value, and false otherwise. Learn more: http://php.net/manual/en/function.isset.php

// ⁉ Question 49: What is the difference between the functions strstr() and stristr()?
// ℹ Explanation
// The strstr() function in PHP returns the portion of a string starting from the first occurrence of a substring, while stristr() is case -insensitive in its search.They differ in case -sensitivity.Learn more: http://php.net/manual/en/function.strstr.php


// ⁉ Question 50: What is the difference between for and foreach ?
    
// ℹ Explanation
// In PHP, for is used for iterative loops with a specified number of iterations, while foreach is used for iterating over arrays or other iterable objects without needing to explicitly define the loop counter or the iteration condition. Learn more: http://php.net/manual/en/control-structures.for.php

// ⁉ Question 51:
// What is the difference between ereg_replace() and eregi_replace()?
// ℹ Explanation
// The ereg_replace() function in PHP performs a case -sensitive regular expression search and replace, while eregi_replace() is case -insensitive.They differ in case -sensitivity and support for regular expressions.Learn more: http://php.net/manual/en/function.ereg-replace.php
    
// ⁉ Question 52: What are the three classes of errors that can occur in PHP?
// ℹ Explanation
// In PHP, the three classes of errors are notices (non-critical issues that should be addressed), warnings (potential issues that might cause problems), and errors (critical issues that prevent script execution). Learn more: http://php.net/manual/en/errorfunc.constants.php

// ⁉ Question 53: What is the difference between characters \ and \x ?
    
// ℹ Explanation
// The character \ is an escape character used to indicate special characters in strings, while \x is used for hexadecimal representation in strings. They have different purposes in string manipulation. Learn more: http://php.net/manual/en/language.types.string.php

// ⁉ Question 54: How can we pass a variable through navigation between pages?
// ℹ Explanation
// In PHP, one way to pass a variable through navigation between pages is by using query strings.Query strings allow you to append data to the URL, which can then be accessed by the target page using the $_GET superglobal array.Learn more: http://php.net/manual/en/reserved.variables.get.php
    
// ⁉ Question 55: Is it possible to extend the execution time of a PHP script ?
    
// ℹ Explanation
// Yes, it is possible to extend the execution time of a PHP script using the set_time_limit() function or by modifying the max_execution_time directive in the PHP configuration. This allows the script to run for a longer duration. Learn more: http://php.net/manual/en/function.set-time-limit.php

// ⁉ Question 56: What is the purpose of the unset() function in PHP ?
    
// ℹ Explanation
// The unset() function in PHP is used to unset a variable, freeing up the memory associated with it.This function can be used to remove a variable or an element of an array.Learn more: http://php.net/manual/en/function.unset.php

// ⁉ Question 57: What is the purpose of the json_encode() function in PHP ?
    
// ℹ Explanation
// The json_encode() function in PHP is used to encode a PHP object or array into a JSON string. JSON is a popular data interchange format, and this function allows you to convert PHP data into a JSON format that can be easily transmitted or stored. Learn more: http://php.net/manual/en/function.json-encode.php

// ⁉ Question 58: What is the purpose of the require_once() function in PHP ?
    
// ℹ Explanation
// The require_once() function in PHP is used to include and evaluate a file in PHP. It ensures that the file is included only once, even if it is referenced multiple times in the code. This is useful for including essential files that should not be duplicated. Learn more: http://php.net/manual/en/function.require-once.php

// ⁉ Question 59: What is the purpose of the strlen() function in PHP ?
    
// ℹ Explanation
// The strlen() function in PHP is used to count the number of characters in a string. It returns the length of the string as an integer. This function is commonly used for input validation or when working with string manipulation and truncation. Learn more: http://php.net/manual/en/function.strlen.php

// ⁉ Question 60: How can you check if a file exists in PHP ?
    
// ℹ Explanation
// You can check if a file exists in PHP using the file_exists() function. This function returns true if the file exists and false otherwise. It can be used to perform file-related operations and handle conditions based on the existence of files. Learn more: http://php.net/manual/en/function.file-exists.php

// ⁉ Question 61: What is the purpose of the array_push() function in PHP ?
    
// ℹ Explanation
// The array_push() function in PHP is used to add one or more elements to the end of an array.It modifies the original array by adding the elements at the end.This function is useful when you need to dynamically append elements to an existing array.Learn more: http://php.net/manual/en/function.array-push.php

// ⁉ Question 62: What is the purpose of the array_merge() function in PHP ?
    
// ℹ Explanation
// The array_merge() function in PHP is used to merge two or more arrays together into a single array. It combines the elements from all the arrays, preserving the keys and their respective values. This function is useful when you need to combine arrays to perform operations on the combined data. Learn more: http://php.net/manual/en/function.array-merge.php

// ⁉ Question 63: What is the purpose of the substr() function in PHP ?
    
// ℹ Explanation
// The substr() function in PHP is used to extract a substring from a string. It takes the string and the starting position as parameters and optionally the length of the substring. This function is commonly used for manipulating strings and extracting specific portions of text. Learn more: http://php.net/manual/en/function.substr.php

// ⁉ Question 64: What is the purpose of the array_search() function in PHP ?
    
// ℹ Explanation
// The array_search() function in PHP is used to search for a specific value in an array and return the corresponding key if found.It performs a linear search through the array and returns the key of the first matching element or false if the value is not found.Learn more: http://php.net/manual/en/function.array-search.php

// ⁉ Question 65: What is the purpose of the array_keys() function in PHP ?
    
// ℹ Explanation
// The array_keys() function in PHP is used to retrieve all the keys from an array and return them in a new array.It extracts and returns the keys of the associative or indexed array.This function is useful when you need to work with only the keys of an array.Learn more: http://php.net/manual/en/function.array-keys.php

// ⁉ Question 66: What is the purpose of the array_unique() function in PHP ?
    
// ℹ Explanation
// The array_unique() function in PHP is used to remove duplicate values from an array and return the resulting array. It removes any duplicate values, preserving the keys of the original array. This function is useful when you want to work with unique values in an array. Learn more: http://php.net/manual/en/function.array-unique.php

// ⁉ Question 67: What is the purpose of the array_reverse() function in PHP?

// ℹ Explanation
// The array_reverse() function in PHP is used to reverse the order of elements in an array.It returns a new array with the elements in reverse order.This function is useful when you need to traverse an array in reverse order or change the order of elements.Learn more: http://php.net/manual/en/function.array-reverse.php

// ⁉ Question 68: What is the purpose of the is_numeric() function in PHP ?
    
// ℹ Explanation
// The is_numeric() function in PHP is used to check if a value is numeric. It returns true if the value is a number or a numeric string and false otherwise. This function is useful for validating user input or performing numeric operations on values. Learn more: http://php.net/manual/en/function.is-numeric.php

// ⁉ Question 69: Which of the following best describes PHP ?
    
// ℹ Explanation
// PHP is a powerful server-side scripting language designed for web development but also used as a general-purpose programming language. This means PHP code is executed on the server, generating HTML which is then sent to the client's browser. PHP can create, open, read, write, delete, and close files on the server, collect form data, send and receive cookies, and much more. For further information, check: https://www.php.net/intro-php.php

// ⁉ Question 70: PHP is a server-side ______ language.

// ℹ Explanation
// PHP is primarily a server-side scripting language. It is also capable of object-oriented and procedural programming, but it is most often used for scripting on the server side. Learn more: https://www.php.net/manual/en/intro-whatcando.php

// ⁉ Question 71: PHP can be embedded within HTML code.
    
// ℹ Explanation
// PHP can be embedded directly into HTML. The server interprets the PHP code and outputs the result as HTML to the client's browser. Learn more: https://www.php.net/manual/en/language.basic-syntax.phpmode.php

// ⁉ Question 72: PHP is a client - side scripting language.
    
// ℹ Explanation
// PHP is primarily a server-side scripting language. The PHP code is processed on the server, and the result is sent as HTML to the client's browser. Learn more: https://www.php.net/manual/en/intro-whatcando.php

// ⁉ Question 73: Which of the following are advantages of using PHP?
    
// ℹ Explanation
// One of the key advantages of PHP is its simplicity. PHP is widely recognized as easy to learn and use, which makes it an excellent choice for beginners as well as experienced programmers. Learn more: https://www.php.net/manual/en/intro-why.php

// ⁉ Question 74: You want to embed PHP code within your HTML.How would you do this ?
    
// ℹ Explanation

// PHP code can be embedded within HTML code using the <?php ... ?> tags. The PHP interpreter will execute any code within these tags when the page is loaded. Learn more: https://www.php.net/manual/en/language.basic-syntax.phptags.php

// ⁉ Question 75: Which of the following is necessary to run PHP scripts on your local machine ?
    
// ℹ Explanation
// In order to run PHP scripts on your local machine, you need a PHP interpreter. The PHP interpreter processes the PHP code and generates HTML, which is then sent to the browser. If you're developing locally, this is usually part of a software bundle like XAMPP or MAMP, which includes PHP along with other necessary software. Learn more: https://www.php.net/manual/en/install.php.

// ⁉ Question 76: The PHP files should be saved with a ______ extension for the server to parse them.

// ℹ Explanation
// PHP files should be saved with a .php extension. The PHP interpreter processes files with this extension, executing any PHP code contained within and sending the resulting output (usually HTML) to the client's browser. Learn more: https://www.php.net/manual/en/tutorial.firstpage.php

// ⁉ Question 77: PHP requires a web server to run PHP scripts.
    
// ℹ Explanation
// PHP scripts are typically executed by a web server, which then sends the output to the client's browser. It is possible to run PHP scripts from the command line for certain tasks, but for web development, a web server is needed. Learn more: https://www.php.net/manual/en/features.commandline.php

// ⁉ Question 78: Comments in PHP can be used to leave notes in the code for other developers.
    
// ℹ Explanation
// Absolutely! Comments in PHP are valuable for leaving notes, ℹ Explanations, or reminders in the code for other developers. This makes the code more readable and understandable. Comments are ignored by the PHP interpreter and have no impact on the execution of the script. They serve as annotations and documentation for better collaboration among developers. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 79: The PHP interpreter executes comments as part of the script.
    
// ℹ Explanation
// This statement is false. The PHP interpreter completely ignores comments during the script's execution. Comments are purely for the developers' benefit and do not have any impact on the functioning of the code. They are not executed as part of the script and are not sent to the client's browser. It's important to remember that comments are solely used for documentation purposes and have no effect on the actual program logic. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 80: Which of the following are reasons to use comments in PHP code ?
    
// ℹ Explanation
// Comments serve various purposes in PHP code.They can be used to document code, making it easier for developers to understand and maintain the codebase.Comments can also explain complex logic or algorithms to improve comprehension.Additionally, comments can be used to temporarily disable a block of code for testing purposes.All of the given options are valid reasons to use comments in PHP code.
    
// ⁉ Question 81: Which of the following are valid ways to add comments to PHP code ?
    
// ℹ Explanation
// PHP supports different ways to add comments.Single - line comments can be denoted with double slashes(//) or a hash symbol (#) at the beginning of a line. Multi-line comments can be enclosed between /* and */. All of the provided options are valid ways to add comments to PHP code.
    
// ⁉ Question 82: Which of the following are true about comments in PHP ?
    
// ℹ Explanation
// Comments in PHP are ignored by the PHP interpreter during script execution. They are purely for developers' benefit and are not sent to the client's browser. Comments can be used to leave notes or ℹ Explanations for other developers. The last option is incorrect because comments do not alter the logic of the PHP code; they only provide additional information or instructions to the developers.

// ⁉ Question 83: Which of the following are reasons to use comments in PHP code ?
    
// ℹ Explanation
// Comments serve various purposes in PHP code. They can be used to document code, making it easier for developers to understand and maintain the codebase. Comments can also explain complex logic or algorithms to improve comprehension. Additionally, comments can be used to temporarily disable a block of code for testing purposes. All of the given options are valid reasons to use comments in PHP code. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php


// ⁉ Question 84: Which of the following are valid ways to add comments to PHP code ?
    
// ℹ Explanation
// PHP supports different ways to add comments. Single-line comments can be denoted with double slashes (//) or a hash symbol (#) at the beginning of a line. Multi-line comments can be enclosed between /* and */. All of the provided options are valid ways to add comments to PHP code. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 85: Which of the following are true about comments in PHP?

// ℹ Explanation
// Comments in PHP are ignored by the PHP interpreter during script execution. They are purely for developers' benefit and are not sent to the client's browser. Comments can be used to leave notes or ℹ Explanations for other developers. The last option is incorrect because comments do not alter the logic of the PHP code; they only provide additional information or instructions to the developers. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 86: How do PHP statements end ?
    
// ℹ Explanation
// In PHP, statements end with a semicolon (;). The semicolon is a statement separator, allowing you to put multiple statements on the same line if desired. It's also necessary to end a statement before starting a new line with a new statement. Learn more: https://www.php.net/manual/en/language.basic-syntax.instruction-separation.php

// ⁉ Question 87: How are comments in PHP denoted ?
    
// ℹ Explanation
// PHP supports several ways of denoting comments. Single-line comments can be started with // or #, while multi-line comments or block comments are enclosed in /* and */. This makes it easy to include notes or temporarily disable code. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php



// ⁉ Question 88: PHP code is enclosed in ______ and ______ tags.
    
// ℹ Explanation
// PHP code is typically enclosed in <?php and ?> tags. When the PHP interpreter encounters these tags, it knows to start and stop interpreting the code between them as PHP code. This allows you to embed PHP code in an HTML file. Learn more: https://www.php.net/manual/en/language.basic-syntax.phptags.php

// ⁉ Question 89: In PHP, a line of code is terminated with a ______.
    
// ℹ Explanation
// In PHP, a line of code is terminated with a semicolon (;). The semicolon is a statement separator and it's necessary to end a statement before starting a new line with a new statement. This makes the code easier to read and understand. Learn more: https://www.php.net/manual/en/language.basic-syntax.instruction-separation.php


// ⁉ Question 90: PHP allows for both single - line and multi - line comments.
    
// ℹ Explanation
// PHP does support both single-line and multi-line comments. Single-line comments can start with // or #, while multi-line comments are enclosed between /* and */. Comments are a critical part of any programming language, allowing developers to add context or ℹ Explanation to their code, or to prevent certain lines of code from being executed without deleting them. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 91: Which of the following are valid ways to denote a comment in PHP ?
    
// ℹ Explanation
// In PHP, there are two types of comment syntax. The first type, //, is for single-line comments. The second type, /.../, is for multiple-line comments. HTML-style comments (< !--...-- >) are not recognized by PHP. So, both /* Comment */ and // Comment are valid ways to denote a comment in PHP. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 92: You want to include a note in your PHP code for other developers, but you don't want this note to affect the execution of the script. How would you do this?

// ℹ Explanation
// In PHP, you can include notes or annotations in your code using comments. Comments in PHP start with // for a single-line comment or /* and end with */ for multi-line comments. Comments are ignored by the PHP interpreter, so they don't affect the execution of your script. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 93: How is a single - line comment denoted in PHP ?
    
// ℹ Explanation
// In PHP, single-line comments are denoted by either double slashes (//) or a hash symbol (#). When PHP encounters these symbols, it ignores the rest of the line. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 94: How is a multi - line comment denoted in PHP ?
    
// ℹ Explanation
// Multi-line comments in PHP are denoted by /* at the beginning and */ at the end. This allows you to create comments that span multiple lines without having to add a comment symbol at the beginning of each line. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 95: Which of the following is not a valid way to denote a comment in PHP ?
    
// ℹ Explanation
// In PHP, comments are denoted by either double slashes (//), a hash symbol (#), or by /* at the beginning and */ at the end for multi-line comments. HTML-style comments (<!--...-->) are not recognized by PHP. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 96: To make a single-line comment in PHP, you can use ______ or ______ at the beginning of the line.

// ℹ Explanation
// Single-line comments in PHP can be written using either double slashes (//) or a hash symbol (#) at the beginning of the line. The other options are not used for single-line comments. In PHP, everything after // or # on a line is considered a comment and is ignored by the PHP interpreter. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 97: Multi - line comments in PHP start with ______ and end with ______.
    
// ℹ Explanation
// Multi-line comments in PHP start with /* and end with */. Everything between these symbols is considered a comment, even if it spans multiple lines. This is a helpful feature for when you want to add longer ℹ Explanations or temporarily remove a block of code from execution. The other options are not used for multi-line comments in PHP. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

// ⁉ Question 98: Comments in PHP code are ignored by the ______.
    
// ℹ Explanation
// Comments in PHP code are ignored by the PHP interpreter. This means that they don't affect the execution of the code, and they are not sent to the client's web browser. They are solely for the benefit of people reading the code. Comments can be used to explain what your code does, why it does it, and anything else that might be helpful to know. The other options, user, web browser, and web server, all see the results of the PHP code after it has been interpreted, but they don't see the comments. Learn more: https://www.php.net/manual/en/language.basic-syntax.comments.php

