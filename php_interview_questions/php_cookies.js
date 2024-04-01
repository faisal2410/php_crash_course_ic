// Question 1: How can you set a cookie in PHP ?
    
// Explanation
// In PHP, you can set a cookie using the setcookie() function. This function allows you to set the name, value, expiration time, path, domain, and other parameters for the cookie.Learn more: http://php.net/manual/en/function.setcookie.php
    
// Question 2: What PHP superglobal array holds the information about cookies ?
    
// Explanation
// The $_COOKIE superglobal array holds the information about cookies in PHP.It provides access to the values of cookies that have been sent in the HTTP request.For further information, refer to: http://php.net/manual/en/reserved.variables.cookies.php

// Question 3: How can you delete a cookie in PHP ?
    
// Explanation
// To delete a cookie in PHP, you can use the setcookie() function with an expiration time in the past or set it to zero.This will invalidate the cookie and remove it from the user's browser. For more details, check: http://php.net/manual/en/function.setcookie.php

// Question 4: In PHP, you can set a cookie using the setcookie() function, which takes the name of the cookie, its value, and its expiration time as ______.
    
// Explanation
// The setcookie() function in PHP takes the name of the cookie, its value, and its expiration time as arguments.These arguments allow you to define the properties of the cookie such as its name, value, and when it should expire.More information: http://php.net/manual/en/function.setcookie.php

// Question 5: You can access the cookie's information in PHP using the $_COOKIE ______ array.

// Explanation
// The cookie's information in PHP can be accessed using the $_COOKIE superglobal array. This array contains key-value pairs where the keys represent the names of the cookies and the values hold the corresponding cookie values. More details: http://php.net/manual/en/reserved.variables.cookies.php

// Question 6: To delete a cookie in PHP, you can use the setcookie() function with an expiration date in the ______.
    
// Explanation
// To delete a cookie in PHP, you can use the setcookie() function and set the expiration date in the past.This causes the browser to discard the cookie, effectively deleting it.Additional information: http://php.net/manual/en/function.setcookie.php

// Question 7: Which of the following are ways to handle cookies in PHP ?
    
// Explanation
// In PHP, there are multiple ways to handle cookies.The setcookie() function is used to set cookies, while the $_COOKIE superglobal array allows access to the cookie information.The header() function can also be used to set cookies, although it's less common. Storing cookies in a database is not a built-in method in PHP but can be done as a custom implementation.

// Question 8: What are some common uses of the $_COOKIE superglobal array in PHP ?
    
// Explanation
// The $_COOKIE superglobal array in PHP is commonly used for various purposes.It can be used to retrieve stored user preferences, implement remember me functionality, track user sessions, and personalize website content based on previously set cookies.It provides a way to store and retrieve data associated with the user's browsing session.

// Question 9: What are some common practices in PHP cookie handling ?
    
// Explanation
// When handling cookies in PHP, it's important to follow best practices. This includes sanitizing user input to prevent security vulnerabilities, setting secure and HTTP-only flags to enhance security, expiring cookies after a certain time to manage their lifespan, and encrypting sensitive cookie values to protect data privacy. These practices help ensure the proper handling and security of cookies in PHP applications.

// Question 10: You are writing a PHP script and you need to set a cookie.How would you do this ?
    
// Explanation
// To set a cookie in PHP, you can use the setcookie() function. This function allows you to define the cookie name, value, expiration time, path, domain, and other parameters.By calling setcookie(), you can set the desired cookie in your PHP script.Refer to: http://php.net/manual/en/function.setcookie.php

// Question 11: You have a PHP script and you need to access the information stored in a cookie.How would you do this ?
    
// Explanation
// To access the information stored in a cookie within a PHP script, you can use the $_COOKIE superglobal array.This array contains the names and values of the cookies sent by the client in the HTTP request.By accessing $_COOKIE['cookie_name'], you can retrieve the specific information stored in the cookie.See more at: http://php.net/manual/en/reserved.variables.cookies.php

// Question 12: You need to delete a cookie in your PHP script.How would you do this ?
    
// Explanation
// To delete a cookie in PHP, you can use the setcookie() function with an expiration time in the past or set it to zero. This will invalidate the cookie and remove it from the user's browser. Alternatively, you can use the unset() function to remove a specific cookie value from the $_COOKIE superglobal array. More details: http://php.net/manual/en/function.setcookie.php
