<?php
// ✅ UNION / UNION ALL Clause

// It is used to combine the results of two or more SELECT statements into a single result set. 
// The SELECT statements must have the same number of columns and the data types of the columns must be compatible.
// UNION returns only unique rows.
// UNION ALL allows duplicate rows to be present.

// $statement = $conn->prepare("
//  SELECT * FROM students WHERE city=?
//  UNION / UNION ALL
//  SELECT * FROM students WHERE city=?
//  ");
// $statement->execute(['Dhaka','Dhanmondi']);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);


// Go to union_union_all image

// $statement = $conn->prepare("
//  SELECT * FROM students WHERE city=?
//  UNION / UNION ALL
//  SELECT * FROM teachers WHERE city=?
//  ");
// $statement->execute(['khulna']);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to union_union_all_2 image


// UNION Example

// $statement = $conn->prepare("
//  SELECT city FROM students
//  UNION
//  SELECT city FROM teachers
//  ");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);


// Go to union_example

// ✅ Union All Example

// $statement = $conn->prepare("
//  SELECT city FROM students
//  UNION ALL
//  SELECT city FROM teachers
//  ");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);



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


// $q = $pdo->prepare("SELECT s.firstname,ci.city_name,co.country_name 
//                     FROM students s

//                     JOIN cities ci
//                     ON s.city_id = ci.city_id

//                     JOIN countries co
//                     ON s.country_id = co.country_id

//                     WHERE co.country_name = ?
// ");
// $q->execute(['USA']);
// $result = $q->fetchAll(PDO::FETCH_ASSOC);



// $q = $pdo->prepare("SELECT * FROM cities WHERE city_name = ?");
// $q->execute(['Dhaka']);
// $result = $q->fetchAll(PDO::FETCH_ASSOC);
// foreach($result as $row) {

//     $r = $pdo->prepare("SELECT firstname FROM students WHERE city_id = ?");
//     $r->execute([$row['city_id']]);
//     $result1 = $r->fetchAll(PDO::FETCH_ASSOC);
//     foreach($result1 as $row1) {
//         echo $row1['firstname'].'<br>';
//     }

// }




// echo '<table>';
// echo '<tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th></tr>';
// foreach($result as $row) {
//     echo '<tr>';
//     echo '<td>'.$row['id'].'</td>';
//     echo '<td>'.$row['firstname'].'</td>';
//     echo '<td>'.$row['lastname'].'</td>';
//     echo '<td>'.$row['email'].'</td>';
//     echo '<td>'.$row['phone'].'</td>';
//     echo '</tr>';
// }
// echo '</table>';

// echo "<pre>";
// print_r($result);
// echo "</pre>";