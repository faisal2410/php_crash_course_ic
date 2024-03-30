// Question 1: How can you handle file uploads in PHP ? Discuss the steps involved and best practices to ensure security and validation.
    
// Explanation
// Handling file uploads in PHP requires specific steps to ensure security and validation. These steps involve creating an HTML form with the correct attributes, retrieving the uploaded file in PHP, validating the file size, type, and attributes, and securely moving the file to a designated location. Best practices include validating and sanitizing user input, setting file size limits, checking file types, and preventing direct execution of uploaded files. Implementing proper security measures and validating user input is crucial to protect against potential vulnerabilities. For more information and examples, you can refer to the PHP documentation: http://php.net/manual/en/features.file-upload.php

// Question 2:What is the function file_get_contents() useful for?
    
// Explanation
// The file_get_contents() function is used to read the contents of a file and return the contents as a string in PHP.It is commonly used to fetch the contents of a remote file or read the contents of a local file.This function can be useful for reading configuration files, fetching data from APIs, or reading the contents of HTML templates.For example, you can use file_get_contents('https://example.com/data.json') to fetch the JSON data from a remote API.The file_get_contents() function provides a convenient way to retrieve the contents of a file without manually opening and reading the file.
    
// Question 3: What does the unlink() function mean?

// Explanation
// The unlink() function in PHP is used to delete a file from the server.It takes a single argument, which is the path to the file you want to delete.For example, you can use unlink('path/to/file.txt') to delete the file "file.txt" located in the "path/to" directory.It's important to note that the unlink() function permanently deletes the file, and there is no way to undo this operation. Therefore, caution should be exercised when using this function. It's also worth mentioning that the unlink() function requires appropriate file system permissions to delete the file.
    
// Question 4: What is the purpose of the file_put_contents() function in PHP ?
    
// Explanation
// The file_put_contents() function in PHP is used to write data to a file.It takes the file name and the data to be written as parameters and writes the data to the specified file.This function is a convenient way to write data to a file without explicitly opening and closing the file handles.Learn more: http://php.net/manual/en/function.file-put-contents.php

// Question 5: What is the purpose of the file_exists() function in PHP ?
    
// Explanation
// The file_exists() function in PHP is used to check if a file or directory exists.It returns true if the specified file or directory exists and false otherwise.This function is useful for performing file operations based on the existence of files or directories.Learn more: http://php.net/manual/en/function.file-exists.php

// Question 6: What is the purpose of the file_get_contents() function in PHP ?
    
// Explanation
// The file_get_contents() function in PHP is used to read the contents of a file and return them as a string. It takes the file name or URL as a parameter and returns the contents of the file. This function is commonly used to read files and retrieve their contents. Learn more: http://php.net/manual/en/function.file-get-contents.php