// Question 1: In PHP, you can define a constant in a class using the const keyword like const CONSTANT_NAME = ______.
    
// Explanation
// In PHP, you can define a constant in a class using the const keyword followed by the constant name, the assignment operator =, and the desired value.For example: const CONSTANT_NAME = value; Constants are used to store values that remain the same throughout the execution of a script and cannot be changed once defined.They provide a convenient way to define and use fixed values within a class. Refer to: http://php.net/manual/en/language.constants.php

// Question 2: You can access a constant of a PHP class using the class name followed by the scope resolution operator(:: ) and the constant name like ClassName:: CONSTANT_NAME.
    
// Explanation
// In PHP, you can access a constant of a class using the class name followed by the scope resolution operator:: and the constant name.For example: ClassName::CONSTANT_NAME This allows you to directly reference the value of a constant defined within a class without the need for object instantiation.The scope resolution operator:: is used to access static members, including constants, of a class. To learn more, visit: http://php.net/manual/en/language.oop5.constants.php

// Question 3: The value of a class constant in PHP cannot be changed once it is ______.
    
// Explanation
// The value of a class constant in PHP cannot be changed once it is assigned.Once a constant is defined with a specific value, it remains the same throughout the execution of the script.Constants are considered as read - only values.It's important to note that attempting to modify a constant's value will result in a runtime error.To maintain the immutability of constant values, it is recommended to define them with the desired value and avoid any attempts to modify them later.To know more, refer to: http://php.net/manual/en/language.constants.php

// Question 4: A constant in a PHP class is defined using the const keyword.
    
// Explanation
// A constant in a PHP class is indeed defined using the const keyword.It allows you to define a constant within a class by specifying the constant name, the assignment operator =, and the desired value.For example: const CONSTANT_NAME = value; Constants are used to store values that remain the same throughout the execution of a script and cannot be changed once defined.They provide a convenient way to define and use fixed values within a class. Refer to: http://php.net/manual/en/language.constants.php

// Question 5: A constant of a PHP class can be accessed using the class name followed by the scope resolution operator(:: ) and the constant name.
    
// Explanation
// A constant of a PHP class can indeed be accessed using the class name followed by the scope resolution operator:: and the constant name.For example: ClassName::CONSTANT_NAME This allows you to directly reference the value of a constant defined within a class without the need for object instantiation.The scope resolution operator:: is used to access static members, including constants, of a class. To learn more, visit: http://php.net/manual/en/language.oop5.constants.php


// Question 6: The value of a class constant in PHP can be changed after it is defined.
    
// Explanation
// The value of a class constant in PHP cannot be changed after it is defined.Once a constant is assigned a specific value, it remains the same throughout the execution of the script.Constants are considered as read - only values.It's important to note that attempting to modify a constant's value will result in a runtime error.To maintain the immutability of constant values, it is recommended to define them with the desired value and avoid any attempts to modify them later.To know more, refer to: http://php.net/manual/en/language.constants.php

// Question 7: What are some of the uses of class constants in PHP OOP ?
    
// Explanation
// Class constants in PHP OOP have various uses, including storing configuration values that remain constant throughout the execution of the script, defining error codes for consistent error handling, and creating enum-like values to represent a fixed set of options.Class constants provide a way to encapsulate and reuse such values within a class or across different instances of the class. For further information, visit: http://php.net/manual/en/language.oop5.constants.php

// Question 8: What are some best practices when defining and using class constants in PHP ?
    
// Explanation
// When defining and using class constants in PHP, it is recommended to follow some best practices.These include using uppercase naming conventions to differentiate constants from other class members, documenting the purpose and usage of constants to enhance code readability, and accessing class constants statically using the class name followed by the scope resolution operator(:: ).These practices contribute to code clarity, maintainability, and consistency.To learn more, see: http://php.net/manual/en/language.oop5.constants.php

// Question 9: What are the differences between a class constant and a class variable in PHP ?
    
// Explanation
// Class constants and class variables in PHP have some fundamental differences.Constants are immutable, meaning their values cannot be changed after they are defined, while variables can be modified throughout the execution of a script.Additionally, constants are considered static and shared across all instances of the class, whereas variables can have different values for each instance of the class. Understanding these distinctions is crucial when deciding whether to use a constant or a variable based on the desired behavior and usage requirements.To know more, refer to: http://php.net/manual/en/language.oop5.constants.php, http://php.net/manual/en/language.oop5.visibility.php

// Question 10: You are writing a PHP script and you need to define a constant in a class. How would you do this ?
    
// Explanation
// To define a constant in a class in PHP, you can use the const keyword followed by the constant name and its value.For example: const CONSTANT_NAME = value; Constants in a class are associated with the class itself and can be accessed using the class name without the need for object instantiation.They provide a way to store values that remain constant throughout the execution of the script.Refer to: http://php.net/manual/en/language.constants.php

// Question 11: You have a PHP script and you need to access a constant of a class. How would you do this ?
    
// Explanation
// To access a constant of a class in PHP, you can use the class name followed by the scope resolution operator:: and the constant name.For example: ClassName::CONSTANT_NAME This allows you to directly reference the value of a constant defined within a class without the need for object instantiation.The self keyword can also be used to access the constant within the class itself. To learn more, visit: http://php.net/manual/en/language.oop5.constants.php

// Question 12: You need to understand if the value of a class constant in PHP can be changed after it is defined.What would be your conclusion ?
    
// Explanation
// The value of a class constant in PHP cannot be changed after it is defined. Once a constant is assigned a specific value, it remains the same throughout the execution of the script. Constants are considered as read-only values. Attempting to modify a constant's value will result in a runtime error. To maintain the immutability of constant values, it is recommended to define them with the desired value and avoid any attempts to modify them later. To know more, refer to: http://php.net/manual/en/language.constants.php
