<?php


//✅ Methods to Use

// PHP 5 or later:- MySQLi Extension (i means improved)- PDO (PHP Data Object)
// MySQL is depricated from PHP 5.


//✅ MySQLi or PDO?

// PDO works with 12 different database systems.
// MySQLi work with only MySQL database

// Both are object-oriented, but MySQLi also offers a procedural API.

// Both support Prepared Statements (Prepared Statements protect from SQL injection)


// ✅MySQLi (Object Oriented)

// <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "testdb001";
// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";
// ?>


// ✅MySQLi(Procedural);

// <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "testdb001 ";
// // Create connection
// $conn = mysqli_connect($servername, $username, $password, $dbname);
// // Check connection
// if (!$conn) {die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected successfully";
// ?>

// ✅ PDO

// <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "testdb001";
// try {$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
//     // set the PDO error mode to exception
//     $conn -> setAttribute(PDO:: ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
//     echo "Connected successfully";
// } catch (PDOException $e) {
//     echo "Connection failed: ".$e -> getMessage();
// }
// ?>

// ✅ Close the connection

// MySQLi(Object Oriented)
// $conn -> close();

// MySQLi(Procedural)
// mysqli_close($conn);

// PDO
// $conn = null;



