<?php

// ✅ Create Database
// $sql = "CREATE DATABASE testdb001";
// $conn -> exec($sql);

// ✅ Create Table

// $sql = "CREATE TABLE students (
// 		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// 		firstname VARCHAR(30) NOT NULL,
//  		lastname VARCHAR(30) NOT NULL,
//  		email VARCHAR(50),
//     phone VARCHAR(50)
// ) ";
// $conn -> exec($sql);


// ✅ Primary Key

// A primary key is a unique identifier for each record (row) in a database table.

// A primary key column cannot contain null values and must have unique values for each record in the table.

// A table can have only ONE primary key


//✅ Foreign Key

// A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

// ✅ Code Examples

// <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "testdb001";
// try {
//     $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);	
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     $sql = "CREATE TABLE students (
// 		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// 		firstname VARCHAR(30) NOT NULL,
//         lastname VARCHAR(30) NOT NULL,
//         email VARCHAR(50) NOT NULL,
//         phone VARCHAR(50))";
//     $conn->exec($sql);

//     echo "Database is created successfully";
// } catch(PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }