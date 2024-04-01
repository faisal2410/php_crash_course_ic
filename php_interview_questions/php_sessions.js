// Question 1: How can you start a session in PHP ?
    
// Explanation
// To start a session in PHP, you can use the session_start() function. This function initializes a new session or resumes an existing session.It needs to be called at the beginning of your PHP script before any session variables are accessed.For more details, refer to: http://php.net/manual/en/function.session-start.php

// Question 2: What PHP superglobal array holds the session variables ?
    
// Explanation
// The $_SESSION superglobal array holds the session variables in PHP.It allows you to store and access data across multiple pages or requests within the same session.The values stored in $_SESSION are specific to each individual user session and can be used to maintain user - specific data throughout the browsing session.Additional information can be found at: http://php.net/manual/en/reserved.variables.session.php

// Question 3: How can you destroy a session in PHP ?
    
// Explanation
// To destroy a session in PHP, you can use the session_destroy() function. This function removes all session data and ends the current session.Additionally, you may need to call session_unset() to unset all session variables before calling session_destroy().This combination ensures the complete destruction of the session.To learn more, check: http://php.net/manual/en/function.session-destroy.php

// Question 4: In PHP, you can start a session using the session_start() ______.
    
// Explanation
// In PHP, you can start a session using the session_start() function. This function is called as a statement to initialize a new session or resume an existing session.It needs to be called at the beginning of your PHP script before any session variables are accessed.Refer to: http://php.net/manual/en/function.session-start.php

// Question 5: You can access the session variables in PHP using the $_SESSION ______ array.
    
// Explanation
// The $_SESSION superglobal array in PHP is used to access session variables.It is a predefined superglobal array that allows you to store and retrieve data across multiple pages or requests within the same session.The values stored in $_SESSION are specific to each individual user session.For further information, visit: http://php.net/manual/en/reserved.variables.session.php

// Question 6: To destroy a session in PHP, you can use the session_destroy() ______.
    
// Explanation
// To destroy a session in PHP, you can use the session_destroy() function. This function is called as a statement to remove all session data and end the current session.It effectively destroys the session.It's important to note that session_destroy() alone may not unset all session variables, so you may also need to call session_unset() to unset all session variables before calling session_destroy(). Learn more: http://php.net/manual/en/function.session-destroy.php

// Question 7: In PHP, you can start a session using the session_start() function.

// Explanation
// In PHP, you can start a session by using the session_start() function. This function initializes a new session or resumes an existing session.It needs to be called at the beginning of your PHP script before any session variables are accessed.Refer to: http://php.net/manual/en/function.session-start.php

// Question 8: The $_SESSION superglobal array in PHP holds the session variables.
    
// Explanation
// The $_SESSION superglobal array in PHP holds the session variables.It allows you to store and retrieve data across multiple pages or requests within the same session.The values stored in $_SESSION are specific to each individual user session.For further information, visit: http://php.net/manual/en/reserved.variables.session.php

// Question 9: You can destroy a session in PHP by using the session_destroy() function.

// Explanation
// In PHP, you can destroy a session by using the session_destroy() function. This function removes all session data and ends the current session.Additionally, you may need to call session_unset() to unset all session variables before calling session_destroy().This combination ensures the complete destruction of the session.To learn more, check: http://php.net/manual/en/function.session-destroy.php

// Question 10: Which of the following are ways to handle sessions in PHP ?
    
// Explanation
// In PHP, there are multiple ways to handle sessions.You can use session functions provided by PHP, such as session_start() to start a session, session_destroy() to destroy a session, etc.Session variables stored in the $_SESSION superglobal array can be used to store and access session - specific data.Session cookies are used to maintain session information in the client's browser, and session IDs uniquely identify sessions.

// Question 11: What are some common uses of the $_SESSION superglobal array in PHP ?
    
// Explanation
// The $_SESSION superglobal array in PHP is commonly used for various purposes.It allows storing user - specific data, tracking user activity across different pages, implementing shopping carts, and maintaining user preferences throughout the session.It provides a way to persistently store and retrieve data specific to a user's session. Refer to: http://php.net/manual/en/reserved.variables.session.php

// Question 12: What are some common practices in PHP session handling ?
    
// Explanation
// In PHP session handling, some common practices include securing session data by encrypting sensitive information, regenerating session IDs to prevent session fixation attacks, expiring inactive sessions for security purposes, and using secure cookies to transmit session IDs over HTTPS.These practices enhance the security and integrity of sessions in PHP applications.See more at: http://php.net/manual/en/features.sessions.php

// Question 13: You are writing a PHP script and you need to start a session.How would you do this ?
    
// Explanation
// To start a session in PHP, you can use the session_start() function. This function must be called at the beginning of your PHP script before any session variables are accessed.It initializes a new session or resumes an existing session.For more details, refer to: http://php.net/manual/en/function.session-start.php

// Question 14: You have a PHP script and you need to access the session variables.How would you do this ?
    
// Explanation
// To access session variables in PHP, you can use the $_SESSION superglobal array.It allows you to store and retrieve data across multiple pages or requests within the same session.The values stored in $_SESSION are specific to each individual user session.For further information, visit: http://php.net/manual/en/reserved.variables.session.php

// Question 15: You need to destroy a session in your PHP script.How would you do this ?
    
// Explanation
// To destroy a session in PHP, you can use the session_destroy() function. This function removes all session data and ends the current session. Additionally, you may need to call session_unset() to unset all session variables before calling session_destroy(). This combination ensures the complete destruction of the session. To learn more, check: http://php.net/manual/en/function.session-destroy.php