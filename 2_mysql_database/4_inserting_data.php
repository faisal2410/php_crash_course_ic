<?php

// ✅ Inserting Data

// Query:
// INSERT INTO table_name (column1, column2, column3,...)
// VALUES (value1, value2, value3,...)

// Example:
// $sql = "INSERT INTO students (firstname, lastname, email, phone) VALUES ('Smith', 'Ranson', 'smith@example.com', '123-456-3333')";
// $conn->exec($sql);

// ✅ Insert Multiple Data


// $conn->beginTransaction();
// $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('Ricardo', 'Andrews', 'ricardo@example.com', '765-446-1754')");
// $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('Daniel', 'Hanna', 'daniel@example.com', '413-659-7998')");
// $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('James', 'Gamble', 'james@example.com', '498-765-9283')");
// $conn->commit();


//✅ Get Last Inserted ID

// $last_id = $conn->lastInsertId();

// ✅ Code Examples

// 👉index.php

// <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "testdb001";
// try {
//     $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);	
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     // $conn->beginTransaction();
//     // $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('Ricardo', 'Andrews', 'ricardo@example.com', '765-446-1754')");
//     // $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('Daniel', 'Hanna', 'daniel@example.com', '413-659-7998')");
//     // $conn->exec("INSERT INTO students (firstname, lastname, email, phone) VALUES ('James', 'Gamble', 'james@example.com', '498-765-9283')");
//     // $conn->commit();

//     $sql = "INSERT INTO students (firstname, lastname, email, phone) VALUES ('Ray', 'Johnson', 'ray@example.com', '232-222-3434')";
//     $conn->exec($sql);

//     $last_id = $conn->lastInsertId();
//     echo $last_id;



    //echo "Success!";
// } catch(PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }
