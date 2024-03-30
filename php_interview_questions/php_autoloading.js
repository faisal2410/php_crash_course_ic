// Question 1:
// What is the concept of autoloading in PHP? How does it work and how can you implement it in your code?

// Explanation
// Autoloading in PHP eliminates the need to manually include all the required class files in your code. It dynamically loads the class files on-demand, improving code organization and reducing manual effort. Autoloading can be implemented by registering an autoloader function using the spl_autoload_register() function. This function allows you to define your own autoloader logic, which is triggered whenever a class is accessed but not yet defined. For more information, you can refer to the PHP documentation: http://php.net/manual/en/language.oop5.autoload.php