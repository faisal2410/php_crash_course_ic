// Question 1: What are Regular Expressions in PHP ?
    
// Explanation
// Regular expressions in PHP are a sequence of characters that define a search pattern.They are powerful tools used for pattern matching and manipulating strings.Regular expressions are based on a formal language and provide a concise and flexible way to search, extract, and manipulate text data.They can be used to validate inputs, perform string substitutions, extract data from strings, and more.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 2: How do you use Regular Expressions in PHP ?
    
// Explanation
// In PHP, you can use regular expressions by using the preg_match() function to match a pattern against a string.The preg_match() function takes two parameters: the pattern to match and the string to search.It returns true if the pattern is found in the string and false otherwise.Regular expressions are defined using special characters and modifiers that specify the pattern to search for.The preg_match() function allows you to perform various operations based on the matched pattern, such as extracting data or validating input.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 3: What is a common use case for Regular Expressions in PHP ?
    
// Explanation
// A common use case for regular expressions in PHP is validating user input, such as email addresses or phone numbers.Regular expressions provide a powerful and flexible way to define patterns for validating and ensuring the correctness of user - provided data.By using regular expressions, you can check if an input matches a specific pattern, such as the format of an email address or a phone number.This helps in maintaining data integrity and preventing incorrect or malicious inputs.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 4: In PHP, Regular Expressions are sequences of characters that form a search pattern, used mainly for ______.
    
// Explanation
// In PHP, Regular Expressions are sequences of characters that form a search pattern, used mainly for text manipulation.Regular expressions provide a powerful and flexible way to search, match, and manipulate strings based on specific patterns.They can be used for tasks such as validating inputs, extracting data, performing string substitutions, and more.Regular expressions enable developers to define complex search patterns and apply them to strings, making it easier to work with textual data.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 5: In PHP, to perform a pattern match using a Regular Expression, you can use the preg_match() function where the first argument is the ______ and the second argument is the string to search within.
    
// Explanation
// In PHP, to perform a pattern match using a Regular Expression, you can use the preg_match() function. The first argument passed to preg_match() is the Regular Expression pattern itself.The second argument is the target string or the string within which you want to search for a match.The preg_match() function returns true if the pattern is found within the target string, and false otherwise.It is a powerful function that allows you to search, extract, and manipulate data based on specific patterns defined by Regular Expressions.Learn more: https://www.php.net/manual/en/function.preg-match.php

// Question 6: A common use case for Regular Expressions in PHP is to ______.
    
// Explanation
// A common use case for Regular Expressions in PHP is to validate user input, such as email addresses or phone numbers. Regular Expressions provide a flexible and efficient way to define patterns for validating user-provided data. For example, you can use Regular Expressions to check if an email address follows the correct format or if a phone number has the expected structure. This helps ensure data integrity and improve the accuracy of user inputs. Regular Expressions can also be used for various other tasks like data extraction, text parsing, and pattern matching. Learn more: https://www.php.net/manual/en/book.regex.php



// Question 7: Regular Expressions in PHP are case -sensitive.
    
// Explanation
// The statement is true.Regular Expressions in PHP are case -sensitive by default. This means that when defining patterns or searching for matches, the case of the characters matters.For example, if a pattern specifies "abc", it will only match "abc" in the string and not "ABC" or "Abc".If case -insensitive matching is required, the appropriate modifier can be added to the Regular Expression pattern.Learn more: https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php

// Question 8: You can use Regular Expressions in PHP to validate email addresses.
    
// Explanation
// The statement is true.Regular Expressions are commonly used in PHP to validate email addresses.By defining a Regular Expression pattern that adheres to the email address format rules, you can easily check if a given string matches the pattern.This allows you to ensure that the email addresses provided by users meet the required format, helping to improve the accuracy of data and prevent incorrect inputs.Regular Expressions provide a powerful and flexible way to perform email address validation.Learn more: https://www.php.net/manual/en/filter.filters.validate.php

// Question 9: The preg_match() function in PHP returns true if the pattern was found in the string and false otherwise.
    
