// Question 1: What does accessing a class via :: mean ?
    
// Explanation
// Accessing a class via :: represents static access, allowing you to access static properties or invoke static methods of a class. Learn more: http://php.net/manual/en/language.oop5.static.php

// Question 2: In PHP, are objects passed by value or by reference ?
    
// Explanation
// In PHP, objects are passed by value.When you assign or pass an object to a variable or a function, a copy of the object is created.Learn more: http://php.net/manual/en/language.oop5.references.php

// Question 3: Are Parent constructors called implicitly inside a class constructor?

// Explanation
// Parent constructors are not called implicitly inside a class constructor in PHP.You need to explicitly call the parent constructor using parent:: __construct().Learn more: http://php.net/manual/en/language.oop5.decon.php

// Question 4: What’s the difference between __sleep and __wakeup ?
    
// Explanation
// __sleep is called before an object is serialized, allowing you to define which data should be serialized.__wakeup is called after unserialization.Learn more: http://php.net/manual/en/language.oop5.magic.php


// Question 5: How can we determine whether a PHP variable is an instantiated object of a certain class?

// Explanation
// To determine if a PHP variable is an instantiated object of a certain class, you can use the instanceof operator. It checks if an object is an instance of a specific class or has a class in its inheritance hierarchy. Learn more: http://php.net/manual/en/language.operators.type.php