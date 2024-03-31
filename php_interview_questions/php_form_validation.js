// Question 1: How can you validate an email field in a PHP form ?
    
// Explanation
// To validate an email field in a PHP form, you can use a regular expression.Regular expressions provide a powerful and flexible way to match patterns in strings.By using a specific regular expression pattern, you can check if the input matches the structure of a valid email address.Learn more: https://www.php.net/manual/en/filter.examples.validation.php

// Question 2:How can you validate a URL field in a PHP form ?
    
// Explanation
// To validate a URL field in a PHP form, you can use multiple methods.One common approach is to use a regular expression to check if the input matches the pattern of a valid URL.Additionally, you can compare the input against a list of known URLs or simply check if it starts with the "http://" or "https://" prefix.Learn more: https://www.php.net/manual/en/filter.examples.validation.php

// Question 3: What PHP function can be used to validate an email in a PHP form?
// Explanation
// The PHP function that can be used to validate an email in a PHP form is filter_var(). Specifically, you can use the FILTER_VALIDATE_EMAIL filter to validate the email input against the predefined email format. filter_var() is a versatile function that allows you to validate various types of data, including emails, URLs, and more. Learn more: https://www.php.net/manual/en/function.filter-var.php