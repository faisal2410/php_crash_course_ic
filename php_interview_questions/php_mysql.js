// Question 1: How can we connect to a MySQL database from a PHP script ?
    
// Explanation
// To connect to a MySQL database from a PHP script, you can use the mysqli_connect() function. This function establishes a connection to a MySQL database server using the provided credentials (host, username, password, and optional database name). It returns a MySQLi object that can be used to perform database operations such as executing queries and fetching results.It's important to note that the mysqli_connect() function is part of the MySQLi extension, which is the recommended extension for working with MySQL databases in PHP. The older mysql_connect() function is deprecated and should not be used in new code. Additionally, there is also the PDO extension that provides a consistent interface for connecting to various databases, including MySQL. You can use the PDO extension with the appropriate driver to connect to a MySQL database.

// Question 2: What is the function mysql_pconnect() useful for?
    
// Explanation
// The mysql_pconnect() function is used to establish a persistent connection to a MySQL database in PHP.A persistent connection allows the PHP script to reuse an existing database connection across multiple requests.This can help improve performance by avoiding the overhead of establishing a new connection for each request.However, it's important to note that the mysql_pconnect() function is part of the deprecated MySQL extension in PHP, and it is not recommended to use this function. Instead, you should use the MySQLi or PDO extensions to establish database connections in PHP, as they provide better security and functionality.
    
// Question 3: How is the result set of MySQL handled in PHP ?
    
// Explanation
// The result set of MySQL is typically handled using loops such as while or foreach in PHP.After executing a query, you can use functions like mysqli_fetch_assoc(), mysqli_fetch_array(), or mysqli_fetch_object() to fetch each row of the result set.These functions return an associative array, a numeric array, or an object representing a row of data, respectively.By iterating over the result set with a loop, you can process and manipulate the data retrieved from the database.It's important to note that the specific functions and methods may vary depending on the MySQL extension you are using (MySQLi or PDO). It's recommended to use prepared statements and parameter binding to prevent SQL injection and ensure secure database interactions in PHP.
    
// Question 4: How is it possible to know the number of rows returned in the result set ?
    
// Explanation
// To know the number of rows returned in the result set of a MySQL query, you can use the mysqli_num_rows() function in PHP.This function returns the number of rows in the result set as an integer.It is commonly used after executing a SELECT query to determine the number of rows returned by the query.For example, you can use mysqli_num_rows($result) to get the number of rows returned by a query stored in the $result variable.It's important to note that this function works with the MySQLi extension in PHP. If you are using the deprecated MySQL extension or the PDO extension, you need to use the respective functions provided by those extensions to retrieve the number of rows.

// Question 5: Which function gives us the number of affected entries by a query ?
    
// Explanation
// The mysqli_affected_rows() function is used to retrieve the number of affected rows by a query in PHP.It returns the number of rows affected by the last INSERT, UPDATE, DELETE, or REPLACE statement executed with the MySQLi connection.It's important to note that this function only works with the MySQLi extension in PHP. If you are using the deprecated MySQL extension or the PDO extension, you need to use the respective functions provided by those extensions to retrieve the number of affected rows.

// Question 6: What is the difference between mysqli_fetch_object() and mysqli_fetch_array() ?
    
// Explanation
// The mysqli_fetch_object() function and mysqli_fetch_array() function are used to fetch the current row of a result set in PHP, but they differ in the data structure they return.The mysqli_fetch_object() function returns the current row as an object, where each column is represented as an object property.On the other hand, the mysqli_fetch_array() function returns the current row as an array, where each column can be accessed by its numeric index or column name.Additionally, the mysqli_fetch_array() function supports both associative and numeric indexes, allowing you to retrieve column values using either approach.The choice between the two functions depends on your preferred data structure and how you want to access the fetched data.
    
// Question 7: How do I escape data before storing it in the database ?
    
// Explanation
// To escape data before storing it in the database in PHP, you have multiple options depending on the database extension you are using. - If you are using MySQLi or PDO, the recommended approach is to use prepared statements with parameter binding. Prepared statements automatically handle data escaping and prevent SQL injection by separating the data from the SQL query. You can bind variables to the prepared statement using placeholders, and the database driver takes care of proper escaping. This approach provides security, performance, and avoids the need for manual data escaping. - If you are using the MySQL extension, you can use the mysqli_real_escape_string() function to escape data before storing it in the database. This function escapes special characters in a string to make it safe for use in an SQL statement. However, using prepared statements with parameter binding is still the preferred approach over manual escaping. - Additionally, it's important to note that different databases and database extensions may have specific escaping functions or mechanisms. It's essential to refer to the documentation of the specific database and extension you are using for detailed guidance on escaping data.