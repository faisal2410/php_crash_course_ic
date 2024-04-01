// Question 1: What is an abstract class in the context of PHP OOP ?
    
// Explanation
// In PHP OOP, an abstract class is a class that cannot be instantiated directly.It serves as a blueprint for other classes and provides common functionality and structure that can be inherited by its child classes.An abstract class can have abstract methods, which are declared but not implemented in the abstract class itself. Child classes that inherit from the abstract class must implement the abstract methods.For more details, visit: http://php.net/manual/en/language.oop5.abstract.php

// Question 2: How do you define an abstract class in PHP ?
    
// Explanation
// To define an abstract class in PHP, you use the abstract keyword followed by the class keyword and the name of the class. For example: abstract class ClassName. This indicates that the class is intended to be an abstract class. Abstract classes can have abstract methods as well as non - abstract methods.Remember that abstract methods are declared but not implemented in the abstract class itself and must be implemented in the child classes that inherit from the abstract class. To learn more, see: http://php.net/manual/en/language.oop5.abstract.php

// Question 3: Can an instance of an abstract class be created in PHP ?
    
// Explanation
// No, an instance of an abstract class cannot be created in PHP.An abstract class cannot be instantiated directly because it is incomplete and serves as a blueprint for other classes.Abstract classes can only be inherited by child classes, which must provide implementations for the abstract methods.Attempting to create an instance of an abstract class will result in a runtime error.To utilize the functionality of an abstract class, you need to create an instance of a concrete child class that extends the abstract class.To know more, refer to: http://php.net/manual/en/language.oop5.abstract.php
    
// Question 4: An abstract class in PHP OOP is a class that cannot be instantiated and is meant to be ______ by other classes.
    
// Explanation
// An abstract class in PHP OOP is indeed a class that cannot be instantiated directly and is meant to be inherited by other classes.It serves as a blueprint or template for creating child classes that extend the abstract class. Abstract classes provide common functionality and structure that can be shared among multiple related classes.By inheriting from an abstract class, child classes can utilize the defined methods and properties and add their own specific implementations.To learn more, visit: http://php.net/manual/en/language.oop5.abstract.php

// Question 5: In PHP, you can define an abstract class using the abstract keyword like abstract class ClassName { ______ }.

// Explanation
// In PHP, to define an abstract class, you can indeed use the abstract keyword followed by the class keyword and the name of the class. For example: abstract class ClassName { }. Within the abstract class, you can define both abstract methods(without implementation) and non - abstract methods(with implementation).Abstract methods serve as placeholders that must be implemented in the child classes that inherit from the abstract class. To learn more, see: http://php.net/manual/en/language.oop5.abstract.php

// Question 6: In PHP OOP, an instance of an abstract class cannot be ______.
    
// Explanation
// An instance of an abstract class cannot be instantiated in PHP OOP.This is because an abstract class is incomplete and serves as a blueprint or template for other classes.Abstract classes can only be inherited by child classes, which must provide implementations for the abstract methods.Attempting to instantiate an abstract class directly will result in a runtime error.To utilize the functionality of an abstract class, you need to create an instance of a concrete child class that extends the abstract class.To know more, refer to: http://php.net/manual/en/language.oop5.abstract.php
    
// Question 7: An abstract class in PHP OOP is a class that cannot be instantiated and is meant to be extended by other classes.
    
// Explanation
// An abstract class in PHP OOP is indeed a class that cannot be instantiated directly and is intended to be extended by other classes.It serves as a blueprint or base class from which other classes can be derived.Abstract classes provide common functionality and structure that can be inherited and specialized by their child classes.By extending an abstract class, child classes can inherit its properties and methods and can also implement their own additional functionality.For further information, visit: http://php.net/manual/en/language.oop5.abstract.php

// Question 8: In PHP, an abstract class is defined using the abstract keyword.
    
