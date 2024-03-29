<?php

//✅ Select Query

// SELECT * FROM table_name
// SELECT column_name(s) FROM table_name

// $statement = $conn->prepare("SELECT * FROM students");
// $statement = $conn->prepare("SELECT firstname,phone FROM students");


//✅ Go to select_query_1 image
// PDO::FETCH_ASSOC 
// - Retrieves data from a database query as an associative array

// $statement = $conn->prepare("SELECT firstname,city 
// FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

//✅ Go to select_query_2 image
// PDO::FETCH_NUM 
// - Retrieves data from a database query as a numeric array

// $statement = $conn->prepare("SELECT firstname,city 
// FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_NUM);


// ✅Go to select_query_3 image
// PDO::FETCH_COLUMN
// - Get plain one-dimensional array.
// - First column (from select items first one) will be fetched

// $statement = $conn->prepare("SELECT city,firstname FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_COLUMN);

// ✅Go to select_query_4 image
// PDO::FETCH_GROUP
// This mode groups the returned rows into a nested array, 
// where indexes will be unique values from the first column, and 
// values will be arrays similar to ones returned by regular fetchAll(). 

// $statement = $conn->prepare("SELECT city,firstname,lastname,
// phone FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_GROUP);

// ✅Go to select_query_5 image
// PDO::FETCH_GROUP | PDO::FETCH_COLUMN
// This one groups the first column with all values from the second column.

// $statement = $conn->prepare("SELECT city,firstname,lastname,phone 
// FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_GROUP | PDO::FETCH_COLUMN);

//✅ Go to select_query_6 image
// PDO::FETCH_BOTH
// - Retrieves data from a database query as an associative array and a numeric array

// $statement = $conn->prepare("SELECT firstname,city FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_BOTH);

//✅ Go to select_query_7 image
// - It is used to return only distinct (different) values

// Example:
// $statement = $conn->prepare("SELECT distinct(city) FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// ✅Go to select_query_8 image
// - SELECT MIN returns the smallest value for a column.
// - SELECT MAX returns the largest value for a column.

// Example:
// $statement = $conn->prepare("SELECT MAX(age) as 'Younger Person' FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);


//✅ COUNT(), SUM(), AVG() Functions

// - COUNT, SUM, and AVG are aggregate functions.
// - COUNT returns a count of the number of data values.
// - SUM returns the sum of the data values.
// - AVG returns the average of the data values.

// SELECT COUNT(column-name) FROM table-name
// SELECT SUM(column-name) FROM table-name
// SELECT AVG(column-name) FROM table-name


// ✅Go to select_query_9 image
// - Total number of students in the table

// $statement = $conn->prepare("SELECT COUNT(id) as 'Total Students' FROM students");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to select_query_10 image
// - Summation of ages of students who live in Khulna City

// $statement = $conn->prepare("SELECT SUM(age) as 'Sum of Ages' FROM students WHERE city=?");
// $statement->execute(['Khulna']);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

//✅ Go to select_query_11 image
// - Average of ages of students who live in Khulna City

// $statement = $conn->prepare("SELECT AVG(age) as ‘Average Age' FROM students WHERE city=?");
// $statement->execute(['Khulna']);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);


//✅ Code Examples

// <?php
// $dbhost = 'localhost';
// $dbname = 'testdb001';
// $dbuser = 'root';
// $dbpass = '';
// try {
//     $pdo = new PDO("mysql:host={$dbhost};dbname={$dbname}", $dbuser, $dbpass);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// }
// catch( PDOException $exception ) {
//     echo "Connection error :" . $exception->getMessage();
// }


// $q = $pdo->prepare("SELECT firstname,email,lastname FROM students");
// $q->execute();
// $result = $q->fetchAll(PDO::FETCH_COLUMN);

// echo '<table>';
// echo '<tr><th>Id</th><th>First Name</th><th>Email</th></tr>';
// foreach($result as $row) {
//     echo '<tr>';
//     echo '<td>'.$row['id'].'</td>';
//     echo '<td>'.$row['firstname'].'</td>';
//     echo '<td>'.$row['email'].'</td>';
//     echo '</tr>';
// }
// echo '</table>';

// echo "<pre>";
// print_r($result);
// echo "</pre>";

