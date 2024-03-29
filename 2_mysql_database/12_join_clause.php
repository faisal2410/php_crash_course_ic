<?php
// ✅ Join Clause

// A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

// Go to Join_clause image

// ✅ Types

// Inner Join:
// Returns records that have matching values in both tables

// Left (outer) Join:
// Returns all records from the left table, and the matched records from the right table

// Right (outer) Join:
// Returns all records from the right table, and the matched records from the left table

// Full (outer) Join:
// Returns all records when there is a match in either left or right table

// Go to example_inner_join_image

// ✅ Example - Inner Join Code

// $statement = $conn->prepare("SELECT
//  s.id as sid,
//  s.department_id,
//  s.firstname,
//  s.lastname,
//  s.email,
//  s.age,
//  s.city,
//  d.id as did,
//  d.name as dname
//  FROM students s
//  INNER JOIN departments d
//  ON s.department_id = d.id");
//  $statement->execute();
//  $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Example - Left Join

// Go to example_left_join_image


// ✅Example - Left Join -Code

// $statement = $conn->prepare("SELECT
//   s.id as sid,
//   s.department_id,
//   s.firstname,
//   s.lastname,
//   s.email,
//   s.age,
//   s.city,
//   d.id as did,
//   d.name as dname
//   FROM students s
//   LEFT JOIN departments d
//   ON s.department_id = d.id");
//   $statement->execute();
//   $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to example_right_join image

// ✅ Example Right Join Code

// $statement = $conn->prepare("SELECT
//  s.id as sid,
//  s.department_id,
//  s.firstname,
//  s.lastname,
//  s.email,
//  s.age,
//  s.city,
//  d.id as did,
//  d.name as dname
//  FROM students s
//  RIGHT JOIN departments d
//  ON s.department_id = d.id");
//  $statement->execute();
//  $result = $statement->fetchAll(PDO::FETCH_ASSOC);



// Go to example_full_join image

// ✅ Example Full Join Code

// $statement = $conn->prepare("SELECT
//  s.id as sid, s.department_id,  s.firstname,  s.lastname,  s.email,
//  s.age, s.city, d.id as did,  d.name as dname
//  FROM students s
//  LEFT JOIN departments d
//  ON s.department_id = d.id
 
//  UNION 
 
//  SELECT
//  s.id as sid, s.department_id,  s.firstname,  s.lastname,  s.email,
//  s.age, s.city, d.id as did,  d.name as dname
//  FROM students s
//  RIGHT JOIN departments d
//  ON s.department_id = d.id");

//  $statement->execute();
//  $result = $statement->fetchAll(PDO::FETCH_ASSOC);


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



// // $q = $pdo->prepare("SELECT * FROM cities WHERE city_name = ?");
// // $q->execute(['Dhaka']);
// // $result = $q->fetchAll(PDO::FETCH_ASSOC);
// // foreach($result as $row) {

// //     $r = $pdo->prepare("SELECT firstname FROM students WHERE city_id = ?");
// //     $r->execute([$row['city_id']]);
// //     $result1 = $r->fetchAll(PDO::FETCH_ASSOC);
// //     foreach($result1 as $row1) {
// //         echo $row1['firstname'].'<br>';
// //     }

// // }




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