// Explanation
// In PHP, an abstract class is indeed defined using the abstract keyword.This keyword is placed before the class keyword and is used to indicate that the class is intended to be an abstract class. Abstract classes are meant to be inherited by other classes and cannot be instantiated directly.Abstract classes can contain abstract methods(without implementation) as well as non - abstract methods.The abstract keyword is essential for properly defining an abstract class in PHP.For more details, refer to: http://php.net/manual/en/language.oop5.abstract.php

// Question 9: An instance of an abstract class can be created in PHP.
    
// Explanation
// No, an instance of an abstract class cannot be created in PHP.Abstract classes are incomplete by nature and are intended to be extended by other classes.They serve as blueprints or templates for child classes.Abstract classes cannot be instantiated directly because they may contain abstract methods that need to be implemented in the child classes.Attempting to create an instance of an abstract class will result in a runtime error.To utilize the functionality of an abstract class, you need to create an instance of a concrete child class that extends the abstract class.To know more, refer to: http://php.net/manual/en/language.oop5.abstract.php
    
// Question 10: What are some of the uses of abstract classes in PHP OOP ?
    
// Explanation
// Abstract classes in PHP OOP have several uses, including providing common functionality and structure that can be inherited by child classes, defining interfaces for a group of related classes to implement, and implementing traits to share code among multiple classes.Abstract classes allow you to create a hierarchy of classes and establish a contract for the derived classes.They provide a level of abstraction and reusability in object - oriented programming.For further details, visit: http://php.net/manual/en/language.oop5.abstract.php

// Question 11: What are the differences between an abstract class and a regular class in PHP ?
    
// Explanation
// Abstract classes and regular classes in PHP have some notable differences.Abstract classes cannot be instantiated directly, whereas regular classes can be instantiated to create objects.Abstract classes are meant to be extended by other classes, while regular classes can be instantiated and used independently.Abstract classes may contain abstract methods without implementation, while regular classes typically have all their methods implemented.These distinctions define the nature and purpose of each type of class in PHP OOP.To know more, refer to: http://php.net/manual/en/language.oop5.abstract.php

// Question 12: What are some common practices in PHP when using abstract classes in OOP ?
    
// Explanation
// When using abstract classes in PHP OOP, some common practices include providing clear and meaningful names for the abstract classes, implementing interfaces to define the contract that derived classes must follow, and documenting the intended usage and guidelines for extending the abstract classes.These practices contribute to code readability, maintainability, and the understanding of how to use and extend the abstract classes effectively.To learn more, see: http://php.net/manual/en/language.oop5.abstract.php

// Question 13: You are writing a PHP script and you need to define an abstract class. How would you do this ?
    
// Explanation
// To define an abstract class in PHP, you can use the abstract keyword followed by the class keyword and the name of the class. For example: abstract class ClassName { } The abstract keyword indicates that the class is intended to be an abstract class. Abstract classes cannot be instantiated directly and are meant to be extended by other classes.They can contain abstract methods(without implementation) and non - abstract methods(with implementation).Refer to: http://php.net/manual/en/language.oop5.abstract.php

// Question 14: You have a PHP script and you need to extend an abstract class. How would you do this ?
    
// Explanation
// To extend an abstract class in PHP, you can use the extends keyword followed by the name of the abstract class. For example: class ChildClass extends AbstractClass { } The extends keyword indicates that the child class inherits the properties and methods of the abstract class. The child class can provide its own implementations for abstract methods and can also override non - abstract methods if needed.By extending the abstract class, the child class inherits the structure and functionality defined in the abstract class. For more details, visit: http://php.net/manual/en/language.oop5.abstract.php

// Question 15: You need to understand if an instance of an abstract class can be created in PHP.What would be your conclusion ?
    
// Explanation
// No, an instance of an abstract class cannot be created in PHP. Abstract classes are incomplete and serve as blueprints or templates for other classes. They cannot be instantiated directly because they may contain abstract methods that need to be implemented in the child classes. Attempting to create an instance of an abstract class will result in a runtime error. To utilize the functionality of an abstract class, you need to create an instance of a concrete child class that extends the abstract class. To know more, refer to: http://php.net/manual/en/language.oop5.abstract.php