// Explanation
// The statement is true.In PHP, the preg_match() function is used to perform a pattern match using Regular Expressions.It returns true if the pattern was found in the string and false otherwise.The preg_match() function allows you to search for a specific pattern within a string and perform further actions based on the result.This function is commonly used in PHP to check if a string matches a particular pattern defined by a Regular Expression.Learn more: https://www.php.net/manual/en/function.preg-match.php

// Question 10: Which of the following are true about Regular Expressions in PHP ?
    
// Explanation
// The true statements about Regular Expressions in PHP are that they are powerful tools for pattern matching and manipulating strings.Regular Expressions provide a concise and flexible way to search, extract, and manipulate text data based on specific patterns.They can be used for tasks like data validation, string substitution, data extraction, and more.Regular Expressions are not used for mathematical calculations, are case -sensitive by default (unless specified otherwise with modifiers), and can handle dynamic inputs by using special characters and metacharacters to define flexible patterns.Learn more: https://www.php.net/manual/en/book.regex.php
    
// Question 11: What can be potential issues when working with Regular Expressions in PHP ?
    
// Explanation
// Potential issues when working with Regular Expressions in PHP can include performance concerns when processing large strings or complex patterns.Regular Expressions can be resource - intensive, so it's important to optimize them for better performance. Security vulnerabilities can arise when input validation and sanitization are not properly implemented, leading to potential attacks like Regular Expression Denial of Service (ReDoS) or injection attacks. Writing and understanding complex Regular Expressions can also be challenging, especially when dealing with intricate patterns. Additionally, PHP's support for Unicode characters and multibyte strings in Regular Expressions may have limitations, requiring additional considerations.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 12: Which of the following are common uses of Regular Expressions in PHP ?
    
// Explanation
// Common uses of Regular Expressions in PHP include validating user input, such as email addresses or phone numbers, by checking if they match the required pattern.Regular Expressions are also used for performing string substitutions or manipulations, allowing you to search for specific patterns in a string and replace them with desired values.They are useful in parsing and extracting data from text, such as log files or web scraping, as they can match and extract specific patterns.Additionally, Regular Expressions are employed in searching and filtering text data based on specific patterns, providing a powerful tool for data manipulation and analysis.Learn more: https://www.php.net/manual/en/book.regex.php

// Question 13: You are writing a PHP script and you need to check if a string matches a specific pattern.How would you do this using Regular Expressions in PHP ?
    
// Explanation
// To check if a string matches a specific pattern using Regular Expressions in PHP, you can use the preg_match() function. The preg_match() function takes two arguments: the Regular Expression pattern as the first argument, and the string to be checked as the second argument. It returns true if the pattern is found in the string and false otherwise. By providing the appropriate Regular Expression pattern, you can effectively match and validate strings against specific patterns. Learn more: https://www.php.net/manual/en/function.preg-match.php

// Question 14: You have a PHP script and you need to validate an email address.How would you do this using Regular Expressions in PHP ?
    
// Explanation
// To validate an email address using Regular Expressions in PHP, you can use the preg_match() function along with a Regular Expression pattern specifically designed for email validation.By passing the email address as the string to be checked and the appropriate Regular Expression pattern for email validation as the first argument, you can determine whether the email address matches the pattern or not.This allows you to perform a basic validation of email addresses and ensure they conform to the expected format.Learn more: https://www.php.net/manual/en/function.preg-match.php

// Question 15: You need to extract a part of a string in your PHP script.How would you do this using Regular Expressions in PHP ?
    
// Explanation
// To extract a part of a string using Regular Expressions in PHP, you can use the preg_match() function with capturing groups in the Regular Expression pattern. By defining capturing groups within the Regular Expression pattern, you can specify the part of the string you want to extract. When a match is found, the preg_match() function will populate an array with the captured groups. You can then access the desired part of the string using the appropriate index in the array. This allows you to extract specific portions of a string based on a pattern defined by a Regular Expression. Learn more: https://www.php.net/manual/en/function.preg-match.php