// Question 1:What is the difference between abstract classes and interfaces in PHP? When would you use each?

// Explanation
// Abstract classes in PHP can have method implementations, allowing you to define common behavior for its subclasses.Interfaces, on the other hand, only define method signatures that must be implemented by classes.Abstract classes are used when you want to create a base class that provides common functionality, while interfaces are used to define a contract that multiple classes can adhere to.Knowing when to use each depends on the specific requirements of your application.For more information, you can refer to the PHP documentation: http://php.net/manual/en/language.oop5.abstract.php, http://php.net/manual/en/language.oop5.interfaces.php

// Question 2: What are traits in PHP ? How do they differ from classes and interfaces, and in what situations would you use them ?
    
// Explanation
// Traits in PHP provide a way to reuse code across multiple classes without requiring multiple inheritance.They are similar to classes, but unlike classes, traits cannot be instantiated on their own.Traits can be used to group and share common sets of methods within classes, allowing for code reuse.Traits differ from interfaces as they can provide method implementations, whereas interfaces only define method signatures.Traits are useful in situations where multiple classes need to share common functionality, but multiple inheritance is not possible or desired.For more information, you can refer to the PHP documentation: http://php.net/manual/en/language.oop5.traits.php

// Question 3: Explain the concept of method chaining in PHP.How does it enhance code readability and simplify object - oriented programming ?
    
// Explanation
// Method chaining in PHP allows you to invoke multiple methods on an object in a single line, improving code readability and simplifying object-oriented programming. By returning the object itself from each method call, you can chain subsequent method calls directly. This leads to more concise and expressive code, as it reduces the need for temporary variables or multiple lines of code. Method chaining is commonly used in libraries and frameworks to provide a fluent and intuitive interface for interacting with objects. For more information, you can refer to the PHP documentation: http://php.net/manual/en/language.oop5.magic.php

