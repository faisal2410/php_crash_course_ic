<?php
// ✅ Where Clause

// SELECT column_name(s) FROM table_name WHERE column_name operator value 
// Example:
// $statement = $conn->prepare("SELECT * FROM students WHERE lastname=?");
// $statement->execute(['Johnson']);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);
// $statement = $conn->prepare("SELECT * FROM students WHERE id > ?");
// $statement->execute([3]);

// $statement = $conn->prepare("SELECT * FROM students WHERE lastname = ? AND city =? ");
// $statement->execute(['Johnson','Khulna']);

// $statement = $conn->prepare("SELECT * FROM students WHERE lastname = ? OR city =? ");
// $statement->execute(['Johnson','Khulna']);

// $statement = $conn->prepare("SELECT * FROM students WHERE firstname=? AND (lastname=? OR lastname=? "));
// $statement->execute(['Peter', 'Johnson','Brent']);

// $statement = $conn->prepare("SELECT * FROM students WHERE (firstname=? OR firstname=?) AND (lastname=? OR lastname=?"));
// $statement->execute(['Smith', 'Peter','Johnson','Brent']);


// ✅ Operators in The WHERE Clause

// = (Equal)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal)
// <= (Less than or equal)
// <> (Not equal)
// BETWEEN (Between a certain range)
// LIKE (Search for a pattern)
// IN (To specific multiple possible values for a column)

// ✅ Use WHERE BETWEEN

// $statement = $conn->prepare("SELECT * FROM students 
// WHERE age BETWEEN ?AND ?");
// $statement->execute([30,36]);
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// Goto where_between image

// ✅ Use WHERE LIKE

// $statement = $conn->prepare("SELECT * FROM students WHERE city LIKE ?");
// $statement->execute(['d%']);
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// Go to where_like image

//✅ Use WHERE IN

// - List all students from Dhaka or Chittagong.

// $statement = $conn->prepare("SELECT * FROM students WHERE city IN (?,?)");
// $statement->execute(['Dhaka','Chittagong']);
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// Go to where in image


// ✅ Use where Not in

// - List all students who are not in Dhaka or Khulna.

// $statement = $conn->prepare("SELECT * FROM students WHERE city NOT IN (?,?)");
// $statement->execute(['Dhaka','Khulna']);
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// Go to where not in image

// ✅ Use WHERE IN Subquery

// - List all students that are from the same cities as where the institutes are.

// $statement = $conn->prepare("SELECT firstname,city 
//                     FROM students 
//                     WHERE city IN (
//                         SELECT institute_city FROM institutes
//                     )
//                 ");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_NUM);

// Go to where_in_subquery image


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

// $q = $pdo->prepare("SELECT * FROM students WHERE lastname LIKE ?");
// $q->execute(['%d']);
// $result = $q->fetchAll(PDO::FETCH_ASSOC);

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