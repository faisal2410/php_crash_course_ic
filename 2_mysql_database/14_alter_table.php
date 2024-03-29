<?php

// ✅ ALTER Table

// ALTER statement is used to add, delete, or modify columns in an existing table


//✅ Add Column


// ALTER TABLE table_name
// ADD column_name datatype;
// Example:
// ALTER TABLE students
// ADD country varchar(255);

// ✅Drop or Delete Column

// ALTER TABLE table_name
// DROP COLUMN column_name; 
// Example:
// ALTER TABLE students
// DROP COLUMN country;


// ✅ Rename Column

// ALTER TABLE table_name
// RENAME COLUMN old_name to new_name; 
// Example:
// ALTER TABLE students
// RENAME COLUMN country to location;


// ✅ Alter/Modify Datatype

// ALTER TABLE table_name
// MODIFY COLUMN column_name datatype;
// Example:
// ALTER TABLE students
// MODIFY COLUMN country text;


// ✅ Code Examples

// 👉 index.php

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


// $q = $pdo->prepare("ALTER TABLE students 
//                     MODIFY COLUMN phone text");
// $q->execute();
//$result = $q->fetchAll(PDO::FETCH_ASSOC);


// echo "<pre>";
// print_r($result);
// echo "</pre>";
