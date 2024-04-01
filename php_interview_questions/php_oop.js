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


// Question 6: In PHP OOP, you can call a static method using the class name followed by the scope resolution operator(:: ) and the method name like ClassName:: MethodName().
    
// Explanation
// In PHP OOP, you can call a static method using the class name followed by the scope resolution operator:: and the method name.The syntax for calling a static method is: ClassName:: MethodName().This allows you to directly access the static method without creating an instance of the class. The scope resolution operator:: is used to refer to the static method within the class definition.

// Question 7: A static method in PHP OOP is a method that belongs to the class itself rather than an instance of the class.

// Explanation
// A static method in PHP OOP is a method that belongs to the class itself rather than an instance of the class. It can be accessed using the class name without creating an object of the class.

// Question 8: In PHP, a static method is defined using the static keyword.
    
// Explanation
// In PHP, a static method is defined using the static keyword.The static keyword is used to declare a method as static, and it can be accessed without creating an object of the class.

// Question 9: A static method in PHP can be called without creating an instance of the class.

// Explanation
// A static method in PHP can be called without creating an instance of the class. Since it belongs to the class itself, it can be accessed using the class name directly.
    
// Question 10: What are some of the uses of static methods in PHP OOP ?
    
// Explanation
// Static methods in PHP OOP have various uses.They can be used to create utility functions that are not specific to any instance, access shared data among all instances of the class, and implement the Singleton pattern, where only one instance of a class can exist.Static methods provide a way to encapsulate functionality that doesn't rely on specific object state.

// Question 11: What are the differences between a static method and a regular method in PHP ?
    
// Explanation
// There are several differences between static methods and regular methods in PHP.Static methods belong to the class itself and can be called using the class name without creating an instance, while regular methods belong to an instance of the class and require an object.Static methods cannot access non - static properties or methods directly, while regular methods can.They serve different purposes based on the specific requirements of the application.
    
// Question 12: What are some common practices in PHP when using static methods in OOP ?
    
// Explanation
// When using static methods in PHP OOP, it is recommended to use them sparingly and only for functionality that doesn't rely on object state. Excessive use of static methods can make code less modular and harder to test. It's important to ensure that static methods are stateless and do not modify shared data, as it can lead to unexpected behavior in a multi - threaded or concurrent environment.Following these practices helps maintain the maintainability and flexibility of the codebase.
    
// Question 13: You are writing a PHP script and you need to define a static method.How would you do this ?
    
// Explanation
// To define a static method in PHP, you would use the static keyword before the method declaration.This indicates that the method belongs to the class itself rather than an instance of the class. Static methods can be accessed using the class name without creating an object of the class.

// Question 14: You have a PHP script and you need to call a static method.How would you do this ?
    
// Explanation
// To call a static method in PHP, you would use the class name followed by the:: operator and the method name.This allows you to access the static method without creating an instance of the class. Static methods are invoked directly on the class itself, not on an object.
    
// Question 15: You need to understand the purpose and usage of static methods in PHP OOP.What would be your conclusion ?
    
// Explanation
// After understanding the purpose and usage of static methods in PHP OOP, one would conclude that static methods provide functionality that belongs to the class itself, rather than instances of the class. They can be accessed without creating objects and are useful for utility functions, accessing shared data, and implementing design patterns.However, it is important to use static methods sparingly, ensuring they are stateless and don't modify shared data excessively. Following best practices when using static methods helps maintain code modularity and testability.

// Question 16: What are some of the uses of traits in PHP OOP ?
    
// Explanation
// Traits in PHP OOP have various uses.They provide code reuse and composition by allowing you to include reusable blocks of code in multiple classes.Traits also help in resolving the limitations of multiple inheritance in PHP, as they can be used to incorporate behaviors from multiple sources into a single class.Additionally, traits are useful for implementing cross - cutting concerns, such as logging or caching, that can be shared among different classes.
    
// Question 17: What are the differences between a trait and a class in PHP ?
    
// Explanation
// There are several differences between traits and classes in PHP.A trait cannot be instantiated on its own; it needs to be included in a class. In contrast, a class can be instantiated to create objects.Additionally, a class can have its own properties and constants, while a trait cannot have its own properties directly.Moreover, a class can implement multiple interfaces, whereas a trait cannot directly implement interfaces.These distinctions highlight the different roles and purposes of traits and classes in PHP OOP.
    
// Question 18: What are some common practices in PHP when using traits in OOP ?
    
// Explanation
// When using traits in PHP OOP, it is common practice to use them to include common functionality in multiple classes, enhancing code reuse and organization.However, it's important to avoid excessive use of traits to prevent code complexity and maintain clarity. Additionally, choosing meaningful and descriptive names for traits helps developers understand their purpose and usage in a codebase. Following these practices improves code maintainability and readability when working with traits.

// Question 19: You are writing a PHP script and you need to define a trait.How would you do this ?
    
// Explanation
// To define a trait in PHP, you would use the trait keyword followed by the trait name and its definition.Traits allow you to define reusable blocks of code that can be included in multiple classes.
    
// Question 20: You have a PHP script and you need to create a class that uses a trait.How would you do this ?
    
// Explanation
// To create a class that uses a trait in PHP, you would use the use keyword followed by the trait name.This allows you to include the functionality defined in the trait within the class. The use keyword is used to import the trait into the class and make its methods and properties available for use.
    
// Question 21: You need to understand the purpose and usage of traits in PHP OOP.What would be your conclusion ?
    
// Explanation
// After understanding the purpose and usage of traits in PHP OOP, one would conclude that traits provide a powerful mechanism to reuse code across multiple classes, promoting better code organization, reducing code duplication, and enhancing code modularity.Traits are valuable for incorporating shared functionality, overcoming the limitations of multiple inheritance, and improving code maintainability.Following best practices, such as using traits for common functionality, avoiding excessive use, and selecting meaningful names, helps ensure effective usage of traits.
    
// Question 22: What is a static method in the context of PHP OOP ?
    
// Explanation
// In PHP OOP, a static method is a method that belongs to the class itself, rather than an instance of the class. It can be accessed using the class name without creating an object of the class. Static methods are shared among all instances of the class and do not have access to non - static properties or methods directly.They are commonly used for utility functions or when the method doesn't rely on specific object state.

// Question 23: How do you define a static method in PHP ?
    
// Explanation
// To define a static method in PHP, you would use the static keyword before the method name.This keyword indicates that the method belongs to the class itself rather than an instance of the class. Static methods can be accessed using the class name without creating an object of the class.

// Question 24: How do you call a static method in PHP ?
    
// Explanation
// To call a static method in PHP, you would use the class name followed by the:: operator and the method name.This syntax allows you to access the static method without creating an instance of the class. Static methods are invoked directly on the class itself, not on an object.
    
// Question 25: A static method in PHP OOP is a method that belongs to the class itself rather than an instance of the class. It can be called without creating an ______ of the class.

// Explanation
// A static method in PHP OOP can be called without creating an instance of the class. Since it belongs to the class itself, it can be accessed using the class name directly, without the need to instantiate an object.
    
// Question 26: In PHP, you can define a static method using the static keyword like public static function FunctionName() { ______ }.
// Explanation
// In PHP, you can define a static method using the static keyword. The syntax for defining a static method is: public static function FunctionName() { // method implementation }. The static keyword is placed before the function name, indicating that it is a static method. You can then provide the implementation of the method inside the function body.
